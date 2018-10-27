const Tataru = require('@/tataru');
const Invite = require('@/commands/utility/invite')(global.env.BOT_DEFAULT_LANG);
const { makeBotMock, makeContextMock } = require('../../setups/mock');


describe('Command: Invite', () => {
	it('will send invite message', async () => {
		const context = makeContextMock();
		context.bot.generateInvite = () => {
			return new Promise(resolve => {
				resolve();
			});
		};

		await Invite.execute(context);
		expect(context.channel.send).toBeCalled();
	});
})
