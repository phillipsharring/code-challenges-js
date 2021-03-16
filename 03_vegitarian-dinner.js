const dishes = [
  {
    name: "Eggplant Parmesan",
    vegitarian: true,
  },
  {
    name: "Spaghetti & Meatballs",
    vegitarian: false,
  },
];

const vegitarianDishes = dishes.filter((dish) => dish.vegitarian);

console.log(vegitarianDishes);
