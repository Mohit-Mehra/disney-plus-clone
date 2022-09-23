import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Conatiner>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7977/1317977-v-2b6393692cd1" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7977/1317977-v-2b6393692cd1" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500" alt='' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b" alt='' />
            </Wrap>
            
        </Content>
    </Conatiner>
  )
}

export default Movies

const Conatiner = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

`
const Wrap = styled.div`
    border-radius: 10px;
    cursor:pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        
    };
`




