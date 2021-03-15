import React from 'react';
import {connect} from "react-redux";
import {getAlbums, onPageChanged, unMountAlbums} from "../../redux/actions/albumsActions";
import {
  setAlbums,
  setAlbumsIsFetching,
  setAlbumsCurrentPage,
  setPageSize,
  setTotalAlbumsCount, setTotalPhotosCount,
} from "../../redux/selectors";
import Preloader from "../common/preloader/preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Album from "./album/album";
import {Container} from "./styles";
import {ListContainer, Title} from "../../global-styles";
import Paginator from "../common/paginator/paginator";
import {unMountPagination} from "../../redux/actions/paginationActions";

class Albums extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.currentPage !== this.props.currentPage) {

      let userId = this.props.match.params.userId
      this.props.getAlbums(userId,this.props.currentPage, this.props.pageSize)
    }
  }
  componentDidMount() {
    const {currentPage, pageSize,albums} = this.props
    if (!albums) {
      let userId = this.props.match.params.userId
      this.props.getAlbums(userId, currentPage, pageSize)
    }
  }
  componentWillUnmount() {
    this.props.unMountAlbums()
    this.props.unMountPagination()
  }

  render() {
    const {isFetching,onPageChanged,pageSize,currentPage,totalAlbumsCount, totalPhotosCount, albums} = this.props

    return ( <>
        <Title>
          Albums
        </Title>
        {isFetching ? <Preloader/> :
        <div>
          <Container>

            <ListContainer>
              {albums && albums.map(item =>
                <Album  totalPhotosCount={totalPhotosCount}
                        key={item.id}
                        id={item.id}
                        title={item.title}/>
              )
              }
            </ListContainer>
          </Container>
          {(totalAlbumsCount > pageSize) && <Paginator
            totalCount={totalAlbumsCount}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChanged={onPageChanged}/>}
        </div>
    }
</>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: setAlbums(state),
  totalAlbumsCount: setTotalAlbumsCount(state),
  totalPhotosCount: setTotalPhotosCount(state),
  pageSize: setPageSize(state),
  currentPage: setAlbumsCurrentPage(state),
  isFetching: setAlbumsIsFetching(state)
})

export default compose(connect(mapStateToProps,{getAlbums, onPageChanged,unMountAlbums,unMountPagination}),withRouter)(Albums) ;