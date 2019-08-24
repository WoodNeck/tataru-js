const ERROR = require('@/constants/error');
const { DONT_OUT } = require('@/constants/commands/music');


module.exports = {
	name: DONT_OUT.CMD,
	description: DONT_OUT.DESC,
	hidden: false,
	devOnly: false,
	permissions: [],
	execute: ({ msg, bot, guild, channel }) => {
		if (!bot.players.has(guild.id)) {
			msg.error(ERROR.MUSIC.NO_VOICE_CHANNEL_IN);
			return;
		}

		const player = bot.players.get(guild.id);
		player.outOnFinish = !player.outOnFinish;

		if (player.outOnFinish) {
			channel.send(DONT_OUT.UNSET);
		}
		else {
			channel.send(DONT_OUT.SET);
		}
	},
};
