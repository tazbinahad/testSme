/* eslint-disable no-unused-vars */
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.section`
    width: 100%;
    height: 650px;
    display: flex;
    background-color: #fff;
    position: relative;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff1f1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    bottom: 0;
    margin: auto;
    opacity: 0.5;
    cursor: pointer;
    z-index: 2;
`;
const Wrapper = styled.div`
    display: flex;
    overflow: hidden;
    /* transform: translateX(-400px); */
`;
const Slide = styled.div`
    flex: 100% 0 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.bg};
    transform: translateX(-100%);
`;
const ImgContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    text-align: center;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 30px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            console.log('left');
        }
    };
    return (
        <Container>
            <Arrow
                direction="left"
                onClick={() => {
                    handleClick('left');
                }}
            >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc> {item.desc}</Desc>
                            <Button>Show Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow
                direction="right"
                onClick={() => {
                    handleClick('left');
                }}
            >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};
export default Slider;
