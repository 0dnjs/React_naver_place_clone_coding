import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from '../../component/HeaderLayout/Header/Header';
import LoginContainer from '../../component/LoginLayout/LoginContainer/LoginContainer';
import NavContainer from '../../component/NavLayout/NavContainer/NavContainer';
import Footer from '../../component/FooterLayout/Footer/Footer';
import * as S from "./Style";
import { BsFlagFill } from "react-icons/bs";

function Review(props) {
    return (
        <>
            <Header />
            <LoginContainer />
            <NavContainer />
            <div css={S.SLayout}>
                    <div css={S.SContainer}>
                        <div css={S.SIcon}>
                            <BsFlagFill size={18} color='#fff'/>
                        </div>
                        <div css={S.SText1}>
                            정성스레 작성한 <strong css={S.SFontBold}>리뷰</strong><br/>
                            내 리뷰를 모아 만든 <strong css={S.SFontBold}>테마리스트</strong>
                        </div>
                        <div css={S.SText2}>
                            나의 발자취를 소중한 기록으로 남겨보세요.
                        </div>
                        <div css={S.SImageBox}>
                            <img src="/images/review.png" alt="" css={S.SImage}/>
                        </div>
                        <div css={S.SRivewBox}>
                            <button css={S.SButton}>리뷰 참여하기</button>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default Review;