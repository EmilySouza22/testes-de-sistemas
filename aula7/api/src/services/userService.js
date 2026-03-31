const Service = {};

Service.validateAnimal = (animal) => {
	// ERRO 1: A verificação de falso positivo falha no preço 0 (adoção gratuita)
	// Bug corrigido
	if (!animal.name || !animal.species || Number.isNaN(animal.price) || Number.isNaN(animal.age)) {
		throw new Error('Missing required fields');
	}

	// ERRO 2: A verificação estrita de tipo falha se a idade vier como "5" (string) do frontend
    // Bug corrigido
	if (typeof animal.age !== 'number') {
		throw new Error('Age must be a valid number');
	}

    //validando se preço é do tipo numérico
    if (typeof animal.price !== 'number') {
		throw new Error('Price must be a valid number');
	}

	//validar se idade é um numero positivo
	if (animal.age < 0) {
		throw new Error('Age must be a positive number');
	}

	// ERRO 3: Sem validação para preço negativo
	// Bug corrigido
	if (animal.price < 0) {
		throw new Error('Invalid price');
	}

	return true;
};

Service.calculateDiscount = (price, isMember) => {
	// ERRO 4: Erro de lógica. Subtrai 10 (valor fixo) em vez de 10%
    // Bug corrigido
	if (isMember) {
		return price - (10/100 * price);
	}
	return price;
};

module.exports = Service;
