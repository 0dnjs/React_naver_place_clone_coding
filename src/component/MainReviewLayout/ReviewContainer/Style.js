import { css } from "@emotion/react";

export const SLayout = css`
    height: 703px;
`;

export const SContainer = css`
    width: 750px;
    height: 703px;
    margin: 0px auto;
    padding: 16px 20px 28px;
    letter-spacing: -.2px;
`;

export const SBox1 = css`
    width: 710px;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin: 10px 10px 10px 0;
`;

export const SFlexLeft = css`
    display: flex;
    align-items: center;
    text-align: left;
    width: 612px;
`;

export const SProfile = css`
    width: 56px;
`;

export const SName = css`
    width: 144px;
    height: 20px;
    font-size: 16px;
    color: #242424;
    font-weight: 700;
`;

export const SReviewFollowNumber = css`
    width: 144px;
    height: 16px;
    margin-top: 2px;
    font-size: 13px;
    color: #8f8f8f;
    letter-spacing: -.3px;
`;

export const SFlexRight = css`
    display: flex;
    align-items: center;
    position: relative;
`;

export const SButton = css`
    width: 70px;
    height: 30px;
    color: #287cff;
    background-color: #eff6fe;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    border: none;
`;

export const SIcon = css`
    margin: 3px 0 0 5px;
    color: #b8b8b8;
`;

export const SBox2 = css`
    display: flex;
    width: 710px;
    height: 360px;
    position: relative;
`;

export const SImageLeft = css`
    width: 349px;
    height: 360px;
    border-radius: 8px 0 0 8px;
    margin-right: 2px;
`;

export const SImageRight = css`
    width: 349px;
    height: 360px;
    border-radius: 0 8px 8px 0;
`;

export const SLocation = css`
    position: absolute;
    bottom: 6px;
    left: 6px;
    display: inline-flex;
    background: rgba(0,0,0,.6);
    color: #fff;
    padding: 0 4px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    width: 122px;
    height: 20px;
`;