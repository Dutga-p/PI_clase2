import './Heart.css'
import { Outlet, useLocation } from 'react-router'

export const Heart = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  return (
    <div>
      <h1>Enfermedades del corazón</h1>
      <p>{userData?.displayName}</p>
      <Outlet/>
    </div>
  )
}
