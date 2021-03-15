import React, { useState } from "react"
import {Button, Container, BtnChecked} from "./styles";

const Paginator = ({  isFetching,
                     totalCount,
                     pageSize,
                     currentPage,
                     onPageChanged,
                     portionSize = 10,
                   }) => {

  let pagesCount = Math.ceil(totalCount / pageSize)
  let pages = []
  for (let i = 1; i < pagesCount+1; i++) {
    pages.push(i)
  }
  let portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize
  return (
    <Container isFetching={isFetching}>
      {portionNumber > 1 && (
        <Button
          onClick={() => {
            setPortionNumber(portionNumber - 1)
          }}
        >
          Prev
        </Button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((item) => {
          return (
            <BtnChecked
              key={item}
              onClick={() => {
                onPageChanged(item)
              }}
              currentPage={currentPage}
              classValue={item}
            >
              {item}
            </BtnChecked>
          )
        })}
      {portionCount > portionNumber && (
        <Button
          onClick={() => {
            setPortionNumber(portionNumber + 1)
          }}
        >
          Next
        </Button>
      )}
    </Container>
  )
}

export default Paginator