import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { AiOutlineMore } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
import { PiSmileyLight } from "react-icons/pi"
import { AiOutlineStar } from "react-icons/ai"

function ReviewContainer(props) {
    return (
        <div>
            <ul>
                <li css={S.SLayout}>
                    <div css={S.SContainer}>
                        <div css={S.SBox1}>
                            <div css={S.SFlexLeft}>
                                <div css={S.SProfileBox}>
                                    <img src="/images/profile.png" alt="" css={S.SProfile1}/>
                                    <img src="/images/review_profile.png" alt="" css={S.SProfile2}/>
                                </div>
                                <div css={S.SNameBox}>
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
                                부산시 금정구 최신
                            </div>
                        </div>
                        <div>
                            <p css={S.SImgText}>사장님이 맛있고 커피가 친절해요☕</p>
                            <div css={S.STagBox}>
                                <button css={S.STagBt1}>🥞 특별한 메뉴가 있어요</button>
                                <button css={S.STagBt2}>+1</button>
                            </div>
                            <div css={S.SReactionContainer}>
                                <button css={S.SReactionBnt}>
                                    <PiSmileyLight css={S.SReactionIcon}/>
                                    <p css={S.SReactionText}>반응 남기기</p>
                                </button>
                                <p css={S.STimeText}>9.19 화 방문</p>
                            </div>
                            <div css={S.SFeedBottomLayout}>
                                <div css={S.SFeedBottomBox}>
                                    <button>메이 멜로디 〉</button>
                                    <p>카페,디저트 · 부산광역시 금정구 부곡동</p>
                                </div>
                                <div css={S.SSaveBox}>
                                    <AiOutlineStar css={S.SSaveIcon}/>
                                    <div>저장</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ReviewContainer;