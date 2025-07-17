const dummyFoods = [
  { id: 1, name: "Burger", calories: 300, price: 5.99, description: "Tasty beef burger" },
  { id: 2, name: "Salad", calories: 150, price: 4.5, description: "Fresh garden salad" },
];

export const getFoods = async () => dummyFoods;

export const getFoodById = async (id) => dummyFoods.find((f) => f.id === Number(id));

export const addFood = async (food) => dummyFoods.push(food);

export const updateFood = async (id, updatedFood) => {
  const index = dummyFoods.findIndex((f) => f.id === id);
  dummyFoods[index] = updatedFood;
};

export const deleteFood = async (id) => {
  const index = dummyFoods.findIndex((f) => f.id === id);
  dummyFoods.splice(index, 1);
};
