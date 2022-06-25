import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { InitialCardsContext } from '../contexts/InitialCardsContext';
import * as utils from '../utils/utils';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth';
import PageNotFound from './PageNotFound';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [infoLoginUser, setInfoLoginUser] = React.useState('');
  const [registerSuccess, setRegisterSuccess] = React.useState(false);
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: '',
  });

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '',
    });
  }

  const handleCheckToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getInfoLogin(token).then((getInfo) => {
        setLoggedIn(true);
        history.push('/my-profile');
        return setInfoLoginUser(getInfo);
      });
    }
    return token;
  };

  const initialData = () => {
    Promise.all([api.getInfoUser(), api.getInitialCards()]).then(([userData, cardsFromApi]) => {
      setCurrentUser(userData);
      setCards(cardsFromApi);
    }).catch((err) => {
      return console.log(err);
    });
  }

  React.useEffect(() => {
    if(handleCheckToken()) {
      initialData();
    }
  }, []);

  function handleAddPlaceSubmit(dataNewCard) {
    api.addCard(dataNewCard).then((addNewCard) => {
      setCards([...cards, addNewCard]);
      return closeAllPopups();
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleCardLike(card) {
    //  проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((likeId) => {
      return likeId === currentUser._id;
    });
    (!isLiked ? api.putLikeCard(card._id) : api.deleteLikeCard(card._id)).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((currentCard) => {
        return currentCard._id === card._id ? newCard : currentCard;
      });
      setCards(newCards);
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((currentCard) => {
        return currentCard._id !== card._id;
      });
      setCards(newCards);
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleUpdateUser(userData) {
    api.editProfile(userData).then((data) => {
      setCurrentUser(data);
      return closeAllPopups();
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleUpdateAvatar(userData) {
    api.changeAvatar(userData).then((data) => {
      setCurrentUser(data);
      return closeAllPopups();
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link,
    });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const handleLogin = (data, setMessageError, setError) => {
    auth.authorize(data).then((res) => {
      if (!res.token) {
        setMessageError(res.message || res.error);
        return setError(true);
      }
      return auth.getInfoLogin(res.token).then((getInfo) => {
        setLoggedIn(true);
        history.push('/my-profile');
        return setInfoLoginUser(getInfo);
      }).then((res) => {
        console.log(initialData());
        initialData();
      });
    }).catch((err) => {
      setError(true);
      return console.log(err);
    });
  };

  const handleRegister = (data, setMessageError, setError) => {
    auth.register(data).then((res) => {
      if (res) {
        history.push('/sign-in');
        return setRegisterSuccess(true);
      }
      setMessageError(res.error || res.message);
      return setError(true);
    });
  };

  const signOut = () => {
    localStorage.removeItem('token');
    history.push('/sign-in');
    setRegisterSuccess(false);
  };

  return (
    <>
      <Switch>
        <Route path="/sign-in">
          <Login handleLogin={handleLogin} registerSuccess={registerSuccess} />
        </Route>
        <Route path="/sign-up">
          <Register handleRegister={handleRegister} />
        </Route>
        <ProtectedRoute
          path="/"
          loggedIn={loggedIn}
          Component={(
            <CurrentUserContext.Provider value={currentUser}>
              <InitialCardsContext.Provider value={cards}>
                <Header>
                  <div className="header__info">
                    <p className="header__email">{infoLoginUser.email}</p>
                    <button type="button" className="header__sign-out" onClick={signOut}>Выйти</button>
                  </div>
                  <span className="burger-menu" onClick={utils.toggleBurgerMenu} />
                </Header>
                <Main
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                />
                <Footer />
                <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
                />
                <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closeAllPopups}
                  onAddPlace={handleAddPlaceSubmit}
                />
                <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
                />
                <PopupWithForm name="delete" title="Вы уверены?" inputSignature="Да" />
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
              </InitialCardsContext.Provider>
            </CurrentUserContext.Provider>
        )}
        />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
