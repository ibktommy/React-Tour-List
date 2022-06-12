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

  // Function to Delete A Chosen Tour Component
  function deleteTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // Condition to check if "loading" state is true or not
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // Condition to check if Tour-state is empty
  if (tours.length === 0) {
    return (
      <>
        <div className='w-full container mx-auto text-center mt-[5rem]'>
          <h2 className='font-bold text-4xl mb-6'>No Tours Left</h2>
          <button
            className='py-1 px-3 bg-blue-500 text-white rounded'
            onClick={fetchData}>
            Refresh
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Tours tours={tours} deleteTour={deleteTour} />
    </>
  )
}

export default App