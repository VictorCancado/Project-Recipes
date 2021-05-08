export default function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(keyName) {
  const userMail = JSON.parse(localStorage.getItem(keyName));
  if (userMail === null) {
    return null;
  }
  return userMail.email;
}

export function favoriteRecipe(recipe, route) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const recipeMealSaveStorage = {
    id: recipe.idMeal,
    type: route,
    area: !recipe.strArea ? '' : recipe.strArea,
    category: !recipe.strCategory ? '' : recipe.strCategory,
    alcoholicOrNot: !recipe.alcoholicOrNot ? '' : recipe.alcoholicOrNot,
    name: recipe.strMeal,
    image: recipe.strMealThumb,
  };
  const recipeDrinkSaveStorage = {
    id: recipe.idDrink,
    type: route,
    area: !recipe.strArea ? '' : recipe.strArea,
    category: !recipe.strCategory ? '' : recipe.strCategory,
    alcoholicOrNot: !recipe.strAlcoholic ? '' : recipe.strAlcoholic,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
  };

  switch (route) {
  case 'comida':
    if (!favoriteRecipes) {
      setStorage('favoriteRecipes', ([recipeMealSaveStorage]));
    } else {
      setStorage('favoriteRecipes', ([...favoriteRecipes, recipeMealSaveStorage]));
    }
    break;
  case 'bebida':
    if (!favoriteRecipes) {
      setStorage('favoriteRecipes', ([recipeDrinkSaveStorage]));
    } else {
      setStorage('favoriteRecipes', ([...favoriteRecipes, recipeDrinkSaveStorage]));
    }
    break;
  default:
    break;
  }
}

export function compareHearths(recipe, route, id) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    favoriteRecipes.forEach((element) => {
      console.log(element.id);
      console.log(id);
      if (element.id === id) {
        localStorage.removeItem('favoriteRecipes');
        console.log(element.id);
      } else {
        favoriteRecipe(recipe, route);
        console.log('NAO TEM O MESMO ID');
      }
    });
  } else {
    favoriteRecipe(recipe, route);
  }
}
