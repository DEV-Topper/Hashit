import React from 'react'
import styled from 'styled-components'
import img from '../assets/logo.svg'
import {BsFillCircleFill , BsFillMoonStarsFill} from 'react-icons/bs'

const Header = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Logo src={img}/>

                <Icons>
                <BsFillCircleFill style={{height:'40px', width: '40px', color:'black'}}/>
                <BsFillMoonStarsFill style={{height:'25px', width: '25px', color:'black'}}/>
                </Icons>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header

const Icons = styled.div`
    height: 50px;
    width: 90px;
    background-color: #F2F2F2;
    border-radius: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`


const Logo = styled.img`
   height: 70px;
   width: 70px;
`

const Container = styled.div`
   background-color: #FFFFFF;
   height: 100px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;

   /* @media screen and (max-width: 7) {
    
   } */
`

const Wrapper = styled.div`
   height: 100px;
   width: 85%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`