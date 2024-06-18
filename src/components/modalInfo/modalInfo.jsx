import { Modal, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { ContainerContent, ContainerSubtitle, LanguajeText, ModalStyle, Title, WidthContainer } from './style'
import { getDetailsMovie } from '../../helpers/api/movies'
import { FaAward } from "react-icons/fa";


export const ModalInfo = ({showModal, cancel, id}) => {
    const [ info, setInfo ] = useState({})

    useEffect(() => {
        getInfo();
      }, [id]);
    
      const getInfo = async () => {
        try {
          const { data, status } = await getDetailsMovie(id);
          if (status === 200) {
            setInfo(data)
          } else {
            console.log("error 1");
          }
        } catch (error) {
          console.error("ERROR get", error);
        }
      };

  return (
    <ModalStyle
        onCancel={cancel}
        open={showModal}
        visible={showModal}
        centered
        footer={false}
        width={1000}
    >
        <ContainerContent>
            <WidthContainer>
                <img src={info?.Poster} alt='poster' />
            </WidthContainer>
            <WidthContainer>
                <Title>{info?.Title}</Title>
                <ContainerSubtitle>
                    <label>Año: {info?.Year}</label>
                    <Tag color='#f50'>Calificaciones: {info?.Rated}</Tag>
                    <label>Publicado: {info?.Released}</label>
                </ContainerSubtitle>
                   <h4>Genero: <small>{info?.Genre}</small></h4>
                   <h4>Escritores: <small>{info?.Writer}</small></h4>
                   <h4>Actores: <small>{info?.Actors}</small></h4>
                   <h4>Trama: <small>{info?.Plot}</small></h4>

                   <LanguajeText>Lenguaje: {info?.Language}</LanguajeText>

                   <h4><FaAward color='#F1C40F'/> {info?.Awards}</h4>

            </WidthContainer>
        </ContainerContent>
    </ModalStyle>
  )
}
