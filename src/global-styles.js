import styled, {createGlobalStyle, css} from "styled-components";
export const GlobalStyles = createGlobalStyle`
*,*:before, *:after{
  outline: none;
  box-sizing:border-box;
  list-style: none;
  margin:0;
  padding: 0;
}
body,#root {
  height: 100%;
  line-height: 1.8rem;
  background-color: #fff;
  color: #333333;
  font-size: 16px;
  font-family: Roboto, sans-serif;
}

.title {
  font-weight: bold;
  font-size: 3rem;
}
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: .8rem 1.2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  transition: .2s;
}
`
export const Title = styled.h2`
font-weight: 800;
margin: 0 1rem 2rem 1rem;
${props => props.header && css`
font-size: 2rem;
margin: 0 1rem;
`}
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "Header" "Main" "Footer";
  grid-template-rows: auto 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
`
export const Main = styled.main`
 grid-area: Main;
`
export const ListContainer = styled.ul`
position:relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 0;
  margin: 0;
  list-style-type: none;
`
export const ItemContainer = styled.li`
  flex: 0 1 15rem;
  margin: 0 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  height: auto;
  display:flex;
  align-items: ${props => props.photos ? "center" : "flex-start"} ;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  border-radius: .5rem;
  box-shadow: 0 0 10px 0px gray ;
  transition: .2s;
  cursor: ${props => props.cursor ? 'pointer' : null};
  &:hover {
  transform: scale(1.05);
  }
`
