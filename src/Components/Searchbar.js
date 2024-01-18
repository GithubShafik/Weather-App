import React, { useEffect, useState } from 'react'

const Searchbar = ({onSearch}) => {
  const [query , setQuery ] = useState("Nagpur")

  useEffect(()=>{
    handleSearch()
  },[])
  
  const handleSearch = () => {
    onSearch(query)
  }
  return (
    <div className='flex'>
      <input className='p-4 mr-0 text-gray-500 bg-white border-t border-b border-l border-gray-300 rounded-l-lg' 
      placeholder='Search' 
       value={query} onChange={(e)=>setQuery(e.target.value)} 
       />
       <button onClick={handleSearch} className='px-8 text-white bg-blue-400 rounded-r-lg'>Search</button>
    </div>
  )
}

export default Searchbar
