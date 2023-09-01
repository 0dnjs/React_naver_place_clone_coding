import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function Category(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <span css={S.SStart}>
                    <button css={S.SButton}>
                        한식
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        낚시
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        카페
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        체험관광
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        양식
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        클래스 · 소품
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        일식
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        등산 · 트레킹
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        숙박
                    </button>
                    </span>
                
            </div>
        </div>
    );
}

export default Category;
