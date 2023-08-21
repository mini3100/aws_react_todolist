import { css } from "@emotion/react";

export const SContainer  = (isMainSidebarShow, isRightSubSidebarShow) => {

    let width = 934;
    if(isMainSidebarShow) {
        width -= 210;
    }
    if(isRightSubSidebarShow) {
        width -= 310;
    }

    return css`
        position: absolute;
        transition: all 0.8s ease;
        z-index: -1;
        left: ${isMainSidebarShow ? "280px" : "70px"};
        border-radius: 10px;
        padding: 20px;
        width: ${width + "px"};
        height: 560px;
        background-color: #fafafa;
    `;
};