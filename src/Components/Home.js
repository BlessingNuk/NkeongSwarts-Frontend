import React from 'react';
import styled from 'styled-components'
import Header from './Header';
import ImgCarousel from './ImgCarousel';


function Home() {
    
    return (
        <Container>
            <Header />
            <ImgCarousel />
        </Container>
    )
}

export default Home

const Container = styled.div`
    z-index: -1;
`