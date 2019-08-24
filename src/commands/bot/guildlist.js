const Guild = require('@/model/guild');
const { MESSAGE_MAX_LENGTH } = require('@/constants/discord');
const { GUILDLIST } = require('@/constants/commands/bot');


module.exports = {
	name: GUILDLIST.CMD,
	devOnly: true,
	permissions: [],
	execute: async ({ bot, channel }) => {
		const guilds = bot.guilds;
		let configs = await Guild.find().exec();
		configs = configs.reduce((total, guild) => {
			total[guild.id] = guild;
		}, {});

		let guildsStr = '';
		for (const guild of guilds.values()) {
			const guildEntry = GUILDLIST.GUILD_ENTRY(guild, configs[guild.id]);
			if (guildsStr.length + guildEntry.length > MESSAGE_MAX_LENGTH) {
				await channel.send(guildsStr);
				guildsStr = '';
			}
			else {
				guildsStr = `${guildsStr}\n${guildEntry}`;
			}
		}

		if (guildsStr.length) {
			await channel.send(guildsStr);
		}
	},
};
