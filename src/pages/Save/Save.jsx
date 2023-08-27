import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from '../../component/HeaderLayout/Header/Header';
import LoginContainer from '../../component/LoginLayout/LoginContainer/LoginContainer';
import NavContainer from '../../component/NavLayout/NavContainer/NavContainer';
import Footer from '../../component/FooterLayout/Footer/Footer';
import * as S from "./Style";
import { BsFlagFill } from "react-icons/bs";

function Save(props) {
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
                            가고싶은 맛집, 카페 저장하고<br/>
                            나의 <strong css={S.SFontBold}>리스트</strong>를 만들어 보세요
                        </div>
                        <div css={S.SText2}>
                            여행 코스도 계획하기도 굳~
                        </div>
                        <div css={S.SImageBox}>
                            <img src="/images/save.png" alt="" css={S.SImage}/>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default Save;