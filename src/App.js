import React, { useState } from 'react';
import './Loading';
import Loading from './Loading';

function App() {
  // DATA URL
  const url = 'https://course-api.com/react-tours-project';

  // App Level State
  const [loading, setLoading] = useState(true)

  // Condition to chech if "loading" state is true or not
  if (loading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <>
      <h2>Tours Web App</h2>
    </>
  )
}

export default App