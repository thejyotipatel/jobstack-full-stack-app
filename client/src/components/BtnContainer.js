import { useAppContext } from '../context/appContext'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrapper/btnContainer'

const BtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext()

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })

  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    changePage(newPage)
  }

  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    changePage(newPage)
  }

  return (
    <Wrapper>
      <div className='btn-container'>
        <button className='prev' type='button' onClick={() => prevPage()}>
          <span>
            <HiChevronDoubleLeft />
          </span>
          prev
        </button>
        <div className='btns'>
          {pages.map((item) => {
            return (
              <button
                className={page === item ? 'page-btn active' : 'page-btn'}
                key={item}
                type='button'
                onClick={() => changePage(item)}
              >
                {item}
              </button>
            )
          })}
        </div>
        <button className='next' type='button' onClick={() => nextPage()}>
          <span>
            <HiChevronDoubleRight />
          </span>
          next
        </button>
      </div>
    </Wrapper>
  )
}

export default BtnContainer
