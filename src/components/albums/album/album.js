import React from 'react';
import {AlbumTitle, Button, Content} from "./styles";
import {NavLink} from "react-router-dom";
import {ItemContainer} from "../../../global-styles";

function Album(props) {
  return (

    <ItemContainer>
      <Content>
        <AlbumTitle>
          {props.title}
        </AlbumTitle>
        <div>
          Amount: {props.totalPhotosCount}
        </div>
      </Content>
        <NavLink to={`/albums/${props.id}/photos`}>
          <Button>Show photos</Button>
        </NavLink>

    </ItemContainer>
  );
}

export default Album;