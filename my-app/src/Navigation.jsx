import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import {auth} from "../api/firebase"

// eslint-disable-next-line react/prop-types
export const Navigation = ({ user}) => (
  <nav>
    <div>{auth?.currentUser?.email}</div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
     {user && <li onClick={() => {signOut(auth)}} style={{color: "red", textDecoration: "underline", cursor: "pointer"}}>
        Wyloguj sie
      </li>}
      {!user && <><li>
        <NavLink to="auth/login">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="auth/register">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="auth/forgot-password">Basket</NavLink>
      </li></>}
      {user && <li>
        <NavLink to="admin">Panel admina</NavLink>
      </li>}
    </ul>
  </nav>
)