import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <Signup>GET ALL THERE</Signup>
            <Description>
                Get Premire Access to Raya and the Last Dragon for an add a Disney+ subscription. As of 24/09/2022. The price of Disney Bundle will increase by Rs.50
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login


const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
    display:flex;
    justify-content:center;
    align-items:top;
    &:before{
        background: url('/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity:0.7;
        bottom: 0;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display:flex;
    flex-direction:column;
    margin-top:40px;
    align-items:center;


`
const CTALogoOne = styled.img`

`
const Signup =styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    cursor:pointer;
    text-size:18px;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background: #0483ee;
    }

`

const Description = styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const CTALogoTwo = styled.img`
    width:90%;
`
