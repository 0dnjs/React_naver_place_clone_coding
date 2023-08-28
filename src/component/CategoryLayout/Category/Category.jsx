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
                        아이와 함께
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        카페
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        물놀이
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        양식
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        피크닉
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        일식
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        역사유적
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        체험관광
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        분식/치킨
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        클래스 · 소품
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        중식
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        캠핑
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        아시아/퓨전 음식
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        문화예술
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        뷔페/레스토랑
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        레저 · 액티비티
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        낚시
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        등산 · 트레킹
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        자연명소
                    </button>
                </span>
                <span css={S.SSpan}>
                    <button css={S.SButton}>
                        테마파크
                    </button>
                </span>
                <span css={S.SEnd}>
                    <button css={S.SButton}>
                        숙박
                    </button>
                </span>

            </div>
        </div>
    );
}

export default Category;