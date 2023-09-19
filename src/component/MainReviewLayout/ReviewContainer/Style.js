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
    margin: 5px 0;
`;

export const SFlexLeft = css`
    display: flex;
    align-items: center;
    text-align: left;
    width: 612px;
    position: relative;
`;

export const SProfileBox = css`
    margin-left: 10px;
`;

export const SProfile1 = css`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`;

export const SProfile2 = css`
    width: 56px;
    position: absolute;
    left: 1px;
    top: -8px;
`;

export const SNameBox = css`
    margin-left: 10px;
    margin-top: 4px;
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
    width: 354px;
    height: 360px;
    border-radius: 8px 0 0 8px;
    margin-right: 2px;
`;

export const SImageRight = css`
    width: 354px;
    height: 360px;
    border-radius: 0 8px 8px 0;
`;

export const SLocation = css`
    position: absolute;
    bottom: 6px;
    left: 6px;
    display: flex;
    align-items: center;
    background: rgba(0,0,0,.6);
    color: #fff;
    padding: 0 4px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    width: 122px;
    height: 20px;
    letter-spacing: -1px;
`;

export const SLocationIcon = css`
    margin-right: 2px;
`;

export const SImgText = css`
    margin-top: 10px;
    color: rgb(102, 102, 102);
    font-size: 15px;
`;

export const STagBox = css`
    display: flex;
    margin-top: 6px;
    margin-bottom: -7px;
    * {
        background-color: rgb(245, 247, 248);
        color: rgb(102, 102, 102);
        border: none;
        border-radius: 4px;
        font-size: 13px
    }
`;

export const STagBt1 = css`
    display: flex;
    padding: 4px 7px;
    margin-right: 4px;
    margin-bottom: 7px;
    height: 26px;
`;

export const STagBt2 = css`
    display: flex;
    padding: 4px 7px;
    margin-right: 4px;
    margin-bottom: 7px;
    height: 26px;
    line-height: 18px;
`;

export const SReactionContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
    `;

export const SReactionBnt = css`    
    display: flex;
    color: rgb(66, 66, 66);
    background-color: transparent;
    border: none;
    padding: 0px;
    cursor: pointer;
`;

export const SReactionIcon = css`
    margin-right: 7px;
    width: 22px;
    height: 22px;
    color: rgb(66, 66, 66);
`;

export const SReactionText = css`
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    line-height: 22px;
`;

export const STimeText = css`
    color: rgb(154, 154, 154);
    font-size: 13px;
    line-height: 22px;
`;

export const SFeedBottomLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 12px 15px 16px 13px;
    border: 1px solid rgb(236, 240, 242);
    border-radius: 8px;
`;

export const SFeedBottomBox = css`
    display: flex;
    flex-direction: column;
    & button {
        border: none;
        background-color: transparent;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        padding: 0px;
        cursor: pointer;
    }
    & p {
        margin-top: 4px;
        color: rgb(143, 143, 143);
        font-size: 13px;
        text-align: left;
        letter-spacing: -1px;
    }
`;

export const SSaveBox = css`
    cursor: pointer;
    & div {
        margin-top: 6px;
        color: rgb(143, 143, 143);
        font-size: 11px;
        font-weight: 500;
    }
`;

export const SSaveIcon = css`
    color: rgb(184, 184, 184);
    width: 18px;
    height: 18px;
    margin-left: 2px;
`;
