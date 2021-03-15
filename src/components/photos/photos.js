import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {
  setPhotosCurrentPage,
  setPageSize,
  setPhotos,
  setPhotosIsFetching,
  setTotalPhotosCount,
  setPhotoIsModal
} from "../../redux/selectors";
import {getPhotos, onPageChanged, unMountPhotos} from "../../redux/actions/photosActions";
import {withRouter} from "react-router-dom";
import Preloader from "../common/preloader/preloader";
import Photo from "./photo/photo";
import {Container} from "./styles";
import Paginator from "../common/paginator/paginator";
import {unMountPagination} from "../../redux/actions/paginationActions";
import {ListContainer, Title} from "../../global-styles";
import Modal from "./modal/modal";

class Photos extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currentPage !== this.props.currentPage) {
      let albumsId = this.props.match.params.albumId
      this.props.getPhotos(albumsId, this.props.currentPage, this.props.pageSize)
    }
  }
  componentWillUnmount() {
    this.props.unMountPhotos()
    this.props.unMountPagination()
  }
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    let photosId = this.props.match.params.albumId
    this.props.getPhotos(photosId, currentPage, pageSize)
  }

  render() {
    const {photos, isFetching,isPhotoModal, totalPhotosCount, pageSize, currentPage, onPageChanged} = this.props
    return (<>
        <Title>
          Photos
        </Title>
        {isFetching ? <Preloader/> :
          <div>
            {isPhotoModal && <Modal />}
            <Container>

              <ListContainer>
                {photos && photos.map(photo =>
                  <Photo key={photo.id}
                         title={photo.title}
                         url={photo.url}
                         thumbnailUrl={photo.thumbnailUrl}
                         photo={photo}
                  />
                )}
              </ListContainer>
            </Container>

          </div>

        }
        {(totalPhotosCount > pageSize) && <Paginator
          isFetching={isFetching}
          totalCount={totalPhotosCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChanged={onPageChanged}/>}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: setPhotos(state),
  totalPhotosCount: setTotalPhotosCount(state),
  pageSize: setPageSize(state),
  currentPage: setPhotosCurrentPage(state),
  isPhotoModal: setPhotoIsModal(state),
  isFetching: setPhotosIsFetching(state)
})
export default compose(connect(mapStateToProps, {
  getPhotos,
  onPageChanged,
  unMountPhotos,
  unMountPagination
}), withRouter)(Photos);