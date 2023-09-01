import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";


function Footer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SFooterLoginBox}>
                    <span>로그인</span>
                    <span css={S.SFooterBar}>|</span>
                    <span>전체서비스</span>
                </div>
                <div css={S.SMarginBox}>
                    <span>이용정책</span>
                    <span css={S.SFooterBar}>|</span>
                    <span>MY플레이스 고객센터</span>
                    <span css={S.SFooterBar}>|</span>
                    <span>신고센터</span>
                    <span css={S.SFooterBar}>|</span>
                    <span>공지사항</span>
                </div>
                <div css={S.SCopyRight}>
                    <span>© NAVER Corp.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;