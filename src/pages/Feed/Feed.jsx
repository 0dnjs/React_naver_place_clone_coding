import React from 'react';
import Header from '../../component/HeaderLayout/Header/Header';
import LoginContainer from '../../component/LoginLayout/LoginContainer/LoginContainer';
import NavContainer from '../../component/NavLayout/NavContainer/NavContainer';
import Footer from '../../component/FooterLayout/Footer/Footer';

function Feed(props) {
    return (
        <>
            <Header />
            <LoginContainer />
            <NavContainer />
            <Footer />
        </>
    );
}

export default Feed;