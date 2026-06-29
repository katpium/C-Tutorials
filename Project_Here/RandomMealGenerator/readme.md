# Random Meal Generator

A simple random meal generator project built with C#, HTML, CSS, and JavaScript. The project uses TheMealDB API to fetch a random meal recipe and display the meal name, category, cuisine, image, ingredients, and cooking instructions.

## Project Overview

The goal of this project is to practice working with APIs, JSON data, and frontend design. The application allows users to generate a random meal by clicking the spoon button. Each generated meal includes recipe details and an image of the food.

## Features

* Fetches random meals from TheMealDB API
* Displays the meal name
* Shows the food category and cuisine
* Displays the meal image
* Lists ingredients and measurements
* Shows cooking instructions
* Custom frontend design using HTML and CSS
* Interactive spoon button used to generate a new meal

## Tech Stack

* C#
* HTML
* CSS
* JavaScript
* TheMealDB API

## API Used

This project uses TheMealDB random meal API:

```text
https://www.themealdb.com/api/json/v1/1/random.php
```

The API returns recipe information such as meal name, category, cuisine, image, ingredients, and instructions.

## How It Works

1. The user opens the website.
2. The user clicks the spoon button.
3. JavaScript sends a request to TheMealDB API.
4. The API returns a random meal in JSON format.
5. The website displays the meal image and recipe details on the page.

## How to Run

Open the project folder and run the website locally.

If using a simple frontend setup, open:

```text
index.html
```

in a browser.

If using Live Server in VS Code:

1. Open the project folder in VS Code.
2. Right-click `index.html`.
3. Click **Open with Live Server**.

## What I Learned

Through this project, I practiced:

* Calling an external API
* Reading JSON data
* Using JavaScript `fetch()`
* Updating HTML content dynamically
* Styling a custom webpage with CSS
* Connecting frontend elements to user actions
* Organizing a project for GitHub

## Future Improvements

* Add meal filters by category or cuisine
* Add a search feature
* Save favorite meals
* Add nutrition information
* Improve responsive design for smaller screens
* Turn the project into a full ASP.NET web application
