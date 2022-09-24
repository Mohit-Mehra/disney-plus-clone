import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
      <Background>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8295/1328295-h-b05c8156e59a" alt='' />
      </Background>
      <ImageTitle>
        <img src="/images/viewers-marvel.png" alt='' />
      </ImageTitle>
      <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png" alt='' />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButtom>
            <img src="/images/play-icon-white.png" alt='' />
            <span>Trailer</span>
        </TrailerButtom>
        <AddButtomn>
            <span>+</span>
        </AddButtomn>
        <GroupWatchButton>
            <img src="/images/group-icon.png" alt='' />
        </GroupWatchButton>

      </Controls>
      <SubTitle>
        1hr 58min Action English 2022U/A 13+
      </SubTitle>
      <Description>
      The God of Thunder teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster to take on a galactic killer known as Gorr the God Butcher.
      </Description>
    </Container>
  )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh-70px;);
    padding: 0 calc(3.5vw+5px);
    position: relative;
    padding-left:50px;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width:35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background: rgb(198,198,198);
    }
    
`

const TrailerButtom = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`

const AddButtomn = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    background-color : rgba(0,0,0,0.6);
    border: 2px solid white;
    span{
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
`
const GroupWatchButton = styled(AddButtomn)`
    background: rgb(0,0,0);
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width:500px;
`



