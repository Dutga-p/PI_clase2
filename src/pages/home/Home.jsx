import React, { useCallback } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(()=>{
    navigate('/corazon', {
      state:{userData: {displayName: 'David Ordoñez'}},
    });
  }, [navigate]);
  return (
    <div>
      <h1>Inicio</h1>
      {/* <button onClick={()=>navigate('/corazon')}>Ver mas enfermedades</button> */}
      <button onClick={handleClick}>Ver mas enfermedades</button>
    </div>
  )
}
export default Home;