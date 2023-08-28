import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { MdGpsNotFixed } from "react-icons/md";


function FollowContainer(props) {

    const [selectedBox, setSelectedBox] = useState(null);
    
    const handleButtonClick = (index) => {
        setSelectedBox(index);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SLeftContainer}>
                    <div css={S.SBox1} onClick={() => handleButtonClick(0)}>
                        <button css={selectedBox === 0 ? [S.SButton, S.SelectedButton] : S.SButton}>전체</button>
                    </div>
                    <div css={S.SBox2} onClick={() => handleButtonClick(1)}>
                        <button css={selectedBox === 1 ? [S.SButton, S.SelectedButton] : S.SButton}>팔로잉</button>
                    </div>
                    <div css={S.SBox3} onClick={() => handleButtonClick(2)}>
                        <button css={selectedBox === 2 ? [S.SButton, S.SelectedButton] : S.SButton}><b css={S.SStrong}>+</b> 관심지역</button>
                    </div>
                </div>
                <div css={S.SRightContainer}>
                    <div css={S.SLine}><MdGpsNotFixed css={S.SIcon}/>현위치</div>
                </div>
            </div>
        </div>
    );
}

export default FollowContainer;