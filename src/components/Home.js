import React, { useEffect }from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import NewDisney from './NewDisney'
import Orignals from './Orignals'
import Trending from './Trending'
import Viewer from './Viewer'

import { useDispatch,useSelector } from "react-redux"
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice"
import { selectUserName } from "../features/counter/counterSlice"


function Home() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let recommends = [];
    let newDisneys = [];
    let orignals = [];
    let trending = [];

 
    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                switch(doc.data().type){
                    case 'recommend':
                        recommends = [...recommends,{id: doc.id, ...doc.data()}]
                        break;

                    case 'new':
                        newDisneys = [...newDisneys,{id: doc.id, ...doc.data()}]
                        break;    

                    case 'orignal':
                        orignals = [...orignals,{id: doc.id, ...doc.data()}]
                        break;

                    case 'trending':
                        trending = [...trending,{id: doc.id, ...doc.data()}]
                        break;  
                }
            });
       

        dispatch(setMovies({
            recommend : recommends,
            newDisney: newDisneys,
            orignal: orignals,
            trending: trending,
        })
        ) })
    },[userName]);



    return (
        <Conatiner>
            <ImgSlider />
            <Viewer/>
            <Movies />
            <NewDisney />
            <Trending />
            <Orignals />
           
        </Conatiner>
    )
}

export default Home

const Conatiner = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position:relative;
  overflow-x:hidden;

  &:before{
      background: url("/images/home-background.png") center center / cover no-repeat fixed;
      position:absolute;
      content:"";
      top:0;
      bottom:0;
      left:0;
      right:0;
      z-index:-1; 
  }
 
`
