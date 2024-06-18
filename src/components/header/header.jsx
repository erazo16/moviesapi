import React from 'react'
import { ContainerHeader, InputStyle } from './style'
import { FaSearch } from "react-icons/fa";


export const Header = ({ setSearch }) => {
  return (
    <ContainerHeader>
        <h1>Movies</h1>

        <InputStyle placeholder='Buscar...' prefix={<FaSearch />} onChange={(e)=> setSearch(e.target.value)} />
    </ContainerHeader>
  )
}
