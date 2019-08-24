const Youtube = require('@/commands/search/youtube');
const { aquirePlayer } = require('@/music/helper');
const Song = require('@/music/song');
const ERROR = require('@/constants/error');
const PERMISSION = require('@/constants/permission');
const { PLAY } = require('@/constants/commands/music');
const { YOUTUBE } = require('@/constants/commands/search');
const { MUSIC_TYPE } = require('@/constants/type');


module.exports = {
	name: PLAY.CMD,
	description: PLAY.DESC,
	usage: PLAY.USAGE,
	hidden: false,
	devOnly: false,
	permissions: [
		PERMISSION.MANAGE_MESSAGES,
		PERMISSION.CONNECT,
		PERMISSION.SPEAK,
	],
	execute: async context => {
		const { bot, author, content, msg, channel } = context;
		if (!content.length) {
			msg.error(ERROR.MUSIC.NOT_RESOLVABLE);
			return;
		}
		channel.startTyping();

		const ytVideoRegex = /(?:.+?)?(?:\/v\/|watch\/|\?v=|&v=|youtu\.be\/|\/v=|^youtu\.be\/)([a-zA-Z0-9_-]{11})+/i;
		const ytPlaylistRegex = /[&?]list=([^&]+)/i;


		// Playlist
		if (ytPlaylistRegex.test(content)) {
			const playlistId = content.match(ytPlaylistRegex)[1];
			const getPlaylistInfo = Youtube.api.playlists.list({
				part: 'snippet',
				id: playlistId,
			}).then(res => res.data.items)
				.catch(e => {
					bot.logger.error(e, msg);
				});

			const getPlaylist = Youtube.api.playlistItems.list({
				part: 'snippet',
				playlistId,
				maxResults: PLAY.PLAYLIST_MAX_RESULT,
			}).then(res => res.data)
				.catch(e => {
					bot.logger.error(e, msg);
				});

			const [playlistInfo, playlist] = await Promise.all([getPlaylistInfo, getPlaylist]);

			if (!playlistInfo || !playlist) {
				msg.error(ERROR.SEARCH.SOMETHING_WRONG(PLAY.PLAYLIST));
				return;
			}
			if (!playlistInfo.length || !playlist.items.length) {
				msg.error(ERROR.SEARCH.EMPTY_RESULT(PLAY.PLAYLIST));
				return;
			}

			const songs = playlist.items.map(video => new Song(
				YOUTUBE.VIDEO_URL(video.snippet.resourceId.videoId),
				MUSIC_TYPE.YOUTUBE,
				video.snippet.title,
				null,
				author
			));

			const player = await aquirePlayer(context);
			if (player) {
				await player.enqueueList({
					title: playlistInfo[0].snippet.localized.title,
					length: songs.length,
					songs: songs,
				}, channel);
			}

			return;
		}
		// Single video
		else if (ytVideoRegex.test(content)) {
			// Video check should be after playlist test
			// As playlist url typed https://www.youtube.com/watch?v=VIDEO_ID&list=LIST_ID
			// Which can be handled both in video/playlist
			const videoId = content.match(ytVideoRegex)[1];
			const videos = await Youtube.api.videos.list({
				part: 'snippet',
				id: videoId,
				maxResults: 1,
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

			const video = videos[0];
			const player = await aquirePlayer(context);
			if (player) {
				const song = new Song(
					YOUTUBE.VIDEO_URL(video.id),
					MUSIC_TYPE.YOUTUBE,
					video.snippet.localized.title,
					null,
					author
				);
				await player.enqueue(song, channel);
			}
		}
		// First video of youtube search
		else {
			const searchText = content;
			const videos = await Youtube.api.search.list({
				part: 'snippet',
				q: searchText,
				maxResults: 1,
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

			const video = videos[0];
			const player = await aquirePlayer(context);
			if (player) {
				const song = new Song(
					YOUTUBE.VIDEO_URL(video.id.videoId),
					MUSIC_TYPE.YOUTUBE,
					video.snippet.title,
					null,
					author
				);
				await player.enqueue(song, channel);
			}
			return;
		}
	},
};
