import React from 'react';
import Header from '../../component/HeaderLayout/Header/Header';
import LoginContainer from '../../component/LoginLayout/LoginContainer/LoginContainer';
import NavContainer from '../../component/NavLayout/NavContainer/NavContainer';
import FollowContainer from '../../component/FollowLayout/FollowContainer/FollowContainer';
import Category from '../../component/CategoryLayout/Category/Category';
import ReviewContainer from '../../component/MainReviewLayout/ReviewContainer/ReviewContainer';
import Footer from '../../component/FooterLayout/Footer/Footer';


function Feed(props) {
    return (
        <>
            <Header />
            <LoginContainer />
            <NavContainer />
            <FollowContainer/>
            <Category />
            <ReviewContainer />
            <Footer />
        </>
    );
}

export default Feed;