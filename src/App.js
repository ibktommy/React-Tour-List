import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './App.css'

function App() {
  // App Level State
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  // DATA URL
  const url = 'https://course-api.com/react-tours-project';

  // Function to Delete A Chosen Tor Component
  function deleteTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  //  Fetching the Data
  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch(url);
      const toursData = await response.json()
      setLoading(false)
      setTours(toursData)
    } catch (error) {
      setLoading(true)
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
      <Tours tours={tours} deleteTour={deleteTour} />
    </>
  )
}

export default App