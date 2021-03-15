import React, {useCallback, useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {setModalArrowLeft, setModalArrowRight, setModalPhoto} from "../../../redux/selectors";
import {Background, CloseButton, Content, Description, LeftButton, Photo, RightButton} from "./styles";
import {changeModalPhoto, deleteModalPhoto} from "../../../redux/actions/photosActions";

function Modal(props) {

  const modalRef = useRef()
  const closeModal = e => {
    if(modalRef.current === e.target) {
      props.deleteModalPhoto()
    }
  }
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && props.showModal) {
        props.deleteModalPhoto()
      }
    },
  );
  useEffect(
    ()=> {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    }
  )
  const {title,url} = props.photo
  return (
    <Background ref={modalRef} onClick={closeModal}>
      {props.leftArrow &&  <LeftButton arrow={true} onClick={()=>props.changeModalPhoto('left')}/>}

      <Photo>
        <CloseButton onClick={() => props.deleteModalPhoto()}/>
        <Content>
          <div>
            <img src={url} alt=""/>
          </div>
          <Description>
            {title}
          </Description>
        </Content>

      </Photo>
      {props.rightArrow && <RightButton arrow={true} onClick={()=>props.changeModalPhoto('right')}/>
      }
      </Background>


  );
}

const mapStateToProps = (state) => ({
  photo: setModalPhoto(state),
  leftArrow: setModalArrowLeft(state),
  rightArrow: setModalArrowRight(state)
})

export default connect(mapStateToProps,{deleteModalPhoto, changeModalPhoto})(Modal);