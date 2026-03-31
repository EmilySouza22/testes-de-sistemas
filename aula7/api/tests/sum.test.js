const { validateAnimal } = require('../src/services/userService.js');

// Aula 1 sobre Matchers

// este arquivo testa funções para verificar se estão funcionando corretamente
// toBe compara valores simples como números e strings
// toEqual compara objetos e arrays completamente

test('validar animal', () => {
	expect(
		validateAnimal({ name: 'Bob', species: 'Gato', price: 20, age: 2 }),
	).toBe(true);
});

test('validar preço', () => {
	expect(
		validateAnimal({ name: 'Nina', species: 'Gato', price: 2, age: 10 }),
	).toBe(true);
});

// teste básico de matemática
test('soma de dois + dois', () => {
	// expect diz ao jest qual é o valor a testar
	// toBe verifica se o resultado é exatamente 4
	expect(2 + 2).toBe(4);
});

//verifica quantidade de cães em estoque
test('quantidade de cães em estoque', () => {
	const caes_labrador = 2;
	const caes_golden = 2;
	const total_caes = caes_labrador + caes_golden;
	expect(total_caes).toBe(4);
});

//verifica propriedades de um animal da loja
const animal_estoque = {
	especie: 'Golden Retriever',
	idade: 2,
};

describe('o animal no estoque', () => {
	test('animal é golden retriever', () => {
		expect(animal_estoque.especie).toBe('Golden Retriever');
	});

	test('animal tem 2 anos', () => {
		expect(animal_estoque.idade).toBe(2);
	});
});

//objeto com informações de um animal cadastrado
const animal_cadastro = {
	nome: 'Rex',
	raca: 'Labrador',
};

describe('O Cadastro do Animal', () => {
	//este teste verifica se o nome do animal está correto
	test('animal tem nome rex', () => expect(animal_cadastro.nome).toBe('Rex'));
	//este teste verifica se a raça está correta
	test('animal é labrador', () =>
		expect(animal_cadastro.raca).toBe('Labrador'));
});

//verificar dados de outro animal cadastrado
const animal_xyz = {
	nome: 'Linda',
	raca: 'Poodle',
};

describe('Verificar um Animal', () => {
	test('animal tem nome bidu', () => expect(animal_xyz.nome).toBe('Linda'));
	test('animal é poodle', () => expect(animal_xyz.raca).toBe('Poodle'));
});

//dois animais cadastrados com as mesmas info
const animalA = {
	nome: 'Rex',
	raca: 'Labrador',
	preco: 500.0,
};

const animalB = {
	nome: 'Rex',
	raca: 'Labrador',
	preco: 500.0,
};

describe('Teste Animais Iguais', () => {
	//toEqual compara o conteúdo completo de objetos
	//não importa se são instâncias diferentes, se têm os mesmos dados passa
	test('animais com mesmo preço e raça', () => {
		expect(animalA).toEqual(animalB);
	});
});

//dois animais idênticos da loja com mesmos dados
const animalGemeo1 = {
	raca: 'Husky',
	idade: 1,
	preco: 800.0,
};

const animalGemeo2 = {
	raca: 'Husky',
	idade: 1,
	preco: 800.0,
};

describe('Teste Animais Idênticos', () => {
	test('dois huskys têm os mesmos dados', () => {
		// mesmo sendo animais diferentes, toEqual reconhece que têm o mesmo valor
		expect(animalGemeo1).toEqual(animalGemeo2);
	});
});

// dois animais da loja com preços diferentes
const animalC = {
	raca: 'Bulldog',
	idade: 3,
	preco: 1500.0,
};

const animalD = {
	raca: 'Bulldog',
	idade: 3,
	preco: 1200.0,
};

describe('Teste Animais Diferentes', () => {
	// not.toEqual testa se os objetos são DIFERENTES
	test('animais com preços diferentes', () => {
		expect(animalC).not.toEqual(animalD);
	});
});

//dois cães de raças diferentes na loja
const cao_grande = {
	raca: 'Pastor Alemão',
	tamanho: 'grande',
	preco: 2000.0,
};

const cao_pequeno = {
	raca: 'Chihuahua',
	tamanho: 'pequeno',
	preco: 300.0,
};

describe('Teste Raças Diferentes', () => {
	test('cães de raças diferentes têm dados diferentes', () => {
		// not.toEqual verifica se os objetos NÃO são iguais
		expect(cao_grande).not.toEqual(cao_pequeno);
	});
});

//comparar lista de raças em estoque
const racas_estoque_loja1 = ['Labrador', 'Golden Retriever', 'Poodle'];
const racas_estoque_loja2 = ['Labrador', 'Golden Retriever', 'Poodle'];

describe('Teste Raças Em Estoque', () => {
	test('duas lojas têm as mesmas raças em estoque', () => {
		//toEqual também funciona com arrays
		expect(racas_estoque_loja1).toEqual(racas_estoque_loja2);
	});
});

//lista de raças diferente entre lojas
const racas_loja_x = ['Labrador', 'Golden Retriever', 'Poodle'];
const racas_loja_y = ['Labrador', 'Husky', 'Dalmáta'];

describe('Teste Raças Diferentes Em Estoque', () => {
	test('lojas têm raças diferentes em estoque', () => {
		// not.toEqual verifica se os arrays são diferentes
		expect(racas_loja_x).not.toEqual(racas_loja_y);
	});
});

// Testando com toThrow

// test('testando a função de nomes', () => {
// 	expect(() => sum(2, 'a')).toThrow('Os valores precisam ser numericos')
// })

// test('testando a função de nomes', () => {
// 	expect(() => nome('Senai')).toThrow('Nome inválido');
// });

// test('testando a função de nomes', () => {
// 	try {
//         expect(() => nome('senai'))
//     } catch (error) {
//         error.message()
//     }
// })
