import { useState } from 'react';
import { MyRoutes } from './routers/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyRoutes />
  )
}

export default App
