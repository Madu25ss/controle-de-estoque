import type {Request, Response, NextFunction} from "express";

const produtos = [
  {
    "id": 1,
    "name": "Oil - Canola",
    "price": 7411.49,
    "quantity": 58
  },
  {
    "id": 2,
    "name": "Appetizer - Crab And Brie",
    "price": 326.35,
    "quantity": 19
  },
  {
    "id": 3,
    "name": "Broom Handle",
    "price": 4629.43,
    "quantity": 98
  },
  {
    "id": 4,
    "name": "Potatoes - Idaho 80 Count",
    "price": 988.64,
    "quantity": 11
  },
  {
    "id": 5,
    "name": "Shrimp - Black Tiger 8 - 12",
    "price": 8056.34,
    "quantity": 59
  },
  {
    "id": 6,
    "name": "Lobster - Cooked",
    "price": 8861.92,
    "quantity": 45
  },
  {
    "id": 7,
    "name": "Snapple - Iced Tea Peach",
    "price": 3421.46,
    "quantity": 16
  },
  {
    "id": 8,
    "name": "Pop Shoppe Cream Soda",
    "price": 7489.69,
    "quantity": 11
  },
  {
    "id": 9,
    "name": "Sugar - Invert",
    "price": 7740.28,
    "quantity": 45
  },
  {
    "id": 10,
    "name": "Ecolab - Medallion",
    "price": 1704.11,
    "quantity": 48
  },
  {
    "id": 11,
    "name": "Glucose",
    "price": 4503.71,
    "quantity": 46
  },
  {
    "id": 12,
    "name": "Pepper - Roasted Red",
    "price": 8155.38,
    "quantity": 19
  },
  {
    "id": 13,
    "name": "Gingerale - Schweppes, 355 Ml",
    "price": 9570.07,
    "quantity": 94
  },
  {
    "id": 14,
    "name": "Wine - Lamancha Do Crianza",
    "price": 44.78,
    "quantity": 10
  },
  {
    "id": 15,
    "name": "Brandy - Bar",
    "price": 3942.33,
    "quantity": 99
  },
  {
    "id": 16,
    "name": "Wine - Chateau Aqueria Tavel",
    "price": 2396.43,
    "quantity": 99
  },
  {
    "id": 17,
    "name": "Beef - Inside Round",
    "price": 8803.19,
    "quantity": 45
  },
  {
    "id": 18,
    "name": "Macaroons - Homestyle Two Bit",
    "price": 259.22,
    "quantity": 9
  },
  {
    "id": 19,
    "name": "Pickles - Gherkins",
    "price": 8778.32,
    "quantity": 13
  },
  {
    "id": 20,
    "name": "Plaintain",
    "price": 5522.17,
    "quantity": 74
  },
  {
    "id": 21,
    "name": "Wine - Chateau Aqueria Tavel",
    "price": 9540.31,
    "quantity": 13
  },
  {
    "id": 22,
    "name": "Beef Striploin Aaa",
    "price": 9592.49,
    "quantity": 95
  },
  {
    "id": 23,
    "name": "Quail Eggs - Canned",
    "price": 6244.48,
    "quantity": 86
  },
  {
    "id": 24,
    "name": "Coffee Cup 8oz 5338cd",
    "price": 4541.96,
    "quantity": 43
  },
  {
    "id": 25,
    "name": "Gelatine Powder",
    "price": 6889.18,
    "quantity": 43
  },
  {
    "id": 26,
    "name": "Cucumber - English",
    "price": 2957.27,
    "quantity": 98
  },
  {
    "id": 27,
    "name": "Oil - Margarine",
    "price": 8267.21,
    "quantity": 90
  },
  {
    "id": 28,
    "name": "Salt And Pepper Mix - Black",
    "price": 965.94,
    "quantity": 98
  },
  {
    "id": 29,
    "name": "Capon - Breast, Wing On",
    "price": 9653.6,
    "quantity": 87
  },
  {
    "id": 30,
    "name": "Mushroom - Trumpet, Dry",
    "price": 5972.78,
    "quantity": 82
  },
  {
    "id": 31,
    "name": "Sausage - Meat",
    "price": 4451.59,
    "quantity": 62
  },
  {
    "id": 32,
    "name": "Dill Weed - Dry",
    "price": 7994.13,
    "quantity": 24
  },
  {
    "id": 33,
    "name": "Soup - Campbells, Lentil",
    "price": 622.21,
    "quantity": 63
  },
  {
    "id": 34,
    "name": "Duck - Legs",
    "price": 4366.07,
    "quantity": 91
  },
  {
    "id": 35,
    "name": "Glaze - Apricot",
    "price": 8194.65,
    "quantity": 29
  },
  {
    "id": 36,
    "name": "Butter - Salted, Micro",
    "price": 9159.9,
    "quantity": 22
  },
  {
    "id": 37,
    "name": "Mushroom - Chanterelle, Dry",
    "price": 9469.68,
    "quantity": 47
  },
  {
    "id": 38,
    "name": "Bread - Triangle White",
    "price": 9271.59,
    "quantity": 75
  },
  {
    "id": 39,
    "name": "Muffin Puck Ww Carrot",
    "price": 1555.01,
    "quantity": 30
  },
  {
    "id": 40,
    "name": "Silicone Parch. 16.3x24.3",
    "price": 7466.63,
    "quantity": 35
  },
  {
    "id": 41,
    "name": "Veal - Slab Bacon",
    "price": 5998.44,
    "quantity": 19
  },
  {
    "id": 42,
    "name": "Bandage - Flexible Neon",
    "price": 8885.71,
    "quantity": 1
  },
  {
    "id": 43,
    "name": "Lumpfish Black",
    "price": 9764.72,
    "quantity": 100
  },
  {
    "id": 44,
    "name": "Soup - Campbells Beef Stew",
    "price": 3847.62,
    "quantity": 37
  },
  {
    "id": 45,
    "name": "Pancetta",
    "price": 5630.34,
    "quantity": 65
  },
  {
    "id": 46,
    "name": "Beer - Steamwhistle",
    "price": 9286.2,
    "quantity": 39
  },
  {
    "id": 47,
    "name": "Pastry - Apple Muffins - Mini",
    "price": 1788.31,
    "quantity": 27
  },
  {
    "id": 48,
    "name": "Sauce - Mint",
    "price": 9870.47,
    "quantity": 80
  },
  {
    "id": 49,
    "name": "Beef - Rib Roast, Capless",
    "price": 6136.65,
    "quantity": 95
  },
  {
    "id": 50,
    "name": "Apron",
    "price": 8650.25,
    "quantity": 36
  },
  {
    "id": 51,
    "name": "Glaze - Clear",
    "price": 1394.92,
    "quantity": 78
  },
  {
    "id": 52,
    "name": "Cookie - Dough Variety",
    "price": 6723.67,
    "quantity": 11
  },
  {
    "id": 53,
    "name": "Wine - Malbec Trapiche Reserve",
    "price": 3185.66,
    "quantity": 69
  },
  {
    "id": 54,
    "name": "Buffalo - Striploin",
    "price": 7646.37,
    "quantity": 20
  },
  {
    "id": 55,
    "name": "Cookie Choc",
    "price": 6645.04,
    "quantity": 43
  },
  {
    "id": 56,
    "name": "Juice - V8, Tomato",
    "price": 3615.57,
    "quantity": 1
  },
  {
    "id": 57,
    "name": "Tuna - Bluefin",
    "price": 2412.3,
    "quantity": 4
  },
  {
    "id": 58,
    "name": "Dates",
    "price": 3242.53,
    "quantity": 36
  },
  {
    "id": 59,
    "name": "Cinnamon Buns Sticky",
    "price": 364.93,
    "quantity": 84
  },
  {
    "id": 60,
    "name": "Beer - Camerons Cream Ale",
    "price": 642.23,
    "quantity": 93
  },
  {
    "id": 61,
    "name": "Wine - Toasted Head",
    "price": 4356.35,
    "quantity": 39
  },
  {
    "id": 62,
    "name": "Cinnamon Rolls",
    "price": 3035.11,
    "quantity": 3
  },
  {
    "id": 63,
    "name": "Olives - Kalamata",
    "price": 5490.06,
    "quantity": 80
  },
  {
    "id": 64,
    "name": "Kiwano",
    "price": 5290.47,
    "quantity": 12
  },
  {
    "id": 65,
    "name": "Corn Syrup",
    "price": 5028.1,
    "quantity": 87
  },
  {
    "id": 66,
    "name": "Pastry - Mini French Pastries",
    "price": 1.67,
    "quantity": 82
  },
  {
    "id": 67,
    "name": "Chicken - White Meat, No Tender",
    "price": 740.57,
    "quantity": 23
  },
  {
    "id": 68,
    "name": "Cake - Mini Cheesecake",
    "price": 8737.74,
    "quantity": 83
  },
  {
    "id": 69,
    "name": "Bacardi Mojito",
    "price": 2536.26,
    "quantity": 62
  },
  {
    "id": 70,
    "name": "Bread - Pumpernickle, Rounds",
    "price": 1529.68,
    "quantity": 21
  },
  {
    "id": 71,
    "name": "Dried Cranberries",
    "price": 2178.64,
    "quantity": 58
  },
  {
    "id": 72,
    "name": "Beef - Bones, Marrow",
    "price": 5209.39,
    "quantity": 42
  },
  {
    "id": 73,
    "name": "Lemonade - Strawberry, 591 Ml",
    "price": 1521.15,
    "quantity": 83
  },
  {
    "id": 74,
    "name": "Cookie Dough - Oatmeal Rasin",
    "price": 8448.96,
    "quantity": 78
  },
  {
    "id": 75,
    "name": "Calypso - Black Cherry Lemonade",
    "price": 4771.77,
    "quantity": 28
  },
  {
    "id": 76,
    "name": "Cheese - Comte",
    "price": 1548.24,
    "quantity": 40
  },
  {
    "id": 77,
    "name": "Island Oasis - Strawberry",
    "price": 7499.5,
    "quantity": 58
  },
  {
    "id": 78,
    "name": "Vinegar - Raspberry",
    "price": 7836.81,
    "quantity": 17
  },
  {
    "id": 79,
    "name": "Nut - Hazelnut, Whole",
    "price": 8926.63,
    "quantity": 32
  },
  {
    "id": 80,
    "name": "Red Snapper - Fillet, Skin On",
    "price": 2287.87,
    "quantity": 91
  },
  {
    "id": 81,
    "name": "Papayas",
    "price": 5056.22,
    "quantity": 43
  },
  {
    "id": 82,
    "name": "Sausage - Liver",
    "price": 3408.75,
    "quantity": 20
  },
  {
    "id": 83,
    "name": "Veal - Tenderloin, Untrimmed",
    "price": 2684.92,
    "quantity": 42
  },
  {
    "id": 84,
    "name": "Beer - Blue Light",
    "price": 2874.43,
    "quantity": 6
  },
  {
    "id": 85,
    "name": "Wine - Magnotta - Red, Baco",
    "price": 1758.56,
    "quantity": 6
  },
  {
    "id": 86,
    "name": "Veal - Striploin",
    "price": 6429.24,
    "quantity": 65
  },
  {
    "id": 87,
    "name": "Pork - Back, Short Cut, Boneless",
    "price": 5473.38,
    "quantity": 34
  },
  {
    "id": 88,
    "name": "Meldea Green Tea Liquor",
    "price": 3942.98,
    "quantity": 30
  },
  {
    "id": 89,
    "name": "Pork Salted Bellies",
    "price": 7153.09,
    "quantity": 66
  },
  {
    "id": 90,
    "name": "Spinach - Baby",
    "price": 848.32,
    "quantity": 49
  },
  {
    "id": 91,
    "name": "Appetizer - Mushroom Tart",
    "price": 3153.02,
    "quantity": 59
  },
  {
    "id": 92,
    "name": "Beer - Mcauslan Apricot",
    "price": 3463.59,
    "quantity": 41
  },
  {
    "id": 93,
    "name": "Cake - Night And Day Choclate",
    "price": 9119.92,
    "quantity": 24
  },
  {
    "id": 94,
    "name": "Icecream - Dstk Strw Chseck",
    "price": 8316.44,
    "quantity": 26
  },
  {
    "id": 95,
    "name": "Filo Dough",
    "price": 7141.42,
    "quantity": 12
  },
  {
    "id": 96,
    "name": "Cheese - Montery Jack",
    "price": 4666.74,
    "quantity": 18
  },
  {
    "id": 97,
    "name": "Cheese - Parmigiano Reggiano",
    "price": 6929.1,
    "quantity": 35
  },
  {
    "id": 98,
    "name": "Cheese - Gorgonzola",
    "price": 6313.39,
    "quantity": 82
  },
  {
    "id": 99,
    "name": "Rabbit - Legs",
    "price": 2581.55,
    "quantity": 74
  },
  {
    "id": 100,
    "name": "Beef - Short Ribs",
    "price": 8004.98,
    "quantity": 24
  }
];

//http status codes
export const listar = (req:Request, res: Response, _nxt: NextFunction) => {
  res.status(200).json(produtos)
};



export const listarUm = (req:Request, res: Response, _nxt: NextFunction) => {
    const criterio = req.params.criterio;

    const produto = produtos.find((prod) => (parseFloat(criterio) && prod.id === Number(criterio)) || prod.name.includes(criterio));
  
    res.status(200).json({id: produto.id, nome: produto.name, preco: produto.price});
};

export const listarVarios = (req:Request, res: Response, _nxt: NextFunction) => {
  const criterio = req.params.criterio;

  const produtosFiltrados = produtos
  .filter((prod) => prod.id.toString().includes(criterio) || prod.name.includes(criterio))
  .map((prod) => ({id: prod.id, nome: prod.name, preco: prod.price}));

  res.status(200).json(produtosFiltrados);
}
