import React, { useState, useEffect } from 'react';
import './Loading';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  // App Level State
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])


  // DATA URL
  const url = 'https://course-api.com/react-tours-project';

  //  Fetching the Data
  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch(url);
      const toursData = await response.json()
      setLoading(false)
      setTours(toursData)
      console.log(toursData)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Condition to check if "loading" state is true or not
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <>
      <Tours />
    </>
  )
}

export default App