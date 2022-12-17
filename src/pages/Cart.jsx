import { PowerRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type ==="filled" && "none"};
    background-color: ${props=> props.type ==="filled" ? "black" : "transparent"};
    color: ${props=> props.type ==="filled" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div``
const Image = styled.img``
const Details = styled.div``
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div``
const ProductSize = styled.span``
const PriceDetail = styled.div``

const Summary = styled.div`
    flex: 1;
    
`


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Whishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2261179_krossovki_fila_disruptor_peachwhip_svetlo_rozovyy_kozha_natural_naya.JPG"/>
                                <Details>
                                    <ProductName><b>Prodact:</b> JESSIE THUNDER SHOSE</ProductName>
                                    <ProductId><b>ID</b> 9778338922</ProductId>
                                    <ProductColor/>
                                    <ProductSize><b>Size:</b> 37.7</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                price
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart;