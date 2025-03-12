import { Route, Routes } from 'react-router-dom'
import Connexion from '../../Pages/Connexion'
import User from '../../Pages/Users'

const Router = () => {
  return (
    <Routes >
      <Route path="/*" element={<Connexion />} />

      {
        localStorage.getItem("currentUser") && (
          <>
            <Route
              path="/users/*"
              element={<User />}
            />
          </>
        )
      }

    </Routes>
  )
}

export default Router