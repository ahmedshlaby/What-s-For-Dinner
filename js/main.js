var mealImageElement = document.getElementById("mealImage");
var rateElement = document.getElementById("rate");
var reviewElement = document.getElementById("review");
var prepTimeElement = document.getElementById("prepTime");
var cookTimeElement = document.getElementById("cookTime");
var servingsElement = document.getElementById("servings");
var levelElement = document.getElementById("level");
var cuisineElement = document.getElementById("cuisine");
var mealNameElement = document.getElementById("mealName");
var mealDescriptionElement = document.getElementById("mealDescription");
var alertElement = document.getElementById("alert");
var ingredientsListElement = document.getElementById("ingredientsList");
var instructionsListElement = document.getElementById("instructionsList");
var caloriesElement = document.getElementById("calories");
var proteinElement = document.getElementById("protein");
var carbohydratesElement = document.getElementById("carbohydrates");
var fatElement = document.getElementById("fat");
var fiberElement = document.getElementById("fiber");
var sodiumElement = document.getElementById("sodium");
var chefsTipsContentElement = document.getElementById("chefsTipsContent");
var tryAnotherRecipeButton = document.getElementById("tryAnotherRecipeButton");

var mealsList = [
  {
    mealImage:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    mealName: "Grilled Chicken Salad",
    mealDescription:
      "A healthy and delicious salad with grilled chicken, fresh vegetables, and a light vinaigrette dressing.",
    rate: 4.5,
    review: 120,
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    level: "Intermediate",
    cuisine: "Mediterranean",
    isAlert: false,
    ingredients: [
      "1 lb grilled chicken breast, sliced",
      "2 cups mixed greens",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, sliced",
      "1/4 cup red onion, thinly sliced",
      "1/4 cup olive oil",
      "2 tbsp balsamic vinegar",
      "1 tsp Dijon mustard",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the grill to medium-high heat.",
      "Season the chicken breast with salt and pepper.",
      "Grill the chicken for 6-8 minutes per side, or until cooked through.",
      "Let the chicken rest for 5 minutes before slicing.",
      "In a small bowl, whisk together the olive oil, balsamic vinegar, and Dijon mustard.",
      "In a large bowl, combine the mixed greens, cherry tomatoes, cucumber, and red onion.",
      "Add the grilled chicken slices to the salad.",
      "Drizzle the vinaigrette over the salad and toss to combine.",
    ],
    calories: 320,
    protein: 32,
    carbohydrates: 8,
    fat: 32,
    fiber: 8,
    sodium: 820,
    chefsTips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],
  },
  {
    mealImage:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    mealName: "Spaghetti Carbonara",
    mealDescription:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    rate: 4.8,
    review: 150,
    prepTime: 10,
    cookTime: 15,
    servings: 5,
    level: "Intermediate",
    cuisine: "Italian",
    isAlert: false,
    ingredients: [
      "400g spaghetti",
      "100g pancetta, diced",
      "4 large eggs",
      "100g Parmesan cheese, grated",
      "2 cloves garlic, minced",
      "Black pepper to taste",
    ],
    instructions: [
      "Cook the spaghetti according to package instructions.",
      "In a large pan, cook the pancetta until crispy.",
      "Add the garlic and cook for another minute.",
      "In a bowl, whisk together the eggs and Parmesan cheese.",
      "Drain the spaghetti and add it to the pan with the pancetta and garlic.",
      "Remove from heat and quickly stir in the egg mixture.",
      "Season with black pepper and serve immediately.",
    ],
    calories: 450,
    protein: 20,
    carbohydrates: 50,
    fat: 25,
    fiber: 3,
    sodium: 600,
    chefsTips: ["Use freshly grated Parmesan for the best flavor."],
  },
  {
    mealImage:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    mealName: "Vegetable Stir-Fry",
    mealDescription:
      "A quick and easy stir-fry with a variety of fresh vegetables and a savory sauce.",
    rate: 4.5,
    review: 120,
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    level: "Beginner",
    cuisine: "Asian",
    isAlert: false,
    ingredients: [
      "2 tbsp vegetable oil",
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "1 cup broccoli florets",
      "1 cup snap peas",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "3 tbsp soy sauce",
      "1 tbsp honey",
      "1 tsp sesame oil",
    ],
    instructions: [
      "Heat the vegetable oil in a large wok or skillet over high heat.",
      "Add the bell pepper, carrot, broccoli, and snap peas. Stir-fry for 2-3 minutes.",
      "Add the garlic and ginger. Stir-fry for another minute.",
      "In a small bowl, whisk together the soy sauce, honey, and sesame oil.",
      "Pour the sauce over the vegetables and toss to combine.",
      "Serve immediately over rice or noodles.",
    ],
    calories: 250,
    protein: 8,
    carbohydrates: 30,
    fat: 12,
    fiber: 6,
    sodium: 500,
    chefsTips: [
      "Use a variety of colorful vegetables for a visually appealing dish.",
    ],
  },
  {
    mealImage:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    mealName: "Beef Tacos",
    mealDescription:
      "Delicious beef tacos with fresh toppings and a zesty sauce.",
    rate: 4.7,
    review: 200,
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    level: "Intermediate",
    cuisine: "Mexican",
    isAlert: true,
    ingredients: [
      "1 lb ground beef",
      "8 corn tortillas",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1 cup shredded cheddar cheese",
      "1/2 cup sour cream",
      "1 tbsp olive oil",
    ],
    instructions: [
      "In a large skillet, cook the ground beef over medium heat until browned.",
      "Add the olive oil and season with salt and pepper.",
      "Warm the corn tortillas in a separate pan.",
      "Assemble the tacos by placing the beef on each tortilla.",
      "Top with lettuce, tomatoes, cheese, and sour cream.",
      "Serve immediately.",
    ],
    calories: 350,
    protein: 25,
    carbohydrates: 30,
    fat: 15,
    fiber: 4,
    sodium: 700,
    chefsTips: ["Use fresh ingredients for the best flavor."],
  },
  {
    mealImage:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop",
    mealName: "Shrimp Scampi",
    mealDescription:
      "A classic Italian dish with succulent shrimp in a garlic butter sauce.",
    rate: 4.9,
    review: 180,
    prepTime: 25,
    cookTime: 30,
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    isAlert: true,
    ingredients: [
      "1 lb shrimp, peeled and deveined",
      "4 cloves garlic, minced",
      "1/2 cup butter",
      "1/4 cup white wine",
      "2 tbsp fresh parsley, chopped",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a large skillet, melt the butter over medium heat.",
      "Add the garlic and cook for 1 minute.",
      "Add the shrimp and cook until they turn pink, about 3-4 minutes.",
      "Pour in the wine and simmer for 2 minutes.",
      "Stir in the parsley and season with salt and pepper.",
      "Serve immediately over pasta or with crusty bread.",
    ],
    calories: 300,
    protein: 25,
    carbohydrates: 15,
    fat: 18,
    fiber: 2,
    sodium: 600,
    chefsTips: ["Use fresh shrimp for the best texture and flavor."],
  },
  {
    mealImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    mealName: "Classic Margherita Pizza",
    mealDescription:
      "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil, and a drizzle of olive oil.",
    rate: 4.8,
    review: 245,
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    isAlert: false,
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "8 oz fresh mozzarella cheese",
      "2 medium tomatoes, sliced",
      "1/4 cup fresh basil leaves",
      "2 tbsp olive oil",
      "1/2 tsp dried oregano",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough on a lightly floured surface.",
      "Spread the tomato sauce evenly over the dough.",
      "Arrange the mozzarella and tomato slices on top.",
      "Sprinkle with oregano, salt, and pepper.",
      "Bake for 12-15 minutes, or until the crust is golden brown.",
      "Remove from the oven and add fresh basil leaves.",
      "Drizzle with olive oil before serving.",
    ],
    calories: 580,
    protein: 24,
    carbohydrates: 68,
    fat: 24,
    fiber: 4,
    sodium: 980,
    chefsTips: [
      "Use fresh mozzarella for the best flavor.",
      "Preheat the oven thoroughly before baking.",
      "Don't overload the pizza with toppings.",
      "Let the pizza cool for a few minutes before slicing.",
    ],
  },
  {
    mealImage:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
    mealName: "Creamy Chicken Pasta",
    mealDescription:
      "Tender chicken breast tossed with creamy garlic sauce, pasta, and Parmesan cheese for a comforting Italian-inspired meal.",
    rate: 4.7,
    review: 186,
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    level: "Intermediate",
    cuisine: "Italian",
    isAlert: false,
    ingredients: [
      "1 lb chicken breast, sliced",
      "12 oz fettuccine pasta",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 cup heavy cream",
      "1/2 cup Parmesan cheese, grated",
      "1/2 tsp Italian seasoning",
      "1/4 tsp black pepper",
      "Salt to taste",
      "2 tbsp fresh parsley, chopped",
    ],
    instructions: [
      "Cook the pasta according to the package instructions.",
      "Season the chicken with salt, pepper, and Italian seasoning.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Cook the chicken for 5-7 minutes until golden and fully cooked.",
      "Remove the chicken from the skillet and set aside.",
      "Add garlic to the skillet and sauté for 30 seconds.",
      "Pour in the heavy cream and bring to a gentle simmer.",
      "Stir in the Parmesan cheese until the sauce becomes creamy.",
      "Add the cooked pasta and chicken to the sauce.",
      "Toss everything together and garnish with fresh parsley.",
    ],
    calories: 720,
    protein: 42,
    carbohydrates: 72,
    fat: 30,
    fiber: 4,
    sodium: 760,
    chefsTips: [
      "Reserve some pasta water to thin the sauce if needed.",
      "Use freshly grated Parmesan for a smoother sauce.",
      "Don't overcook the chicken.",
      "Serve immediately while the sauce is creamy.",
    ],
  },
  {
    mealImage:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    mealName: "Vegetable Fried Rice",
    mealDescription:
      "Flavorful fried rice loaded with fresh vegetables, scrambled eggs, and savory soy sauce for a quick and satisfying meal.",
    rate: 4.6,
    review: 154,
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    level: "Easy",
    cuisine: "Asian",
    isAlert: false,
    ingredients: [
      "3 cups cooked rice, preferably chilled",
      "2 eggs",
      "1 cup carrots, diced",
      "1 cup peas",
      "1/2 cup corn",
      "1/2 cup green onions, chopped",
      "2 tbsp vegetable oil",
      "3 tbsp soy sauce",
      "1 tsp sesame oil",
      "2 cloves garlic, minced",
      "1/2 tsp black pepper",
    ],
    instructions: [
      "Heat vegetable oil in a large wok or skillet over high heat.",
      "Add the eggs and scramble until just cooked.",
      "Add the minced garlic and stir-fry for 30 seconds.",
      "Add the carrots, peas, and corn.",
      "Cook the vegetables for 3-4 minutes until slightly tender.",
      "Add the chilled cooked rice and break up any large clumps.",
      "Pour the soy sauce and sesame oil over the rice.",
      "Stir-fry everything for 4-5 minutes until well combined.",
      "Add the green onions and black pepper.",
      "Toss once more and serve hot.",
    ],
    calories: 410,
    protein: 12,
    carbohydrates: 62,
    fat: 14,
    fiber: 6,
    sodium: 920,
    chefsTips: [
      "Use cold leftover rice for the best texture.",
      "Cook the vegetables over high heat.",
      "Don't add too much soy sauce.",
      "Add cooked chicken or shrimp for extra protein.",
    ],
  },
];

var index = 0;

function displayMealDetails() {
  mealImageElement.src = mealsList[index].mealImage;
  mealNameElement.innerHTML = mealsList[index].mealName;
  mealDescriptionElement.innerHTML = mealsList[index].mealDescription;
  rateElement.innerHTML = mealsList[index].rate;
  reviewElement.innerHTML = "(" + mealsList[index].review + " reviews)";
  prepTimeElement.innerHTML = mealsList[index].prepTime + " mins";
  cookTimeElement.innerHTML = mealsList[index].cookTime + " mins";
  servingsElement.innerHTML = mealsList[index].servings + " people";
  levelElement.innerHTML = mealsList[index].level;
  cuisineElement.innerHTML = mealsList[index].cuisine;

  mealsList[index].isAlert
    ? alertElement.classList.replace("d-none", "d-flex")
    : alertElement.classList.replace("d-flex", "d-none");

  displayIngredients();
  displayInstructions();

  caloriesElement.innerHTML = mealsList[index].calories + " kcal";
  proteinElement.innerHTML = mealsList[index].protein + "g";
  carbohydratesElement.innerHTML = mealsList[index].carbohydrates + "g";
  fatElement.innerHTML = mealsList[index].fat + "g";
  fiberElement.innerHTML = mealsList[index].fiber + "g";
  sodiumElement.innerHTML = mealsList[index].sodium + "mg";

  displayChefsTips();
}

function displayIngredients() {
  var temp = "";

  for (var i = 0; i < mealsList[index].ingredients.length; i++) {
    temp += `<li class="list-group-item">${mealsList[index].ingredients[i]}</li>`;
  }
  ingredientsListElement.innerHTML = temp;
}

function displayInstructions() {
  var temp = "";

  for (var i = 0; i < mealsList[index].instructions.length; i++) {
    temp += `<li class="list-group-item">${mealsList[index].instructions[i]}</li>`;
  }
  instructionsListElement.innerHTML = temp;
}

function displayChefsTips() {
  var temp = "";

  for (var i = 0; i < mealsList[index].chefsTips.length; i++) {
    temp += `<div class="tip-card d-flex align-items-center p-3 rounded-4">
                                        <span class="check-icon me-3">
                                            <i class="fa-solid fa-check"></i>
                                        </span>
                                        <span class="fw-medium text-secondary">${mealsList[index].chefsTips[i]}</span>
                                    </div>`;
  }
  chefsTipsContentElement.innerHTML = temp;
}

function displayRandomMeal() {
  var randomIndex = Math.floor(Math.random() * mealsList.length);
  index = randomIndex;

  displayMealDetails();
}

displayRandomMeal();
