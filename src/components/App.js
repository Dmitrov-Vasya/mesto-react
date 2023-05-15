import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupTypeEdit from './PopupTypeEdit';
import PopupTypeAdd from './PopupTypeAdd';
import PopupTypeImage from './PopupTypeImage';
import PopupTypeDelete from './PopupTypeDelete';
import PopupTypeAvatar from './PopupTypeAvatar';
import Card from './Card';
import '../index.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopupTypeEdit />
      <PopupTypeAdd />
      <PopupTypeImage />
      <PopupTypeDelete />
      {/* <PopupTypeAvatar /> */}
      <Card />
    </>
  );
}

export default App;
