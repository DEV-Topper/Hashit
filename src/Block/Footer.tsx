import React from "react"

import styled from "styled-components"

const Footer = () =>{


    return(
        <div>
            <Container>
            <Wrapper>
                <p>2023 HashIT App Ltd. Allrights reserved.</p>
            </Wrapper>
            </Container>
        </div>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 5%;
    padding-top: 2%;
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    /* background-color: brown; */
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`