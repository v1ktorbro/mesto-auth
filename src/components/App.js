import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { InitialCardsContext } from '../contexts/InitialCardsContext.js';
import * as utils from '../utils/utils'
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import * as auth from './auth';
import PageNotFound from './PageNotFound'


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [infoLoginUser, setInfoLoginUser] = React.useState('');
  const [registerSuccess, setRegisterSuccess] = React.useState(false);
  const history = useHistory();
  //информация о текущем пользователе
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  //хук для поп-ап окна при нажатии на картинку
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: ''
  })

  React.useEffect(() => {
    handleCheckToken();
    Promise.all([api.getInfoUser(), api.getInitialCards()])
    .then(([userData, cardsFromApi]) => {
      setCurrentUser(userData);
      setCards(cardsFromApi);
    })
    .catch(err => console.log(err))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function handleAddPlaceSubmit(dataNewCard) {
    console.log(dataNewCard)
    api.addCard(dataNewCard)
    .then((addNewCard) => {
      setCards([...cards, addNewCard])
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups())
  };

  function handleCardLike(card) {
    //проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    (!isLiked ? api.putLikeCard(card._id) : api.deleteLikeCard(card._id))
    .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard);
      // Обновляем стейт
      setCards(newCards)
    })
    .catch(err => console.log(err)) 
  };

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter((currentCard) => currentCard._id !== card._id)
      setCards(newCards)
    })
    .catch(err => console.log(err))
  };

  function handleUpdateUser(userData) {
     api.editProfile(userData)
    .then((data) => {
      setCurrentUser(data)
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups()) 
  };

  function handleUpdateAvatar(userData) {
     api.changeAvatar(userData)
    .then((data) => {
      setCurrentUser(data)
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups()) 
  };

  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link
    })
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  };

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({
      isOpen: false,
      name: '',
      link: ''
    })
  };

  const handleLogin = (data) => {
    setLoggedIn(true);
    history.push('/my-profile');
    setInfoLoginUser(data);
  }
  
  const handleRegister = (data) => {
    setLoggedIn(true);
    history.push('/my-profile');
    setInfoLoginUser(data);
    setRegisterSuccess(true);
  };

  const handleCheckToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      auth.getInfoLogin(token).then((getInfo) => {
        return handleLogin(getInfo);
      })
    }
  };
  
  const signOut = () => {
    localStorage.removeItem('token');
    history.push('/sign-in');
    setRegisterSuccess(false);
  };

  return (
    <>
      <Switch>
        <Route path='/sign-in'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/sign-up'>
          <Register handleRegister={handleRegister} />
        </Route>
        <ProtectedRoute path='/' loggedIn={loggedIn}  Component={
        <CurrentUserContext.Provider value={currentUser}>
        <InitialCardsContext.Provider value={cards}>
          <Header >
            <div className='header__info'  >
              <p className='header__email' >{infoLoginUser.email}</p>
              <button className='header__sign-out' onClick={signOut} >Выйти</button>
            </div>
            <span className='burger-menu' onClick={utils.toggleBurgerMenu} />
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
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <PopupWithForm name="delete" title="Вы уверены?" inputSignature="Да" />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          { registerSuccess && <InfoTooltip success={true} /> }
        </InitialCardsContext.Provider>
        </CurrentUserContext.Provider>
        } />
        <Footer />
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
