import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowForward } from "react-icons/io";
import { PiPencilSimpleLineFill } from "react-icons/pi"
import { BsCheck2Circle } from "react-icons/bs"
import * as S from "./Style";

function LoginContainer(props) {
    return (
        <div css={S.SloginLayout}>
            <div css={S.SloginContainer}>
                <div css={S.SloginBox}>
                    <div css={S.SprofileBg}>
                        <img src="/images/profile.png" alt="profile" css={S.Sprofile}/>
                    </div>
                        <span css={S.SloginText}>로그인하기</span>
                        <IoIosArrowForward size={12} css={S.Sarrow}/>
                </div>

                <div css={S.SreviewMisson}>
                    <button css={S.SreviewBox}>
                        <div>
                            <PiPencilSimpleLineFill size={16}css={S.SreviewText}/>
                        </div>
                        <div>
                            리뷰 쓰기
                        </div>
                    </button>
                    <button css={S.SmissonBox}>
                        <div>
                            <BsCheck2Circle size={16}css={S.SmissonText}/>
                        </div>
                        <div>
                            미션
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginContainer;