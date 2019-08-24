const { loadSubcommands } = require('@/load/subcommand');
const { MANAGE } = require('@/constants/commands/stamp');

module.exports = {
	name: MANAGE.CMD,
	description: MANAGE.DESC,
	hidden: false,
	devOnly: false,
	subcommands: loadSubcommands('stamp'),
	permissions: [],
	execute: async ({ guild, channel }) => {
		const baseURL = global.env.FILE_MANAGEMENT_URL;
		channel.send(`${baseURL}/stamp/${guild.id}`);
	},
};
