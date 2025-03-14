import { Route, Routes } from 'react-router-dom'
import Connexion from '../Pages/Connexion'
import User from '../Pages/Users'
import Parametrage from '../Pages/Parametrage'

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
            <Route
              path="/parametrage/*"
              element={<Parametrage />}
            />
          </>
        )
      }

    </Routes>
  )
}

export default Router