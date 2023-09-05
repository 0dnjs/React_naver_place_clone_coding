import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { AiOutlineMore } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"

function ReviewContainer(props) {
    return (
        <div>
            <ul>
                <li css={S.SLayout}>
                    <div css={S.SContainer}>
                        <div css={S.SBox1}>
                            <div css={S.SFlexLeft}>
                                <div>
                                    <img src="/images/profile.png" alt="" css={S.SProfile1}/>
                                    <img src="/images/review_profile.png" alt="" css={S.SProfile2}/>
                                </div>
                                <div>
                                    <div css={S.SName}>
                                        뭄개구름
                                    </div>
                                    <div css={S.SReviewFollowNumber}>
                                        <span>사진리뷰 186 </span>
                                        <span>· 팔로워 41</span>
                                    </div>
                                </div>
                            </div>
                            <div css={S.SFlexRight}>
                                <button css={S.SButton}>팔로우</button>
                                <div>
                                    <AiOutlineMore size={20} css={S.SIcon}/>
                                </div>
                            </div>
                        </div>
                        <div css={S.SBox2}>
                            <div>
                                <img src="/images/review01.jpg" alt="" css={S.SImageLeft}/>
                            </div>
                            <div>
                                <img src="/images/review02.jpg" alt="" css={S.SImageRight}/>
                            </div>
                            <div css={S.SLocation}>
                                <MdLocationOn css={S.SLocationIcon}/>
                                제주시 구좌읍 최신
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ReviewContainer;