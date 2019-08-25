const { MessageEmbed } = require('discord.js');
const { range } = require('@/utils/func');
const COLOR = require('@/constants/color');
const EMOJI = require('@/constants/emoji');
const ERROR = require('@/constants/error');
const PERMISSION = require('@/constants/permission');
const { EMBED_MAX_FIELD } = require('@/constants/discord');
const { RANDOM_TEAM } = require('@/constants/commands/utility');

module.exports = {
	name: RANDOM_TEAM.CMD,
	description: RANDOM_TEAM.DESC,
	usage: RANDOM_TEAM.USAGE,
	hidden: false,
	devOnly: false,
	permissions: [
		PERMISSION.EMBED_LINKS,
		PERMISSION.ADD_REACTIONS,
		PERMISSION.MANAGE_MESSAGES,
	],
	execute: async ({ msg, author, channel, content }) => {
		channel.startTyping();

		const partyName = content;
		const collectEmbed = new MessageEmbed()
			.setTitle(RANDOM_TEAM.COLLECT_TITLE(partyName))
			.setDescription(RANDOM_TEAM.COLLECT_DESC)
			.setFooter(RANDOM_TEAM.COLLECT_FOOTER(0))
			.setColor(COLOR.BOT);
		const collectMsg = await channel.send(collectEmbed);

		// Receive reactions
		const buttonEmojis = [EMOJI.RAISED_HAND, EMOJI.GREEN_CHECK];
		const reactionFilter = (reaction, user) => {
			if (buttonEmojis.every(emoji => emoji !== reaction.emoji.name)) return false;
			if (user.bot) return false;
			if (reaction.emoji.name === EMOJI.GREEN_CHECK && user.id !== author.id) return false;

			return true;
		};

		const memberCollector = collectMsg.createReactionCollector(reactionFilter, {
			dispose: true,
			time: RANDOM_TEAM.COLLECT_TIME * 60 * 1000,
		});
		memberCollector.on('collect', reaction => {
			if (reaction.emoji.name === EMOJI.RAISED_HAND) {
				collectEmbed.setFooter(RANDOM_TEAM.COLLECT_FOOTER(memberCollector.total));
				collectMsg.edit(collectEmbed);
			}
			else {
				// GREEN_CHECK received
				memberCollector.stop();
			}
		});
		memberCollector.on('remove', reaction => {
			if (reaction.emoji.name !== EMOJI.RAISED_HAND) return;

			collectEmbed.setFooter(RANDOM_TEAM.COLLECT_FOOTER(memberCollector.total));
			collectMsg.edit(collectEmbed);
		});
		memberCollector.on('end', async collected => {
			if (!collectMsg.deleted && collectMsg.deletable) collectMsg.delete();
			const users = collected.has(EMOJI.RAISED_HAND)
				? [...(collected.get(EMOJI.RAISED_HAND).users.values())]
					.filter(user => !user.bot)
					.map(user => user.toString())
				: [];

			if (users.length < 2) {
				msg.error(ERROR.RANDOM_TEAM.MEMBER_TOO_SMALL);
				return;
			}

			const maxTeamEmbed = new MessageEmbed()
				.setTitle(RANDOM_TEAM.MAX_TEAM_TITLE(users.length))
				.setDescription(RANDOM_TEAM.MAX_TEAM_DESC(Math.min(users.length, EMBED_MAX_FIELD)))
				.setColor(COLOR.BOT);
			await channel.send(maxTeamEmbed);

			const maxTeamCollector = channel.createMessageCollector(
				newMsg => newMsg.author.id === author.id,
				{ time: RANDOM_TEAM.MAX_TEAM_TIME * 60 * 1000 }
			);

			maxTeamCollector.on('collect', authorMsg => {
				let maxTeamNumber = /^\d+$/.exec(authorMsg.content);
				if (maxTeamNumber === null) {
					msg.error(ERROR.RANDOM_TEAM.MAX_TEAM_NOT_PROPER);
					return;
				}
				maxTeamNumber = Math.min(Math.min(maxTeamNumber[0], EMBED_MAX_FIELD), users.length);

				const minPlayerCount = Math.floor(users.length / maxTeamNumber);
				const additionalPlayerCount = Math.floor(users.length % maxTeamNumber);

				const shuffledUsers = users.shuffle();

				const teamResultEmbed = new MessageEmbed()
					.setTitle(RANDOM_TEAM.RESULT_TITLE(content))
					.setColor(COLOR.BOT)
					.setFooter(RANDOM_TEAM.RESULT_FOOTER);

				for (const teamIndex of range(maxTeamNumber)) {
					const teamMembers = shuffledUsers.splice(0, minPlayerCount + (teamIndex < additionalPlayerCount));
					teamMembers[0] = `${EMOJI.CROWN} ${teamMembers[0]}`;
					for (let idx = 1; idx < teamMembers.length; idx++) {
						teamMembers[idx] = `${EMOJI.SMALL_WHITE_SQUARE} ${teamMembers[idx]}`;
					}

					teamResultEmbed.addField(RANDOM_TEAM.RESULT_FIELD_TITLE(teamIndex), teamMembers.join('\n'), true);
				}

				channel.send(teamResultEmbed);

				maxTeamCollector.stop('collected');
			});

			maxTeamCollector.on('stop', (_, reason) => {
				if (reason === 'collected') return;

				// User didn't send proper message.
				msg.error(ERROR.RANDOM_TEAM.USER_DID_NOT_SEND_MSG);
			});
		});

		// Set buttons
		for (const emoji of buttonEmojis) {
			await collectMsg.react(emoji);
		}
	},
};
