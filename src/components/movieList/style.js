import { Card } from "antd"
import styled from "styled-components"

export const CardStyled = styled(Card)`
    width: 14rem;
    background-color: #181818;
    color: white;
    border: none;
    height: auto;
    padding: 0.5rem;
    display: flex;
`

export const ContainerMovies = styled.div`
    display: grid;
    grid-auto-rows: auto;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
`

export const ContainerInfo = styled.div`
    position: relative;
    margin-top: 1rem;
    padding-bottom: 1rem;
`

export const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
`

export const ButtonStyle = styled.button`
    position: absolute;
    top: 0;
    width: 100%;
    background-color: #2980B9;
    border: none;
    padding: 5px;
    margin-bottom: 1rem;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: transparent;
        color:#2980B9 ;
        border: 1px solid #2980B9;
    }
`

