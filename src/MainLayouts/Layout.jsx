import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner";
import './Activelink.css'
const Layout = () => {
    const navigation = useNavigation();
    
    
    return (
        <div>
          <section className="flex justify-between px-10 shadow-md py-7 sticky left-0 z-30 bg-gray-400 top-0">
          <div>
                <h2 className="font-bold text-4xl">Amajon</h2>
            </div>
          <nav className="text-xl font-bold">
            <ul className="flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            </ul>
        </nav>
    </section>
    {
       navigation.state ==='loading' ? <Spinner></Spinner> : <div className="min-h-screen"><Outlet></Outlet></div>
    }
    <Footer></Footer>
</div>
        
    );
};

export default Layout;