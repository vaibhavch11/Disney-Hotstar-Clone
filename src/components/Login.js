import React from 'react'
import styled from 'styled-components'


function Login() {
    return (
        <Container>


            <Content>

                 <LogosOne src="/images/cta-logo-one.svg" />

                 <SignUp>
                     GET ALL THERE
                 </SignUp>

                 <Description>
                      Get the monthly/Yearly subcription for just 599,and Enjoy your every day.
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document 

                </Description>

                <LogosTwo src="/images/cta-logo-two.png" />
                

            </Content>
            
        </Container>
    )
}

export default Login


const Container = styled.div `
     position:relative;
     height:calc(100vh - 70px);
     display:flex;
     align-items:top;
     justify-content:center;

     &:before{
         background-position: top;
         background-size: cover;
         background-repeat: no-repeat;
         position:absolute;
         content:"";
         
         top:0;
         bottom:0;
         left:0;
         right:0;
         
         background-image: url("/images/login-background.jpg");
         z-index:-1;
         opacity:0.7;

     }

    


`

const Content = styled.div `

   max-width:650px;
    padding:80px 40px;
    width:80%;
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-top:50px;

`

const LogosOne = styled.img `

    

`

const SignUp = styled.a `
     width:100%;
     background-color:#0063e5;
     font-weight:bold;
     display:flex;
    align-items:center;
    justify-content:center;
     padding:17px 0;
     border-radius:4px;
     font-size:18px;
     cursor:pointer;
     color:#f9f9f9;
     transition: all 250ms;
     letter-spacing:1.5px;
     margin-top:8px;
     margin-bottom:12px;

     &:hover{
         background-color:#0483ee;
        

     }

`

const Description = styled.div `
  font-size:11px;
  letter-spacing:1.4px;
  align-items: center;
  margin-bottom: 12px;

`

const LogosTwo = styled.img `

    width:100%;

`
