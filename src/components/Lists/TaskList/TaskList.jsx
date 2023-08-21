import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { FaChevronRight } from "react-icons/fa"
import { useRecoilState } from "recoil";
import { isRightSubSidebarState } from '../../../store/sidebarStore';

function TaskList({ target, setTarget }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        if(target === e.target){    // 자기 자신을 클릭했을 때 오른쪽 사이드바 닫힘
            setIsRightSubSidebar(false);
            setTarget(null);
        } else if(target === null) {   //target이 null일 때(오른쪽 사이드바가 닫혀 있을 때)
            setIsRightSubSidebar(true);
            setTarget(e.target);
        } else {
            setTarget(e.target);
        }
    }

    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox} type="checkbox" />
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight />
            </li>
        </ul>
    );
}

export default TaskList;