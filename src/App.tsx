import "@fontsource/ubuntu"
import "@fontsource/poppins"
import Router from './components/Router'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <ToastContainer />

      <Router />
    </BrowserRouter>
  )
}

export default App