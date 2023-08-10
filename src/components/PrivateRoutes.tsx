import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { Token } from "../Interfaces";
import jwtDecode from "jwt-decode";


export const PrivateRoutes = () => {
  const { isAuth } = useAuthStore()

  return (
    isAuth ? <Outlet /> : <Navigate to='/login' />
  )
}

export const AdminPrivateRoutes = () => {
  const token: string = useAuthStore.getState().access
  const tokenDecoded: Token = jwtDecode(token)
  const isAdmin = tokenDecoded?.is_staff

  return (
    isAdmin ? <Outlet /> : <Navigate to='/' />
  )
}
