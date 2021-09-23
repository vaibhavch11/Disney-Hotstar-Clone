import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch , useSelector  } from 'react-redux';
import { useHistory } from 'react-router';
import { auth, provider } from '../firebase.js';
import {selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails, } from "../features/counter/counterSlice"

function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    useEffect(()=>{
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                history.push("/home");

            }
        });
    },[userName]);


    const handleAuth = () => {
        if(!userName){
            auth.signInWithPopup(provider).then((result) =>  {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message)
            })
        }
        else{
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push("/Login")
            }).catch((err) => alert(err.message))
        }
        
    };


    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (

       

        <Nav>

            <Logo src = "/images/logo.svg" />


            {!userName ?  <Login onClick={handleAuth}>Login</Login> : <> 

            <NavMenu>

               <a>
                   <img src="/images/home-icon.svg"/>
                   <span>HOME</span>
               </a>

               <a>
                   <img src="/images/search-icon.svg"/>
                   <span>SEARCH</span>
               </a>

               <a>
                   <img src="/images/watchlist-icon.svg"/>
                   <span>WATCHLIST</span>
               </a>

               <a>
                   <img src="/images/original-icon.svg"/>
                   <span>ORIGINAL</span>
               </a>

               <a>
                   <img src="/images/movie-icon.svg"/>
                   <span>MOVIES</span>
               </a>

               <a>
                   <img src="/images/series-icon.svg"/>
                   <span>SERIES</span>
               </a>
                 

            </NavMenu>

            <SignOut>
              <UserImg src = {userPhoto} alt = {userName} />
                <DropDown>
                    <span onClick={handleAuth}>SignOut</span>
                </DropDown>
            </SignOut>
             
            </>}

           
            {/* <Login onClick={handleAuth}>Login</Login> */}
        </Nav>

    )
}

export default Header

const Nav = styled.div`
     
     height:70px;
     background:#090b13;

     display:flex;
  align-items:center;
  justify-content: space-between;
  padding:0 36px;
  
`

const Logo = styled.img `
 
 width:80px;
`

const NavMenu = styled.div `
   display:flex;
   margin-left:25px;
   align-items:center;
   flex:1;
   cursor:pointer;

   a{
       display:flex;
       align-items:center;
       padding:0 12px;


       img{
           height:20px;
       }

       span{
           font-size:13px;
           letter-spacing:1.42px;
           position:relative;

           &:after{
               content:"";
               height:2px;
               background:white;
               position:absolute;
               left:0;
               right:0;
               bottom:-6px;

               transform-origin: left center;
               transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
               opacity:0;
               transform:scaleX(0);
           }
       }

       &:hover{

           span:after{
               transform:scaleX(1);
               opacity:1;
           }
          
       }
   }
 
`

const UserImg = styled.img `
   width:48px;
   height:48px;
   border-radius:50%;
   cursor:pointer;
   height: 100%;

`

const Login = styled.a `
     background-color:rgba(0,0,0,0.6);
    // width:5px;
    height:48px;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing:1.5px;
   border: 1px solid #f9f9f9;
   cursor:pointer;

    display:flex;
   
     transition: all 200ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
     border-radius: 4px;

     &:hover{
       background-color:white;
       color:black;
       border-color:transparent;
    }

`

const DropDown = styled.div `
position: absolute;
top: 48px;

background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 5px;
// width: 100%;
opacity: 0;
   
    
`


const SignOut = styled.div `
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
${UserImg} {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
&:hover {
  ${DropDown} {
    opacity: 1;
    transition-duration: 1s;
    position: absolute;
    z-index: 1;
   
  }
  
}


   
`
