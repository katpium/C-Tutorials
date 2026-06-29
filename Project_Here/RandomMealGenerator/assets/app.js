const mealImage = document.getElementById("meal-image");
const mealName = document.getElementById("meal-name");
const mealCategory = document.getElementById("meal-category");
const mealCuisine = document.getElementById("meal-cuisine");
const mealIngredients = document.getElementById("meal-ingredients");
const mealInstructions = document.getElementById("meal-instructions");
const spoonButton = document.getElementById("spoon-button");

async function getRandomMeal() {
    mealName.textContent = "Loading recipe...";
    mealCategory.textContent = "";
    mealCuisine.textContent = "";
    mealIngredients.innerHTML = "";
    mealInstructions.textContent = "";

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await response.json();

    const meal = data.meals[0];

    mealName.textContent = meal.strMeal;
    mealCategory.textContent = `Category: ${meal.strCategory}`;
    mealCuisine.textContent = `Cuisine: ${meal.strArea}`;
    mealInstructions.textContent = meal.strInstructions;

    mealImage.src = meal.strMealThumb;
    mealImage.style.display = "block";

    showIngredients(meal);
}

function showIngredients(meal) {
    mealIngredients.innerHTML = "";

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            const listItem = document.createElement("li");

            if (measure && measure.trim() !== "") {
                listItem.textContent = `${measure} ${ingredient}`;
            } else {
                listItem.textContent = ingredient;
            }

            mealIngredients.appendChild(listItem);
        }
    }
}

spoonButton.addEventListener("click", getRandomMeal);