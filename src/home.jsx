import React, { useState, useEffect } from "react";
import { getMoviesApi } from "./helpers/api/movies";
import { MovieList } from "./components/movieList/movieList";
import { ContainerMoviesContent } from "./style";
import { Header } from "./components/header/header";
import { Pagination } from "./shared/pagination/pagination";
import { ModalInfo } from "./components/modalInfo/modalInfo";

export default function Home() {
  const [listMovie, setListMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsData, setMaxItemsData] = useState();
  const [ showModal, setShowModal ] = useState(false)
  const [ idMovie, setIdMovie ] = useState()

  useEffect(() => {
    getMovies(search ? search : "batman");
  }, [search, currentPage]);

  const getMovies = async (value) => {
    try {
      const { data, status } = await getMoviesApi(value, currentPage);
      if (status === 200) {
        setListMovie(data?.Search);
        setMaxItemsData(Number(data?.totalResults));
      } else {
        console.log("error 1");
      }
    } catch (error) {
      console.error("ERROR get", error);
    }
  };

  const maxPageMovies = Math.ceil(maxItemsData / 10);

  console.log("maxPageMovies", maxPageMovies);

  return (
    <div>
      <ContainerMoviesContent>
        <Header setSearch={setSearch} />
        <MovieList data={listMovie} setShowModal={setShowModal} setIdMovie={setIdMovie} />

        {listMovie && (
          <Pagination
            maxPageMovies={maxPageMovies}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </ContainerMoviesContent>

      <ModalInfo
        showModal={showModal}
        cancel={()=> setShowModal(false)}
        id={idMovie}
      />
    </div>
  );
}
