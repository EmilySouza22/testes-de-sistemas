export const validateUser = (user) => {
  
  if (!animal.name || !animal.species || !animal.price) {
    throw new Error("Missing required fields");
  }
  
  if (typeof animal.age !== "number") {
    throw new Error("Age must be a number");
  }

  return true;
};

