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
                    <div css={S.SText1}>
                        <strong css={S.SFontBold}>로그인</strong>하고 예약,<br/>
                        주문 내역을 확인해보세요.
                    </div>
                    <button css={S.SButton1}><SiNaver size={12} css={S.SIcon}/> 네이버 로그인</button>
                </div>
                <div css={S.SBottomContainer}>
                    <div css={S.SText2}>
                        <strong css={S.SFontBold}>비회원</strong> 예약확인
                    </div>
                    <div css={S.SInputBox1}>
                        <input type="text" placeholder='예약번호 입력'css={S.SInput}/>
                    </div>
                    <div css={S.SInputBox2}>
                        <input type="text" placeholder='예약자명 입력' css={S.SInput}/>
                    </div>
                        <button css={S.SButton2}>내 예약 확인</button>
                </div>
            </div>
        </>
    );
}

export default Order;