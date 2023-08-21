import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { useRecoilState } from "recoil";
import { isSidebarShowState, isRightSubSidebarState } from "../../store/sidebarStore";

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    useEffect(() => {
        return () => {  // 언마운트
            setIsRightSubSidebar(false);    // 탭 이동시 오른쪽 사이드바 닫히도록
        }
    }, [])

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default MainContainer;