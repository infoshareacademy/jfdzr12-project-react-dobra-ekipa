import { auth } from "./api/firebase";
import Slogan from './Slogan_';
import Price from './Price';
import PriceList from './Price-list';
import Gallery from './Gallery';
import { NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";


export const Home = ({user}) => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
          console.error('Error during logout:', error);
        });
      };
    


return (
<>
    <h1>Home</h1>
    <h1>{auth?.currentUser?.email}</h1>
    <NavLink to="/login">Sign in</NavLink>
    <NavLink to="/register">Sign up</NavLink>   
    {/* <NavLink to="/basket">Basket</NavLink>    */}
    { auth?.currentUser?.email && <button onClick={handleSignOut} style={{ textDecoration: "underline"}}>Log out</button>}
    <Slogan></Slogan>
    <Price></Price> 
    <PriceList></PriceList>
    { auth?.currentUser?.email && <Gallery></Gallery>}
 </>
)
}