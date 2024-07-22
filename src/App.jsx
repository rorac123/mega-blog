import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import ReactLoading from "react-loading";
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between '>
      <div className='w-full'>
        <Header />
        <main className=''>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    
    <div className="flex items-center justify-center h-screen bg-grey-900">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#03fc4e"}
        height={150}
        width={150}
      />
    </div>
    
)
}

export default App
