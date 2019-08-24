const StampLog = require('@/model/stamp-log');

module.exports = async (guildId, cmd) => {
	// Daily
	StampLog.findOneAndUpdate(
		{ guildId, cmd, time: new Date().toDateString() },
		{ '$inc': { callCount: 1 } },
		{ upsert: true, setDefaultsOnInsert: true }
	).exec();

	// Total
	StampLog.findOneAndUpdate(
		{ guildId, cmd, time: undefined },
		{ '$inc': { callCount: 1 } },
		{ upsert: true, setDefaultsOnInsert: true }
	).exec();
};
