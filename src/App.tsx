import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoutes, AdminPrivateRoutes } from "./components/PrivateRoutes"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Admin from "./pages/Admin"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route element={<PrivateRoutes/>}>
            <Route path="admin" element={<AdminPrivateRoutes />}>
              <Route index element={<Admin />} />
            </Route>

          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
