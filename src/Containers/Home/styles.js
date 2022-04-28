import styled from 'styled-components'
import BackgroundL from '../../assets/bglogin.svg'


export const Container = styled.div`
background: url("${BackgroundL}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;`;



export const ContainerItems = styled.div`
margin-top :10px ;
background: linear-gradient(157.44deg, 
rgba(255, 255, 255, 0.6) 0.84%, 
rgba(255, 255, 255, 0.6) 0.85%, 
rgba(255, 255, 255, 0.15) 100%);
border-radius: 13px 13px 13px 13px;
padding: 30px 20px;
display:flex;
flex-direction: column;
height:95vh;`;

export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
margin-bottom: 40px;`;

export const InputLabel = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: -0.408px;
color: #EEEEEE;`;

export const Input = styled.input`
margin-bottom: 20px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
width: 300px;
height: 40px;
outline: none;
padding-left: 10px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
color: #FFFFFF;`;

export const Button = styled.button`
background: rgba(0, 0, 0, 0.8);
border: none;
border-radius: 8px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
margin-top: 70px;

color: #FFFFFF;

width: 300px;
height: 40px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
&:hover{
    opacity: 0.7;
}
&:active{
    opacity: 0.6 ;
}`;
