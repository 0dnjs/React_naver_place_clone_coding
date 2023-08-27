import { css } from "@emotion/react";

export const SnavLayout = css`
    background-color: #06b495;
    padding: 0px 20px;
`;

export const SnavBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 375px;
    height: 51px;
`;

export const SnavFeed = (pathname) => css`
    position: relative;
    padding: 14px 5px;
    height: 51px;
    color: #ffffffb3;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    font-weight: ${pathname === '/feed' ? '900' : '400'};
    color: ${pathname === '/feed' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/feed' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px;
    }
`;

export const SnavTimeLine = (pathname) => css`
    position: relative;
    padding: 14px 5px;
    height: 51px;
    color: #ffffffb3;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    font-weight: ${pathname === '/timeline' ? '900' : '400'};
    color: ${pathname === '/timeline' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/timeline' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px;
    }
`;

export const SnavReview = (pathname) => css`
    position: relative;
    padding: 14px 5px;
    height: 51px;
    color: #ffffffb3;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    font-weight: ${pathname === '/review' ? '900' : '400'};
    color: ${pathname === '/review' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/review' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px;
    }
`;

export const SnavOrder = (pathname) => css`
    position: relative;
    padding: 14px 5px;
    height: 51px;
    color: #ffffffb3;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    font-weight: ${pathname === '/order' ? '900' : '400'};
    color: ${pathname === '/order' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/order' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px;
    }
`;

export const SnavSave = (pathname) => css`
    position: relative;
    padding: 14px 5px;
    height: 51px;
    color: #ffffffb3;
    font-size: 17px;
    text-decoration: none;
    cursor: pointer;
    font-weight: ${pathname === '/save' ? '900' : '400'};
    color: ${pathname === '/save' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${pathname === '/save' ? '#ffffff' : 'transparent'};
        border-radius: 1.5px;
    }
    
`;