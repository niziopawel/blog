import { useHistory } from 'react-router-dom'
import './Pagination.css'

function Pagination({ totalRecords, onPageChange, currentPage, itemsPerPage }) {
  const totalPages = Math.ceil(totalRecords.length / itemsPerPage)
  const history = useHistory()

  const handlePageChange = page => {
    onPageChange(page)
    window.scrollTo(0, 0)
    history.push(`?page=${page}`)
  }

  const goToNextPage = () => {
    handlePageChange(currentPage + 1)
  }
  const goToPreviousPage = () => {
    handlePageChange(currentPage - 1)
  }

  const getPaginationGroup = () => {
    const paginationGroup = []
    let startFromNumber
    let pagesToShow = 5

    if (totalPages <= pagesToShow) {
      startFromNumber = 1
      pagesToShow = totalPages
    } else {
      if (currentPage < Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1
      } else if (
        currentPage + Math.floor((pagesToShow - 1) / 2) >=
        totalPages
      ) {
        startFromNumber = totalPages - (pagesToShow - 1)
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2)
      }
    }

    for (let i = 1; i <= pagesToShow; i++) {
      paginationGroup.push(startFromNumber++)
    }

    return paginationGroup
  }

  if (!totalRecords || totalRecords.length === 0) return null
  if (totalPages === 1) return null
  return (
    <ul className="pagination">
      <button
        onClick={() => goToPreviousPage()}
        className="pagination__item"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {getPaginationGroup().map(pageIndex => {
        return (
          <li
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex)}
            className={`pagination__item ${
              pageIndex == currentPage ? 'pagination__item--active' : ''
            }`}
          >
            {pageIndex}
          </li>
        )
      })}
      <button
        onClick={() => goToNextPage()}
        className="pagination__item"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </ul>
  )
}

export default Pagination
