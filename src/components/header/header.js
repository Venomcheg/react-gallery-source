import React from 'react';
import {withRouter} from "react-router-dom";
import {Container} from "./styles";
import {Button} from "./styles";
import {Title} from "../../global-styles";

function Header(props) {

  return (
    <Container>
      <Title header={true}>Gallery</Title>
      {props.location.pathname !=='/' && <Button onClick={props.history.goBack}>Back</Button>}
    </Container>
  );
}

export default withRouter(Header) ;