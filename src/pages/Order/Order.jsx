import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from '../../component/HeaderLayout/Header/Header';
import LoginContainer from '../../component/LoginLayout/LoginContainer/LoginContainer';
import NavContainer from '../../component/NavLayout/NavContainer/NavContainer';
import { SiNaver } from "react-icons/si";
import * as S from "./Style";

function Order(props) {
    return (
        <>
            <Header />
            <LoginContainer />
            <NavContainer />
            <div css={S.SLayout}>
                <div css={S.STopContainer}>
                    <div><strong>로그인</strong>하고 예약,<br/>
                    주문 내역을 확인해보세요.</div>
                    <button><SiNaver/> 네이버 로그인</button>
                </div>
                <div css={S.SBottomContainer}>
                    <div><strong></strong></div>
                    <div><input type="text" />예약번호 입력</div>
                    <div><input type="text" />예약자명 입력</div>
                    <button>내 예약 확인</button>
                </div>
            </div>
        </>
    );
}

export default Order;