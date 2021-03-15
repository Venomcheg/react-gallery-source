import React from 'react';
import {Bold, Button, Content} from "./styles";
import {NavLink} from "react-router-dom";
import {ItemContainer} from "../../../global-styles";

function User(props) {
  const {id,name,username,email,phone,website} = props

  return (

      <ItemContainer>
        <Content>
          <p><Bold>{name}</Bold> ({username})</p>
          <p><Bold>email:</Bold> {email}</p>
          <p><Bold>phone:</Bold> {phone}</p>
          <p><Bold>website:</Bold> {website}</p>
        </Content>

        <NavLink to={`/users/${id}/albums`}>
        <Button>Show albums</Button>
        </NavLink>
      </ItemContainer>

  );
}

export default User;