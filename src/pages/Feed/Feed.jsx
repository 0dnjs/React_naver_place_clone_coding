import React from 'react';
import Header from '../../component/HeaderLayout/Header/Header';
import LoginContainer from '../../component/LoginLayout/LoginContainer/LoginContainer';
import NavContainer from '../../component/NavLayout/NavContainer/NavContainer';
import FollowContainer from '../../component/FollowLayout/FollowContainer/FollowContainer';
import Footer from '../../component/FooterLayout/Footer/Footer';
import Category from '../../component/CategoryLayout/Category/Category';

function Feed(props) {
    return (
        <>
            <Header />
            <LoginContainer />
            <NavContainer />
            <FollowContainer/>
            <Category />
            <Footer />
        </>
    );
}

export default Feed;