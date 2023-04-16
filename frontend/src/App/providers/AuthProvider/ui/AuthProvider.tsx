// import { useEffect, FC, createContext } from 'react'
// import { useSelector } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router'

// interface IAuthProvider {
//   children: any
// }

// export const TokenContext = createContext<string | null>(null)

// export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
//   const navigate = useNavigate()
//   const location = useLocation()

//   const role = useSelector(getUserRole)

//   useEffect(() => {
//     authCheck(location.pathname)
//   }, [])

//   const authCheck = (url: string) => {

//   }

//   return (
//       <AuthProvider>{children}</AuthProvider>
//   )
// }
