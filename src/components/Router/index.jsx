import { Route, Routes } from 'react-router-dom'
import Connexion from '../../Pages/Connexion'
import ListUsers from '../../Pages/Users'

const Router = () => {
  return (
    <Routes >
      <Route path="/*" element={<Connexion />} />
      
      {
        localStorage.getItem("currentUser") && (
          <>
            <Route path="/list-users/*" element={<ListUsers />} />
          </>
        )
      }

    </Routes>
  )
}

export default Router