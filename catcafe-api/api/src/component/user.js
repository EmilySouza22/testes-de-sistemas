const { saveUser } = require('../model/user.js');
const { validateRegister } = require('../component/validator.js');

const UserComponent = {};

UserComponent.createAccount = async (userData) => {
	// Validações
	//  aqui é legal utilizar o componente validator que já está praticamente pronto e tem cobertura de testes.
	const { valid, message } = validateRegister(userData);

	if (valid) {
		// TODO, o que tem que acontecer se o banco retornar false?
		return await saveUser(userData);
	} else {
		return { created: false, message };
	}
};

module.exports = UserComponent;
