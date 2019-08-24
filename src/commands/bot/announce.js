const prompt = require('@/utils/prompt');
const { MessageEmbed } = require('discord.js');
const dedent = require('@/utils/dedent');
const Guild = require('@/model/guild');
const COLOR = require('@/constants/color');
const ERROR = require('@/constants/error');
const PERMISSION = require('@/constants/permission');
const { ANNOUNCE } = require('@/constants/commands/bot');


module.exports = {
	name: ANNOUNCE.CMD,
	hidden: true,
	devOnly: true,
	permissions: [],
	execute: async ({ bot, author, msg, content, channel }) => {
		if (!content) {
			msg.error(ERROR.SAY.EMPTY_CONTENT);
			return;
		}
		const embedContent = new MessageEmbed()
			.setTitle(ANNOUNCE.MESSAGE_TITLE)
			.setDescription(`${content}\n\n${ANNOUNCE.FOOTER}`)
			.setColor(COLOR.BOT)
			.setFooter(author.user.tag, author.user.avatarURL());

		if (msg.attachments.size > 0) {
			embedContent.setImage(msg.attachments.first().url);
		}

		const textContent = dedent`
			${ANNOUNCE.MESSAGE_TITLE}
			${content}`;

		const willSend = await prompt(embedContent, channel, author, ANNOUNCE.PROMPT_TIME);
		if (!willSend) return;

		let configs = await Guild.find().exec();
		configs = configs.reduce((total, guild) => {
			total[guild.id] = guild;
		}, {});

		const guilds = bot.guilds;
		guilds.forEach(guild => {
			const config = configs[guild.id];
			if (config && !config.listenAnnounce) return;

			let channelToSend = guild.systemChannel;
			if (config && config.announceChannel) {
				channelToSend = guild.channels.get(config.announceChannel);
			}
			// Fallback, get first channel that bot can send message
			if (!channelToSend) {
				channelToSend = guild.channels
					.filter(guildChannel => guildChannel.type === 'text')
					.filter(guildChannel => guildChannel.permissionsFor(bot.user).has(PERMISSION.SEND_MESSAGES.flag))
					.first();
			}

			// Don't send message if there's no channel to send
			if (!channelToSend) return;

			const permissionsGranted = channelToSend.permissionsFor(bot.user);
			const announce = permissionsGranted.has(PERMISSION.EMBED_LINKS.flag)
				? embedContent
				: textContent;
			channelToSend.send(announce);
		});
	},
};
