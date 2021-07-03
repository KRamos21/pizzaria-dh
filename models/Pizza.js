const pizzas = require("../database/pizzas.json");
const fs = require("fs");

const PizzaModel = {
  findById: (id) => pizzas.find((pizza) => pizza.id === id),
  findAll: () => pizzas,
  create: (pizza) => {
    pizzas.push(pizza);
    fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));
  },
  update: (id, { sabor, categoria, preco }) => {
    const pizzaEncontrada = PizzaModel.findById(id);

    pizzaEncontrada.sabor = sabor;
    pizzaEncontrada.categoria = categoria;
    pizzaEncontrada.preco = preco;

    fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));

    return pizzaEncontrada;
  },
  destroy: (id) => {
    // opção 1
    // const index = pizzas.findIndex((pizza) => pizza.id === id);
    // pizzas.splice(index, 1);
    // fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));

    //opção 2
    const newPizzas = pizzas.filter((pizza) => pizza.id !== id);

    fs.writeFileSync("./database/pizzas.json", JSON.stringify(newPizzas));
  },
};

module.exports = PizzaModel;
