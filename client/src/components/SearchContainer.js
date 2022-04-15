import { FormRowSelect, InputCmponent } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrapper/searchContainer'

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilter,
    jobTypeOptions,
    statusOptions,
  } = useAppContext()
  const handleSerach = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilter()
  }
  return (
    <Wrapper>
      <form className='form-center'>
        <div className='input-controls'>
          {/* search position */}
          <InputCmponent
            type='text'
            name='search'
            value={search}
            handleChange={handleSerach}
          />
          {/* status */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSerach}
            list={['all', ...statusOptions]}
          />
          {/* jobType */}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSerach}
            list={['all', ...jobTypeOptions]}
          />
          {/* status */}
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSerach}
            list={sortOptions}
          />
          <button
            className='clerar-btn'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
