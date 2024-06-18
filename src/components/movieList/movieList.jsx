import React from "react";
import { Empty } from "antd";
import {
  ButtonStyle,
  CardStyled,
  ContainerInfo,
  ContainerMovies,
  ImageStyle,
} from "./style";
import { TextSize } from "../../shared/TextSize/textSize";
export const MovieList = ({ data, setShowModal, setIdMovie }) => {
  return (
    <div>
        { data ? (
        <ContainerMovies>
        {data?.map((item) => (
            <CardStyled hoverable>
            <div>
                <ImageStyle alt="poster" src={item?.Poster} />
            </div>

            <TextSize text={item?.Title} maxLength={50} />

            <ContainerInfo>
                <ButtonStyle onClick={()=> {setShowModal(true); setIdMovie(item?.imdbID)}}>Ver</ButtonStyle>
            </ContainerInfo>
            </CardStyled>
        ))}
        </ContainerMovies>

        ) : (
            <Empty description={<span style={{ color : "white" }}>No hay peliculas para mostrar</span>} />
        )

        }
    </div>
  );
};
