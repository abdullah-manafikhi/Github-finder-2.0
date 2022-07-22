import React from 'react'
import UserSearch from '../users/UserSearch'
import SearchResult from '../users/SearchResult'

function Home() {
  return (
    <div className='text-center'>
      <UserSearch />
      <SearchResult />
    </div>
  )
}

export default Home
