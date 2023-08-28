import { css } from "@emotion/react";

export const SLayout = css`
    height: 66px;
    background-color: #f8fafb;
`;

export const SContainer = css`
    max-width: 750px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    height: 66px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const SLeftContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const SBox1 = css`
    width: 75px;
    height: 54px;
    padding: 6px 0px 6px 20px;
    
`;

export const SBox2 = css`
    width: 77.5px;
    height: 54px;
    padding: 6px 0px 6px 8px;
`;

export const SBox3 = css`
    width: 126px;
    height: 54px;
    padding: 6px 20px 6px 8px;
`;

export const SRightContainer = css`
    display: flex;
    justify-content: flex-end;
    color: #7f8daa;
    position: relative;

`;

export const SLine = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;


    &::before {
    content: '';
    display: flex;
    position: absolute;
    top: -4px;
    left: -10px;
    width: 2px;
    height: 24px;
    background-color: #e2e5e8;
    border-radius: 2px;}
`;


export const SButton = css`
    color: #424242;
    background-color: #fff;
    padding: 0px 13px;
    line-height: 42px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    letter-spacing: -.5px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    font-size: 15px;
`;

export const SelectedButton = css`
    background-image: linear-gradient(90deg,#2d8dee,#2da1ee);
    color: #fff;
    font-weight: 700;
    box-shadow: 0 2px 6px 0 rgba(37,146,255,.35);
    background-color: #fff;
`;

export const SStrong = css`
    font-weight: 500;
    font-size: 18.5px;
`;

export const SIcon = css`
    margin-right: 2px;
`;