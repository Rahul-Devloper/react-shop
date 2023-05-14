import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.2s ease-in;
`
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;

  align-items: center;
  background-image: cover;
`
const Image = styled.img`
  height: 90%;
  background-image: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0)

  const handleSliderClick = (direction) => {
    if (direction === 'left') {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleSliderClick('left')}>
        <ChevronLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems?.map((slide) => {
          return (
            <Slide bg={slide.bg} key={slide.id}>
              <ImgContainer>
                <Image src={slide.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Description>{slide.desc}</Description>
                <Button>Show Now</Button>
              </InfoContainer>
            </Slide>
          )
        })}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleSliderClick('right')}>
        <ChevronRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
