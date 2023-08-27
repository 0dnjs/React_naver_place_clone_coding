import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { Link, useLocation } from 'react-router-dom';

function NavContainer(props) {
    const location = useLocation(); 

    return (
            <div css={S.SnavLayout}>
                <div css={S.SnavBox}>
                    <Link css={S.SnavFeed(location.pathname)} to="/feed"> 피드</Link>
                    <Link css={S.SnavTimeLine(location.pathname)} to="/timeline">타임라인</Link>
                    <Link css={S.SnavReview(location.pathname)} to="/review">리뷰</Link>
                    <Link css={S.SnavOrder(location.pathname)} to="/order">예약·주문</Link>
                    <Link css={S.SnavSave(location.pathname)} to="/save">저장</Link>
                </div>
            </div>
    );
}

export default NavContainer;