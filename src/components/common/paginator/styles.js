import styled, {css} from "styled-components";

export const Button = styled.button`
color: white;
border: none;
border-radius: 5px;
padding: 0px 15px;
height: 100%;
background-color: #2f69ff;
cursor: pointer;
&:hover {
  background-color: #0034b7;
}
`
export const BtnChecked = styled.span`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0 .1rem;
  padding: 0px 7px;
  font-size: 16px;
  background-color: #fff;
  &:hover {
  background-color: #bebebe;
  }
  ${props => props.currentPage === props.classValue && css`
  background-color: #2f69ff;
  &:hover {
    background-color: #0034b7;
  }
`};
  border: 1px solid rgba(0,0,0,0.1);
  color: ${props => props.currentPage === props.classValue && "white"};
  height: 100%;
  cursor: pointer;

`
export const Container = styled.div`
height: 35px;
display:flex;
align-items: center;
margin-bottom: 5px;
justify-content: center;
visibility: ${props => props.isFetching ? 'hidden' : 'visible' }
`