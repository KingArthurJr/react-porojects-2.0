import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'


function App() {
  const {data, loading} = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([])

useEffect(() => {
  if(loading) return

  setFollowers(data[page])
}, [loading, page])

const handlePage = (index) =>{
  setPage(index)
}

const nextPage = () =>{
  if(page !== followers.length - 1){
    console.log(page)
    setPage(page+1)
  }else(
    setPage(0)
  )
}

const prevPage = () =>{
  if(page !== 0){
    setPage(page-1)
  }else(
    setPage(followers.length -1)
  )
}

  return <main>
    <div className='section-title'>
      <h1>{loading ? 'loading...' : 'pagination'}</h1>
      <div className='underline'></div>
    </div>
    <section className='followers'>
      <div className='container'>
        {followers.map((follower)=>{
          return (
            <Follower key={follower.id} {...follower}/>
          )
        })}
      </div>
      {!loading && <div className='btn-container'>
        <button className='prev-btn' onClick={prevPage}>prev</button>
        {data.map((item, index)=>{

          return(
            <button key={index} className={`page-btn ${index === page ? 'active-btn': ''}`} onClick={()=>handlePage(index)}>
              {index+1}
            </button>
          )
        })}
        <button className='prev-btn' onClick={nextPage}>next</button>
        </div>}
    </section>
  </main>
}

export default App
