import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { useRecoilState } from "recoil";
import { isSidebarShowState } from "../../store/sidebarStore";

function Today(props) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);

    return (
        <div css={S.SLayout}>
            
        </div>
    );
}

export default Today;