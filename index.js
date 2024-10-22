const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
//Ej 1
const pares = pizzas.filter ((pizza) => pizza.id % 2 === 0)
const NombreIdPar = pares.map ((pizza) => pizza.nombre);

console.log(`Las Pizzas con ID par son: ${NombreIdPar.join(", ")}`);

//Ej2
const PreciosBaratos = pizzas.filter ((pizza) => pizza.precio < 600)
const NombresBaratos = PreciosBaratos.map ((pizza) => pizza.nombre);
const PrecioPizza = PreciosBaratos.map ((pizza) => pizza.precio);

console.log(`Si, hay una pizza por debajo de $600, esta es la ${NombresBaratos.join(", ")} y vale ${PrecioPizza}`);

//EJ3

pizzas.forEach((pizza) => {
console.log(`La ${pizza.nombre} vale ${pizza.precio}`);
});


//E4

pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene estos ingredientes: ${pizza.ingredientes.join(", ")}`);
  });


//E4 pero con los ingredientes separados

pizzas.forEach((pizza) => {
  console.log(`Ingredientes de la ${pizza.nombre}:`);

  pizza.ingredientes.forEach((ingrediente)=> {console.log(`- ${ingrediente}`);
  })
  
})






