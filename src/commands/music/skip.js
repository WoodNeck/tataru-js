const ERROR = require('@/constants/error');
const { SKIP } = require('@/constants/commands/music');


module.exports = {
	name: SKIP.CMD,
	description: SKIP.DESC,
	hidden: false,
	devOnly: false,
	permissions: [],
	execute: ({ msg, bot, guild }) => {
		if (!bot.players.has(guild.id)) {
			msg.error(ERROR.MUSIC.NO_PLAYERS_AVAILABLE);
			return;
		}
		const player = bot.players.get(guild.id);
		if (player.queue.length <= 0) {
			msg.error(ERROR.MUSIC.NO_SONGS_AVAILABLE);
			return;
		}

		const isSkipped = player.skip();
		if (!isSkipped) {
			msg.error(ERROR.MUSIC.CANNOT_SKIP);
		}
	},
};
