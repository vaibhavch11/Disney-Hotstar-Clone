import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectTrending } from "../features/movies/movieSlice"

function Trending() {
    const movies = useSelector(selectTrending);
    return (
        <Conatiner>
        <h3>Trending</h3>

        <Content>

            {movies && 
                movies.map((movie, key)=>(
                    <Wrap key={key}>
                    
                       
                        <Link to={`/details/` + movie.id}>
                            <img src={movie.cardImg} alt={movie.title}/>
                        </Link>
                    </Wrap>
            ))}
        </Content>

    </Conatiner>
    )

}

export default Trending

const Conatiner = styled.div `
      

`

const Wrap = styled.div `
   border-radius:10px;

   overflow:hidden;

   border:3px solid rgba(249,249,249,0.1);
     cursor:pointer;
      box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px,
     rgb(0 0 0 / 73%) 0px 16px 10px  -10px;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 
     img{
         
         width:100%;
         height:100%;
         object-fit:cover;
     }

     &:hover{
         transform: scale(1.05);
         border-color:rgba(249,249,249,0.8);

     }
       
`

const Content = styled.div `
     margin-top:30px;
      display : grid;
      padding: 30px 0px 26px;
      grid-gap: 20px;
      grid-template-columns: repeat(4,minmax(0,1fr));
`
