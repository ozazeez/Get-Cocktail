//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// Using: ThecocktailDB https://www.thecocktaildb.com/api.php

const getCocktailInfo = document.querySelector('button').addEventListener('click', (e) => {
    const getCocktailName = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${getCocktailName}`)
        .then(res => res.json())
        .then(data => {
            const drinkName = data.drinks[0].strDrink
            const drinkRecipe = data.drinks[0].strInstructions
            const drinkImage = data.drinks[0].strDrinkThumb
            document.querySelector('h2').innerText = drinkName
            document.querySelector('h3').innerText = drinkRecipe
            document.querySelector('img').src = drinkImage
    })
})
