import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from '../../component/HeaderLayout/Header/Header';
import LoginContainer from '../../component/LoginLayout/LoginContainer/LoginContainer';
import NavContainer from '../../component/NavLayout/NavContainer/NavContainer';
import Footer from '../../component/FooterLayout/Footer/Footer';
import * as S from "./Style";
import { BsFlagFill } from "react-icons/bs";

function TimeLine(props) {
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
                            <strong css={S.SFontBold}>영수증/카드내역 인증, 예약, 주문</strong>한<br/>장소가 나의 기록이 됩니다.
                        </div>
                        <div css={S.SText2}>
                            방문했던 곳을 한 눈에 모아보세요.
                        </div>
                        <div css={S.SImageBox}>
                            <img src="/images/timeline.png" alt="" css={S.SImage}/>
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

export default TimeLine;