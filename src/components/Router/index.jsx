import { Route, Routes } from 'react-router-dom'
import Connexion from '../../Pages/Connexion'

const Router = () => {
  return (
    <Routes >
      <Route path="/*" element={<Connexion />} />
    </Routes>
  )
}

export default Router