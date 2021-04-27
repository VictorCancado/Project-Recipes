import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import iconProfile from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const history = useHistory();
  const { title, setTitle, setShowSearchBar, showSearchBar } = useContext(RecipesContext);
  const { showSearchButton } = props;

  const handleClick = () => {
    history.push('/perfil');
    setTitle('Perfil');
  };

  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ handleClick }
      >
        <img src={ iconProfile } alt="icon-profile" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      { showSearchButton ? (
        <button
          type="button"
          data-testid="search-top-btn"
          onClick={ () => setShowSearchBar(showSearchBar === true ? false : true) }
        >
          <img src={ searchIcon } alt="icon-search" />
        </button>
      ) : null }
    </header>
  );
}

export default Header;
