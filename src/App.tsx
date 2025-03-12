import "@fontsource/ubuntu"
import "@fontsource/poppins"
import Router from './components/Router'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
      {
        localStorage.getItem("currentUser") && (
          <Header />
        )
      }

      <ToastContainer />

      <Router />
    </BrowserRouter>
  )
}

export default App