// Functions handling client.on() method
const COLOR = require('@/constants/color');
const EMOJI = require('@/constants/emoji');
const ERROR = require('@/constants/error');
const { LOG_TYPE, ACTIVITY } = require('@/constants/type');
const { RichEmbed } = require('discord.js');
const { DEV, BOT } = require('@/constants/message');
const { HELP } = require('@/constants/command');


const onReady = function() {
	this._setLogger();

	this.logger.log(LOG_TYPE.VERBOSE)
		.atConsole()
		.setTitle(DEV.BOT_READY_INDICATOR)
		.setColor(COLOR.TATARU)
		.send();

	this.logger.log(LOG_TYPE.VERBOSE)
		.setTitle(BOT.READY_TITLE(this))
		.setDescription(BOT.READY_DESC(this))
		.setThumbnail(this.user.avatarURL)
		.setColor(COLOR.GOOD)
		.send();

	// Set default activity
	const activity = `${global.env.BOT_DEFAULT_PREFIX}${HELP.CMD}`;
	this.user.setActivity(activity, {
		type: ACTIVITY.LISTENING,
	});
};

const onMessage = async function(msg) {
	const prefix = this.prefix;

	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).split(/ +/);
	const cmdName = args.shift();

	// No command matched
	if (!this.commands.has(cmdName)) return;

	const cmd = this.commands.get(cmdName);
	// for Dev Only command
	if (cmd.devOnly && msg.author.id !== global.env.BOT_DEV_USER_ID) return;

	// Check any permission for executing command is missing
	const permissionsGranted = msg.channel.permissionsFor(this.user);
	if (cmd.permissions && !cmd.permissions.every(permission => permissionsGranted.has(permission.flag))) {
		const neededPermissionList = cmd.permissions.reduce((prevStr, permission) => {
			return `${prevStr}\n- ${permission.message}`;
		}, '');
		msg.channel.send(ERROR.CMD_PERMISSION_IS_MISSING(neededPermissionList));
		return;
	}

	// Exclude one blank after command name
	const content = msg.content.slice(prefix.length + cmdName.length + 1);
	try {
		await cmd.execute({
			bot: this,
			msg: msg,
			content: content,
			author: msg.member,
			guild: msg.guild,
			channel: msg.channel,
			args: args,
		});
	}
	catch (err) {
		await msg.channel.stopTyping();

		msg.channel.send(ERROR.CMD_FAILED);
		this.logger.error(err, msg);
	}
};

const onGuildJoin = function(guild) {
	if (!(guild.systemChannel)) return;
	const helpCmd = `${this.prefix}${HELP.CMD}`;
	const embedMsg = new RichEmbed().setTitle(BOT.GUILD_JOIN_TITLE(this))
		.setDescription(BOT.GUILD_JOIN_DESC(this, helpCmd))
		.setThumbnail(this.user.avatarURL)
		.setFooter(BOT.GUILD_JOIN_FOOTER(this))
		.setColor(COLOR.TATARU);
	guild.systemChannel.send(embedMsg);
};

const onError = function(err) {
	// Known error
	if (err.message === 'read ECONNRESET') return;
	this.logger.log(LOG_TYPE.ERROR)
		.setTitle(DEV.CMD_FAIL_TITLE(err))
		.setDescription(DEV.CMD_FAIL_DESC(err))
		.send();
};

const onWarning = function(info) {
	this.logger.log(LOG_TYPE.VERBOSE)
		.setTitle(`${EMOJI.WARNING} Warning`)
		.setDescription(info.toString())
		.setColor(COLOR.WARNING)
		.send();
};

module.exports = {
	ready: onReady,
	message: onMessage,
	guildCreate: onGuildJoin,
	error: onError,
	warn: onWarning,
};
