const { MessageEmbed } = require('discord.js');
const Directory = require('@/model/directory');
const Image = require('@/model/image');
const COLOR = require('@/constants/color');
const { RANDOM } = require('@/constants/commands/stamp');

module.exports = async (bot, msg) => {
	if (!msg.guild) return;

	const guildId = msg.guild.id;
	const msgSplitted = msg.content.split(/ +/);
	const dirName = msgSplitted[0];
	const fileName = msgSplitted[1];

	if (dirName && !fileName) {
		const name = dirName;
		const image = name === RANDOM.CMD
			?	await Image.find({
				dirId: 0,
				guildId,
			}).countDocuments().exec().then(async count => {
				const index = Math.floor(Math.random() * count);
				return await Image.findOne({
					dirId: 0,
					guildId,
				}).skip(index).exec();
			})
			: await Image.findOne({
				name,
				dirId: 0,
				guildId,
			}).exec();
		if (!image) return;

		msg.channel.send(
			new MessageEmbed()
				.setImage(image.url)
				.setColor(COLOR.BOT)
		);
	}
	else if (dirName && fileName) {
		const directory = await Directory.findOne({
			name: dirName,
			guildId,
		}).exec();
		if (!directory) return;

		const image = fileName === RANDOM.CMD
			? await Image.find({
				dirId: directory._id,
			}).countDocuments().exec().then(async count => {
				const index = Math.floor(Math.random() * count);
				return await Image.findOne({
					dirId: directory._id,
				}).skip(index).exec();
			})
			: await Image.findOne({
				name: fileName,
				dirId: directory._id,
			}).exec();
		if (!image) return;

		msg.channel.send(
			new MessageEmbed()
				.setImage(image.url)
				.setColor(COLOR.BOT)
		);
	}
};
