const mongoose = require('mongoose');

module.exports = mongoose.model('StampLog', new mongoose.Schema({
	callCount: { type: Number, default: 0 },
	guildId: String,
	cmd: String,
	time: Date,
}));
