const { MessageEmbed } = require('discord.js');
const StampLog = require('@/model/stamp-log');
const { STATS } = require('@/constants/commands/stamp');
const COLOR = require('@/constants/color');
const ERROR = require('@/constants/error');
const PERMISSION = require('@/constants/permission');
const { COOLDOWN } = require('@/constants/type');

module.exports = {
	name: STATS.CMD,
	description: STATS.DESC,
	hidden: false,
	devOnly: false,
	permissions: [
		PERMISSION.EMBED_LINKS,
		PERMISSION.ADD_REACTIONS,
		PERMISSION.MANAGE_MESSAGES,
	],
	cooldown: COOLDOWN.PER_GUILD(5),
	execute: async ({ bot, author, guild, channel, msg }) => {
		if (author.id === global.env.BOT_DEV_USER_ID) {
			const stamps = await StampLog.find({ time: undefined })
				.sort({ callCount: -1 })
				.limit(STATS.MAX_ENTRY)
				.exec();

			if (!stamps.length) {
				msg.error(ERROR.STAMP.NO_ENTRY);
				return;
			}

			const guildIds = stamps.map(stamp => stamp.guildId);
			const images = stamps.map(stamp => STATS.ENTRY_IMAGE(stamp.cmd));
			const guilds = guildIds.map(id => {
				return bot.guilds.has(id)
					? STATS.ENTRY_GUILD(bot.guilds.get(id))
					: STATS.ENTRY_GUILD_REMOVED;
			});

			const resultEmbed = new MessageEmbed()
				.setTitle(STATS.RESULT_DEV_TITLE)
				.setDescription(stamps.map((stamp, index) => STATS.ENTRY_DEV(stamp, guilds[index], images[index])).join('\n'))
				.setColor(COLOR.WHITE);
			channel.send(resultEmbed);
			return;
		}

		channel.startTyping();
		const stamps = await StampLog.find({ guildId: guild.id, time: undefined })
			.sort({ callCount: -1 })
			.limit(STATS.MAX_ENTRY)
			.exec();

		if (!stamps.length) {
			msg.error(ERROR.STAMP.NO_ENTRY);
			return;
		}

		const images = stamps.map(stamp => STATS.ENTRY_IMAGE(stamp.cmd));

		const resultEmbed = new MessageEmbed()
			.setTitle(STATS.RESULT_TITLE(guild.name))
			.setDescription(stamps.map((stamp, index) => STATS.ENTRY(stamp, images[index])).join('\n'))
			.setColor(COLOR.BOT);
		channel.send(resultEmbed);
	},
};
