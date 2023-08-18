import { css } from "@emotion/react";

export const SLayout = css`
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px;
`;

export const STitle = css`
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 600;
    cursor: default;
`;

export const SListContainer = css`

`;

export const SListBox = (isSelected) => 
css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    ${isSelected && "background-color: #eaeaea;"}
    /* background-color: ${isSelected? "#eaeaea" : "transparents"}; */
    cursor: pointer;
`;

export const SListName = (isSelected) => 
css`
    display: inline-block;
    flex-grow: 1;
    margin-left: 5px;
    width: 100%;
    font-size: 14px;
    ${isSelected && "font-weight: 600;"}
`;

export const SCount = (isSelected) => 
css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 40px;
    height: 18px;
    font-size: 11px;
    font-weight: 600;
    background-color: ${isSelected ? "#fff" : "#eaeaea"};
`;