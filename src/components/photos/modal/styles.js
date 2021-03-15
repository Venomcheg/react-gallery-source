import styled, {keyframes} from "styled-components";
const zoom = keyframes`
from {
  transform: scale(0.1);
}
to {
  transform: scale(1);
}
`
export const Background = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0,0,0,.7);
  button {

  }
`
export const Description = styled.div`
font-size: 1.5rem;
@media(max-width: 500px) {
font-size: 1.2rem;
}
`
export const Photo = styled.div`
  padding: 2rem;
  position: fixed;
  z-index: 11;
  width: 100%;

  max-width: 650px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  @media(max-width: 500px) {
  padding: 1.5rem;
  }
  img{
  width: 100%;
  }
`
export const Content = styled.div`
  animation: ${zoom} 0.3s ease-in-out;
`
export const LeftButton = styled.button`
  position:absolute;
  top: 50%;
  background-color: transparent;
  border: solid white;
  border-width: 0 1rem 1rem 0;
  display: inline-block;
  padding: 1rem;
  transform: translate(50%,-50%) rotate(135deg);
  transition: .2s;
  &:hover {
  border-color: #acacac;
  }
`
export const RightButton = styled.button`
  position:absolute;
  top: 50%;
  right: 0;
  background-color: transparent;
  border: solid white;
  border-width: 0 1rem 1rem 0;
  display: inline-block;
  padding: 1rem;
  transform: translate(-50%,-50%) rotate(-45deg);
  transition: .2s;
  
    &:hover {
  border-color: #acacac;
  }
  
`
export const CloseButton = styled.button`
  padding: 0;
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  top: 5px;
  right: 5px;

&:hover {
  &:before,
  &:after {
      background-color: #000;
    }
  }
&:before,
&:after {
    content: '';
    position: absolute;
    top: 0;
    height: 20px;
    width: 2px;
    background-color: #969696;
    transition: all .3s;
  }
&:before {
    left: 1px;
    margin-left: 12px;
    transform: rotate(45deg);
    Z-index: 1;
  }
&:after {
    left: 50%;
    z-index: 2;
    transform: rotate(-45deg);
  }
`

