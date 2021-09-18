import React from 'react'
import styled from 'styled-components';

function Header() {
    return (

        <Nav>

            <Logo src = "/images/logo.svg" />

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

            <UserImg src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSFRUYGBgYGBwYGBgYGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISGjQhJCE0NDExNDQ0NDQ0NDQxNDQ0NDQ0MTQ/NDQ0NDQ0NDQ0NDQ0MTQ0PTQ0NDQ0NDQ0NDE0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAABAgADBAUGBwj/xABBEAACAQIDBAcFBQcDBAMAAAABAgADEQQSIQUxQVEGByJhcYGREzKhscFSYoLR8DNCkqKywuEjQ3JTc6PxFCQl/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAICAgIDAQAAAAAAAAAAAQIRITEDEkFhMlGBIv/aAAwDAQACEQMRAD8A3K0kloZAEkNpIAktGhtAUQw2jAQFtJHyyWgLaG0NpLQBaS0a0loCWktHtBaAtoI8FoCwR7QWgJJHtFMBbQGMRAYCwERjFMBYpjxTAuJJIYEtJaQwQCIbSCMBAKrDaEQwBaQyS02ljkopne+rBQACSWbcAB+tIFzLHau1aeGQO536KotmYjlcgAd5NpoO0ek+JTE1XWoAiPkVCAyhbKc9uJN73vuPdML0k28cUUqe7lU2BsBdst79wI85G1pi6NT6V0GQ1CxVVF7DK5c8lIJB4evIS3wnTbDsM1QrSX7z5mGtu0FWw8iZyLEYl2ftuWJ11uPTgBLzDYZjxJBG7fpy7t0jdT6x0husjBAsD7TQ2ByXDjmNbjzl5svpzgq5CioabG3ZqDJqeTaqfWcnTZS8T+rkX+Up4fZoKtc3I0A5C++Ts9Y72MSh3Ne2umpt4DWPTcMLqQQeInJeje26tBfZuxZFNl4lLaacR4jzBvNyw211LpVpmwc5aicn0DacLsUIPeeZjaNNrtFhpVAw0/XGMRJVJaAiMYICEQGOYpgKRFIjGQiAhiyoRFIgVpIIYEkAhhUQCBHAkVY1oAkjRC0BMRXVFLuwVVFyx0AHMzlHTnpGa1VEQkU6e+x1Z9+a3C27nqd02/p3tvDU6D4eoxLuvZRPeGt1c/ZFwN/LjONYrEF+2bXJN7aDS0rVsYy2KxJxLe0cKpygFgLXA3X13yzUKCSWvlsDwI/X1ljRdjYA/L4CZvAbDqOM2XhbxHr9JF47Xkt6Yiohduybnhf963LmZcUsc6kKbga3uOYtNhodEazWyoRxH590yeE6A13IJAHPw5yPZaYVpv8A8lwTcmxFvRgRr5Sm2LZbuD7wF/EXBnS16t3Ol9B4/XdErdWb+6Dpz77bzGz0c6GOIcctx8bDX1+UyOA2owdANSO15Br/ACF/IS5270Qr0MxKNlGubeNJrTMQdN9gqjju1Pz9ZMu1csbHdsNtZFN2dVXKSbsBrfT+o6S6obewz3yVVNt43HXda++84tga1RRmKFu8kG34ZsOx8cA6uVBb927KoU7rnu3SdqerrA1gMt9n1WZAXy3sPdN/mJdNLKkimNBaAhEEe0UiAIDGggPDDDAEqLEtGAgMI0USQIZYbQwLPqlRqZGt11HmD9JkZRxOHV0NNtzCxtofIwOF9MkJxNTtl8hAL/aIUX/LymsXJsPSbz1j7FXDOmRjlqZmAZizEgre5Op37++axsLB56guNAZXepur63dRsfRrYGYBmFybH/E6ZszZqqBoJhdi0gANJuGEItac2WVtduOMxi9w2GAG6X6IBoJb0ZXBl4zqpcxHMOaQxUaWeLwyVFKOoII46zgnTLYRw1ZgB2CTY8D3E/mJ6AcGaD06wIqIx8e8fmD+rxheUZThzDD5AmhsfHsk91iRLnZ+1fZt+xRwd4e4v4MPyMw1VijFcoPfexPLUTJbGqK9enTqA5HYK2u7NoCD42mzB2fo1UD4dGCZLr7pNyPxWGbxmUKyhgMKKaLTHAWvYAnvNuMuZZQmWC0eAiBTMUyoRFIgJBGtJaBWCw5Y1obQECwxpICwgSASoBAXLDljgQ2gcw64MAStHEa2W9O3AFrvf+W01nolhd7chOldZlDNs6qbaoabjuIqID8GM0Lo0QtJTz3zLydNvFzW54GnYC02PAU729ZqmH2rSQKGbzGtpsuytqUX9xwdNP8AExkdVrYaSWEYDWW9PEC2/jKyVRp4TSM7KrZJAsw+P6UYeicjMS3IAm3nKeG6SrUIIRlT7TbyfuqN8XSNZMyygzSumeHYIXCFhb93f/ibcuKRtVYGUMQoIKtuOlpXadPN2OUFmYDjc3vuG88uXpMt0Q2f7fEoqk2Vsx5iwJv5FRLnpNggtV1BAGZgTwBvYX8SQPSbJ1R7MsKtcjW4p693aNvUes2nLny4dIVdBflDaNaC0uzLJGiwFIgKx4DApwERyIskXEhkkMgLaQCS8dRAiiOFkURhJAtJaEyASBieleF9pgsSnOi5Higzj4qJyjYutEAcyPiZ2nFJmR15owtzupE5BsugFd0UdkVHAB5G1vnM/J028PemRwC0d1Uiw014zKYbD4F1L0mYMCVzJqFYC+Ui+p1vYa6y0w+xhnWpq1ju5EHQ29fWbDsrZ1CkXqJTOdwQxtpY7xlYnf4TPHV7dOUynSh0f2sWqewZr8juvbmDuPdNv2lTypnvuGs0hcOiYlCi5baam556mb6zZlAIuCNxkT5hlLxWkvtGihZvYGpkBdiBoANTwN+PKXWz+k+GrLrRZBoM1gygsNFYjcdPd390yFXZtVHZlRGVuRK3HKZDBYUFcppIi8QLa+glsZx9mWtyy8KWFQEhlsR+6QNMvC1uEr1zw75cphlUWUWHAakDwB3TH4x7H4SmW4TmuV7Yw7VMTXppa5BIvzDD5kCbV1e4F6S1g4IBZCoPLKQdL93xll0coFsfUYqWRS1uWa+nwHym+UqQXd3g+RP+ZpheWeeMmFt/hrQRyIpmzkLFMcxSICwRjFMANEMcmLJFxAY0BkCARgIAI4EkRRHtIJDAEkkkgGc76QbO9jiWYCyVCWTxsMw8iZ0Oar08AC0X5O6/xKD/AGyuc/y08V1lFDZYDAXHnM8qhVuB+rTA7ErCw8P185lsVVsvjOaO+6rX1qZ8So32bfN/c2CnunJn2q9GuLqQuZrvwuToT3Hnwm6jblSoinDqjuCLq7FVA8VBMtDKb02gVwRa+vKVFItMVh89RMzp7N7c768bcx4yYbHWJRtGHx7xLTLXbK4/pe4kHnMTjEtbW53zIYjFC0sKzaXmeV5Wx3pbbC2eKSe1bezM5OpN2sLADfoBMtSNxmta5Jtyub2+MOHYCmvEkED1N/rHm+E+XP5suJCkRSI8WaOctoCI9pLQKZEUiVbRSskUyICseKYFe0lobSCBAI4EAEaBLQQyWgCS0a0loAmr9P0vRptwFWx80b8ptWWYrpLgjVw1RFF2AzoOOZO1Yd5AI85XKbxq+F1lK5/sysyOBvF5n8VjBlFzvM17Z2IXMjHdcX/XrMr0j2UfZh6b5baggAk+IM5Y7t/pcJgabnt2y8SSJtWAw1KnYqyAWA3jhunLNjYV2J9owqW4OWS2vNdPhNywGz0N0NGmLrYE1GexIOuUqPgZpImy66rdc6EXDKfAg/KY/GYRHPvdocQbGa6/RdHe6u4JN+w7Io0+6dfOZ+jsEUsrq73Fswd3cN/ETbyis7Jj8lTZ5ABY34fH/Ep4mwW0yNWsNBy1P68Zr+PxPvd+ijmd0zsWltZbZlMezVtLkE38STvl2RKGzh/poAb2AU+KjdLm06seo4c/ypLSWj2gtLKkIkjWgIgIYIxEEBSIhEqmKwgVcsmWPaG0BAIY1osCARgsiiVAIC5ZAse0NoC2gAj2hCwOZdLNiGhUNRAfZOSQQNEcnVCeAubr6cIuz8cXT2b62/Ql1096X02y7Nw7hqlWoqVXUgrTXMMy5txc7jbcL8Zq64jJVKjep3cSt9D8Jz+TDV3HV4vJuarP4bZhL5lIAO8flM/gNkOTq1hw4zG7L2khF+HyJmyYbGWAtawlMftv7XXFZnC4YIBxNt/5cpK7G2ss22ootc+nHumHx+2LnsnS/M62v+Qlqx1zyu8dUCKe1v3zG4HDmowqEWVTdBzO7N+UmGw71yGe4QG+X7R7+7umeSmEW54SkjVgMVScrjKSMysMOuIpMpsUq0i1iD3kAEcQSDoTL3oht9cbhxU0FRbLVQaWe3vAfZbePMbwZldmYTsVq7D9opVRypqGt6kk+Fp5+2Ltmtg3TEUTqFCup9103lHHLv3g6zqwl9Y4/JZ7XT0RaAiYPo10sw2OW1NstQC7UX0deZHB1+8PO0zpEszKYI0EBTFIlSKRAUiKYxgIgVxGiiNAUwARjCogFRGAhUTBba6X4LC3FWuhcf7adt78sq+7+K0DO2lptLadHDr7SvVSmnN2Av3KN7HuF5yLpB1qYioSmFUUE+2wV6p79bqngAT3zQcbi6lZjUqu9RjvZ2LN4XO4d0nQ6vt7rcprdMHSLnhUq3VPEIO0R4lZzvbHTPHYkn2mIcKf3KZ9mluWVbZvO8wji0oReBn+hNLPjsOv3z8FZvpN86ZbDZHTEIND2G89Vv5/Oal1aYfNtCj90O38hX+6d72jhaVRGoOyhmWwG8i40aw3cDIuPtjpbHL1ylcmwhbjfx/OZihiX4MLd95k02BUVe0m7eVIbz0vp4xEwdiNPO05budu6THLnGrEU3fQlmvw/d8+cz+ytjgWL6nlwEq4Kgo1taZalUAkdlx0u6dMIt5bUKZrvl/cGrHnyA8fleKztVbIgvzPBRzJmewmGWmoQcN54k8SZpjju/THPP1n3VDa9QU8PVfcEpOfAKhP0nmX2fZAnobrAxGTZ+JPNMn8bBP7p59KzonTkUKBem4qI7I6HMrqSGUjiCJuGyusPGoAKhp1gN+dQreTpYeqmaqRKVLj+u6WxktK61s7rHwzkCsj0T9r9ol/FQG/lm1YDaNGuuajVSoBvyMCR/yG8ec8/wAqUKzIwdGZGG5lYqw8GGok3BG3oe0FpyfY3WFiaRC17V04k2SoB3MBZvBhrzE6HsXpHhsULUqgz2uab9lxz7J97xW4lbjYnbJkRDKpEptKiuIwEAEsdu7TXC4epiW1CLcLuzOSFVL97FR5wlc4vEpSU1KjKiL7zOQqjxJmkbV61MJTutBHrsNzfs0v/wAm7RHgs5NtXadbEO1StUZyxzWJOQHhkS9lABsLSytLeqGxdIOm2Nxd1ap7Omf9qldFtyZr5m8zbuE1lUlS0IltGwySFZUiPuvJRtbMNSeWkp5ZcZdB6mUiNZnVm/8AU5hS+OZ+FPDu/mWRVHx+E6xhsCw7fG9yTqSeJM551I07Yqt97DfKon5ztAw41ky6Re2OAuB+jLfF4MP2goB49+7W3CZB0ymUyefL6mV8knq08Nsy4a9VwrLK2yqBdspJtvJ7hvmRxeolvgay0nzNuIIPdfj8JzzGbddyyuNZsYYKLKAF00A1vxJN9eEoUsZlbK2qnjy/xMgTcXGtxp58ZY4jC6Tpx1rTgt5a11s1suAK/bqovoS/9s4lOo9bmL/0cLSJ1Lu5/AoQH/yTlpkgNKS7/X6So8poNfX6Scey9HtCBIYVmyqAQqbEEGxBuCDYgjcQRuMl4CYG5bG6wcRSASsoroNMxOSpbvfUN5i/fN52L0ow2K7KPkf/AKb2V/w62f8ACTOKXi2vKXGVO3pATQuuHFFcGlMH9pXUHvVEd/6gs3605f111rDC0+Zqv6BFH9RmU7S5W57R8B8oIa29TzHyP+ZBNRAJIJIFRYuI93x0jLBX3qO+8i9IimwlBV7UuDulNBrM1nWepbDscRVqjctNVb8ZJB79afxnZb6zl/UnSsmJfm9NP4VY/wB06jaKhRxCXEsFG9T4r9RMpLSvhzvG8aiO5qkuruMbWmPqYdqjBE3neeAHOZR6LM1gN+t+A539DMlhcKqCw3neeJmMxu+XVl5ZJx2mCw/s0VL3yi0rkQyTVzXlxbrbxF8XTpWsEpXvzNRjc9w7AE0QTZesPFe02hXPBCtMfhRb/wAxaa0JdEB4ghJgA1jHsqNHEQxpsqBgzSExTAcmUqr2Gm86DxOka8oHtMPu6+Z3So9P2nGeumqTiqKcFoXHi9R7/wBAnZzOQddoQVcMQf8AU9m4ZfuB1KMfMuPIzGdrua1dynvI9f8A1BI57HgR+X1gUzRAgSASSQKlOCr7w7hDTise0f1wjLpEK8WmNYzQUvelFnd+phLYSq3PEEelOn+c6NND6oFtgWPOu5/lQfSb5IokW+saL9JACIBujySQBFfcY0x238V7LD1qv2Kbt6KTE7RXnbauJ9pXrVft1XceDOxHwIlpAg0hMuEMiyEQKIx7L0ZpJGgJmyoQGAwmArGUaO4tzN/Lh8JK7aW56eslZrCVHqG0829ONrnFY6tVv2Vc06Y5JTJVfUgt4sZ6UWeXOkGGNPFYin9ivUX0drfC0xi6zB7J8PlJTio2h8JKR0l0KsIgEgkh1MW+p8YViJukZEFpKI1keNQ3yqXoLqlH/wCev/dqfO03iaR1Sn/6A7qtT5g/WbvIoUmLT3D19ZK3umMBI+A0kkkCTT+s3FZNn1RxfKn8bqG/lzTcJzDrlxdqdCiD77s58Ka5fm/wkxFcptBGMFpIUiDjGtFlse0VDFYxojmaoKYKjaQXlOq+kqFXVh3a/QfWJXNzYQ0WsC3M/KUTVkLP/9k=" />

        </Nav>

    )
}

export default Header

const Nav = styled.div`
     
     height:70px;
     background:#090b13;

     display:flex;
  align-items:center;
  padding:0 36px;
  overflow-x:hidden;
`

const Logo = styled.img `
 
 width:80px;
`

const NavMenu = styled.div `
   display:flex;
   margin-left:25px;
   align-items:center;
   flex:1;

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

`
