import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const history = useHistory();
  const { setTitle } = useContext(RecipesContext);

  const goToDrinks = () => {
    history.push('/bebidas');
    setTitle('bebidas');
  };

  const goToDrinksExplore = () => {
    history.push('/explorar');
    setTitle('Explorar');
  };

  const goToFoods = () => {
    history.push('/comidas');
    setTitle('Comidas');
  };

  return (
    <foot className="footer" data-testid="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ goToDrinks }
        src={ drinkIcon }
      >
        <img src={ drinkIcon } alt="icon-drinks" />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ goToDrinksExplore }
        src={ exploreIcon }
      >
        <img src={ exploreIcon } alt="icon-explorer" />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ goToFoods }
        src={ mealIcon }
      >
        <img src={ mealIcon } alt="icon-foods" />
      </button>
    </foot>
  );
}

export default Footer;