const { createAccount } = require('../component/user');

const Controller = {};

Controller.handleCreateAccount = async (req, res) => {
	// TODO, realizar validações

	try {
		const userData = req.body;
		const result = await createAccount(userData);

		res.status(201).json({
			success: true,
			message: 'Account created successfully.',
			data: result,
		});
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

module.exports = Controller;
