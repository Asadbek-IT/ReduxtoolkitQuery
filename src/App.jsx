import React from 'react'
import { useGetPostQuery } from './app/api/api'

const App = () => {
  const {data, isLoading, isError, isSuccess, refetch} = useGetPostQuery();

  if(isLoading) return <h1>Loading...</h1>

  if(isError) return <h1>Some error accured</h1>

  if(isSuccess)
  return (
    <div>
      <h1>Success</h1>
      {
        data.map((item, index) =>(
          <h1 key={index}>{item.name}</h1>
        ))
      }
    </div>
  )
}

export default App
