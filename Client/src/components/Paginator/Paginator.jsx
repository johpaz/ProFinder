/* eslint-disable react/prop-types */
import './Paginator.css'
import ReactPaginate from 'react-paginate'

function Paginator ({ cards, currentPage, setCurrentPage }) {
  const itemsPerPage = 10
  const pageCount = Math.ceil(cards.length / itemsPerPage)

  const changePage = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <div className='Paginator'>
      <ReactPaginate
        previousLabel='Previous'
        nextLabel='Next'
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName='paginationBttns'
        previousLinkClassName='previousBttn'
        nextLinkClassName='nextBttn'
        activeClassName='paginationActive'
        forcePage={currentPage}
      />
    </div>
  )
}

export default Paginator
