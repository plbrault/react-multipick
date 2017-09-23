import { Button as bsButton, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: relative;
    box-sizing: border-box;
`;

export const Button = styled(bsButton)`
    width: 100%;
    box-sizing: inherit;
`;

export const Dropdown = styled.div`
    box-sizing: inherit;
    position: absolute;
    z-index: 10;
    width: fit-content;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
`;

export const DropdownItem = styled.label`
    box-sizing: inherit;
    width: 100%;
    display: block;
    cursor: pointer;
    padding: 2px 10px;

    &:hover {
        background: #ddd;
    }

    ${props =>
        props.checked &&
        `
        background: #f9f9f9;
    `};
`;

export const DropdownActionBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const DropdownAction = styled(bsButton)`
    margin: 0 10px;
`;

export const DropdownList = styled.div`
    height: 180px;
    overflow-y: auto;
    margin: 0 -10px;
`;

export const DropdownSearch = styled(FormControl)`
    width: 100%;
    margin-bottom: 10px;
`;
