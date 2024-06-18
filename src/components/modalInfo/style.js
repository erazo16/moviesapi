import { Modal, Tag } from "antd";
import styled from "styled-components";

export const ModalStyle = styled(Modal)`
    .ant-modal-content {
    background-color: #181818;
    color: white;
  }

  .ant-modal-close-x {
  color: white; 
}
`

export const ContainerContent = styled.div`
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
`
export const Title = styled.h1`
    color: #F1C40F;
`

export const ContainerSubtitle = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    margin: 1rem 0;
`

export const WidthContainer = styled.div`
    width: 50%;

    &:first-child{
        width: 33%;
    }
`

export const ContainerGenr = styled(Tag)`
    background-color: #E5E8E8;
`

export const LanguajeText = styled.h4`
    color: #F1C40F;
`
