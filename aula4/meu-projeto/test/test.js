import createUser from "./src/userService.js";

//Deve criar um usuário válido com todos os campos corretos
test("Teste de criar um usuário válido", () => {
  const userData = { name: "Emily de Souza", age: 21, isActive: true };

  const user = createUser(userData);

  expect(user.name).toBe("Emily de Souza");
  expect(user.age).toBe(21);
  expect(user.isActive).toBe(true);
  expect(user.roles).toEqual(["user"]);
  expect(user.id).toBeDefined();
});

//Deve lançar erro quando o nome não for informado
test("Teste de lançar erro ao criar usuário sem nome", () => {
  const userData = { age: 21 };

  expect(() => createUser(userData)).toThrow("O nome do usuário é obrigatório.");
});

//Deve lançar erro quando o usuário for menor de idade
test("Teste de lançar erro ao criar usuário menor de idade", () => {
  const userData = { name: "Emilie Pessoa", age: 17 };

  expect(() => createUser(userData)).toThrow("O usuário deve ser maior de idade.");
});