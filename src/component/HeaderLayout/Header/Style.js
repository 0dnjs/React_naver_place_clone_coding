import { css } from "@emotion/react";

export const SHeaderLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #06b495;
    width: 100%;
    height: 53px;
    padding: 8px 18px 8px 15px;
    border: 1px solid rgba(0,0,1,.04);
    position: relative;
    box-sizing: border-box;
`;

export const SLogo = css`
    width: 21px;
    height: 21px;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    cursor: pointer;
`;

export const STitle = css`
    font-size: 16px;
    display: inline-block;
    margin-left: 30px;
    color: #fff;
    font-weight: 500;
    letter-spacing: -.7px;
    cursor: pointer;
`;

export const SCouponMenu = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SCouponBox = css`
    display: flex;
    position: relative;
    cursor: pointer;
`;

export const SCoupon = css`
    width: 45px;
    height: 45px;
    margin: 0 10px;
`;

export const SCouponText = css`
    transform: translate(-50%, -50%);
    position: absolute;
    top: 45%;
    left: 50%;
    font-size: 11px;
    font-weight: 900;
    color: #fff;
`;