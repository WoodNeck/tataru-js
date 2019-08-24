const { google } = require('googleapis');
const Song = require('@/music/song');
const Recital = require('@/utils/recital');
const { StringPage } = require('@/utils/page');
const { aquirePlayer } = require('@/music/helper');
const ERROR = require('@/constants/error');
const EMOJI = require('@/constants/emoji');
const PERMISSION = require('@/constants/permission');
const { YOUTUBE } = require('@/constants/commands/search');
const { RECITAL_END, MUSIC_TYPE, COOLDOWN } = require('@/constants/type');


const api = google.youtube({
	version: 'v3',
	auth: global.env.GOOGLE_API_KEY,
});

module.exports = {
	name: YOUTUBE.CMD,
	description: YOUTUBE.DESC,
	usage: YOUTUBE.USAGE,
	hidden: false,
	devOnly: false,
	permissions: [
		PERMISSION.EMBED_LINKS,
		PERMISSION.ADD_REACTIONS,
		PERMISSION.MANAGE_MESSAGES,
		PERMISSION.CONNECT,
		PERMISSION.SPEAK,
	],
	api: api,
	cooldown: COOLDOWN.PER_USER(3),
	execute: async context => {
		const { bot, author, msg, channel, content } = context;
		if (!content) {
			msg.error(ERROR.SEARCH.EMPTY_CONTENT);
			return;
		}
		channel.startTyping();

		const searchText = content;
		const videos = await api.search.list({
			part: 'snippet',
			q: searchText,
			maxResults: YOUTUBE.MAX_RESULTS,
		}).then(res => res.data.items)
			.catch(e => {
				bot.logger.error(e, msg);
			});

		if (!videos) {
			msg.error(ERROR.SEARCH.SOMETHING_WRONG(YOUTUBE.TARGET));
			return;
		}

		if (!videos.length) {
			msg.error(ERROR.SEARCH.EMPTY_RESULT(YOUTUBE.TARGET));
			return;
		}

		const recital = new Recital(bot, msg);
		const pages = videos.map(video => {
			return new StringPage()
				.setTitle(YOUTUBE.VIDEO_URL(video.id.videoId))
				.setData(new Song(
					YOUTUBE.VIDEO_URL(video.id.videoId),
					MUSIC_TYPE.YOUTUBE,
					video.snippet.title,
					null,
					author
				));
		});
		recital.book.addPages(pages);
		recital.addReactionCallback(EMOJI.PLAY, async () => {
			const song = recital.currentData;
			const player = await aquirePlayer(context);

			if (player) {
				await player.enqueue(song, channel);
			}
			return RECITAL_END.DELETE_ALL_MESSAGES;
		}, 1);

		recital.start(YOUTUBE.RECITAL_TIME);
	},
};
