import React from 'react';
/** @jsxImportSource @emotion/react */
import { AiOutlineMenu } from "react-icons/ai";
import * as S from "./Style";

function Header(props) {
    return (
            <div css={S.SHeaderLayout}>
                    <div>
                        <img src="/images/logo.png" alt="logo" css={S.SLogo}/>
                        <h1 css={S.STitle}>MY플레이스</h1>
                    </div>
                    <div css={S.SCouponMenu}>
                        <div css={S.SCouponBox}>
                            <img src="/images/coupon.png" alt="coupon" css={S.SCoupon}/>
                            <span css={S.SCouponText}>쿠폰</span>
                        </div>
                            <AiOutlineMenu color="#fff" size={25}/>
                    </div>
            </div>  
    );
}

export default Header;