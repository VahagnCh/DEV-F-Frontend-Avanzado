import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Secret from '@/pages/Secret'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import { useAuthContext } from '../hooks/useAuth'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/login' />}
      />
      <Route
        path='/secret'
        element={isAuth ? <Secret /> : <Navigate to='/login' />}
      />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
