import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
           <Background >
             <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
           </Background>

           <ImageTitle>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
           </ImageTitle>

           <ButtonSection>

              <PlayButton>
                  <img src="/images/play-icon-black.png" />
                  <span>PLAY</span>
              </PlayButton>

              <TrailerButton>
              <img src="/images/play-icon-white.png" />
                  <span>TRAILER</span>
              </TrailerButton>

              <AddButton>
                  <span>+</span>
              </AddButton>

              <GroupWatch>

                  <img src="/images/group-icon.png" />
              </GroupWatch>
               

           </ButtonSection>


           <SubTitile>
               In publishing and graphic design, Lorem ipsum
           </SubTitile>

           <Description>
           Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
           </Description>
            
        </Container>
    )
}

export default Details

const Container = styled.div `
  min-height:calc(100vh-70px);
  padding:0 calc(3.5vw - 5px);
  position:relative;

`

const Background = styled.div `
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
  
  img{
    width:100%;
  height:100%;
  object-fit:cover;
  }
 
`

const ImageTitle = styled.div `
 
    min-height:170px;
    min-width:200px;
    height:30vh;
    width:30vw;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

const ButtonSection = styled.div `

  display:flex;
  align-items:center;

`

const PlayButton = styled.button `
  display:flex;
  align-items:center;
  font-size:15px;
  padding:0px 24px;
  margin-right:22px;
  border:none;
  letter-spacing:1.8px;
  height:56px;
  background:rgb(249,249,249);
  cursor:pointer;
  border-radius:4px;

  &:hover{
      background:rgb(198,198,198);
  }

`

const TrailerButton = styled(PlayButton) `
   background:rgba(0,0,0,0.3);
   color:white;
   border:2px solid white;

`

const AddButton = styled.button `

   margin-right:16px;

   width:44px;
   height:44px;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:50%;
   border:none;
   border:2px solid white;
   background:rgba(0,0,0,0.3);
   


   span{
       font-size:36px;
       color:white;
   }

`

const GroupWatch = styled(AddButton) `

   background:rgb(0,0,0);

`



const SubTitile = styled.div `

    color:rgb(249, 249, 249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;

   
`

const Description = styled.div `
  Line-height:1.4;
  font-size:20px;
  margin-top:16px;
  max-width:50%;
  color:rgb(249, 249, 249);
   
`


