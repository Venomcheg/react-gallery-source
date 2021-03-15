import React from 'react';
import {Thumbnail, Title} from "./styles";
import {ItemContainer} from "../../../global-styles";
import {connect} from "react-redux";
import {setModalPhoto} from "../../../redux/actions/photosActions";


function Photo(props) {
 const {title,thumbnailUrl} = props
  return (
    <ItemContainer photos={true} cursor={true} onClick={()=>props.setModalPhoto(props.photo)}>
      <Thumbnail src={thumbnailUrl}/>
      <Title>
          {title}
        </Title>
    </ItemContainer>
  );
}

export default connect(null, {setModalPhoto})(Photo);