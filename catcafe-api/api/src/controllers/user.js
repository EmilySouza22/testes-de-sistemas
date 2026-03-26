const { createAccount } = require('../components/user');

const Controller = {};

Controller.handleCreateAccount = async (req, res) => {
	// validações dos dados da requisição
	const userData = req.body;

	if (!userData.name) {
		res.status(400).json({
			success: false,
			error: 'Campo nome é obrigatório',
		});
	}

    if(!userData.email) {
        res.status(400).json({
            sucess: false,
            error: 'Campo email é obrigatório'
        })
    }

    if(!userData.password) {
        res.status(400).json({
            sucess: false,
            error: 'O campo senha é obrigatório'
        })
    }

    if(!userData.phone) {
        res.status(400).json({
            sucess: false,
            error: 'O campo telefone é obrigatório'
        })
    }

    if(userData.email.includes('@')){
        res.status(400).json({
            sucess: false,
            error: 'Email inválido'
        })
    }

	const result = await createAccount(userData);
	res.status(201).json({
		success: true,
		message: 'Account created successfully.',
		data: result,
	});
};

module.exports = Controller;
