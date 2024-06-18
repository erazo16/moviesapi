import React from 'react'
import { Buttons, Container } from './style'
import { Button } from 'antd'

export const Pagination = ({ maxPageMovies, currentPage, setCurrentPage }) => {

    const nextPage = () => {
        if((currentPage + 1 ) > maxPageMovies) {
            return;
        }

        setCurrentPage((prev) => prev + 1)
        window.scrollTo(0, 0)
    }

    const prevPage = () => {
        if ((currentPage - 1 ) <= 1) {
            setCurrentPage(1)
            return
        }

        setCurrentPage((prev)=> prev - 1)
        window.scrollTo(0, 0)
    }

  return (
    <Container>
        <Buttons disabled={currentPage <= 1 ? true : false}  onClick={()=> prevPage()}>prev</Buttons>
        <span>{currentPage}</span>
        <Button disabled={currentPage >= maxPageMovies ? true : false} onClick={()=> nextPage()}>Next</Button>
    </Container>
  )
}
