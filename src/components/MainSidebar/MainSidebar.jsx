/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from 'react';
import * as S from "./Style"
import Header from "./Header/Header";
import List from "./List/List";
import { useRecoilState } from "recoil";
import { isSidebarShowState } from "../../store/sidebarStore";

function MainSidebar(props) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);

    const [ mainMenuListArray, setMainMenuListArray ] = useState({
        tasks: [
            {
                id: 1,
                path: "/upcoming",
                icon: "",
                name: "Upcoming",
                count: 12
            },
            {
                id: 2,
                path: "/today",
                icon: "",
                name: "Today",
                count: 5
            },
            {
                id: 3,
                path: "/calendar",
                icon: "",
                name: "Calendar",
                count: 0
            },
            {
                id: 4,
                path: "/stickywall",
                icon: "",
                name: "Sticky Wall",
                count: 0
            }
        ],
        lists: [
            {
                id: 1,
                path: "/personal",
                icon: "",
                name: "Personal",
                count: 3
            },
            {
                id: 2,
                path: "/work",
                icon: "",
                name: "Work",
                count: 6
            },
            {
                id: 3,
                path: "/list1",
                icon: "",
                name: "List 1",
                count: 3
            }
        ]
    });

    return (
        // 사이드바의 레이아웃을 isShow에 따라 transition 해야하기 때문에 
        // 헤더의 토글버튼 이벤트를 사이드바에 작성한 후 넘겨준다.
        <div css={S.SLayout(isSidebarShow)}>
            <Header/>
            {isSidebarShow && (
                // 하나의 태그만 쓸 수 있기 때문에 프레그먼트로 감싸줌
                <>
                    <List title={"TASKS"} list={mainMenuListArray.tasks}/>
                    <List title={"LISTS"} list={mainMenuListArray.lists}/>
                </>
            )}
            
        </div>
    );
}

export default MainSidebar;