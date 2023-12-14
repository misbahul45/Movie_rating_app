import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const isLoggedIn=localStorage.getItem("guest_session_id")!==null;
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem("guest_session_id")
    navigate('/auth')
  }

  if(localStorage.getItem("guest_session_id")===null){
    return <Navigate to="/auth" />
  }

  return (
    <header className="fixed top-0 left-0 w-full py-2 flex justify-between items-center px-7 bg-gray-100">
        <div className="flex items-center gap-3">
            <button className="py-1 px-2 border-l-2 border-r-2">
               <Link className="text-xl font-semibold text-slate-600" to={'/'}>Home</Link>
            </button>
            <button className="py-1 px-2 border-l-2 border-r-2">
               <Link className="text-xl font-semibold text-slate-600" to={'/rated'}>Rated</Link>
            </button>
        </div>
        {
          !isLoggedIn&&
          <button className="py-1 px-2 border-l-2 border-r-2">
              <Link className="text-xl font-semibold text-slate-600" to={'/auth'}>Login</Link>
          </button>
        }
        {
          isLoggedIn&&
          <button onClick={handleLogout} className="py-2 px-5  bg-red-500 text-xl rounded-xl font-semibold text-slate-200">
            Logout
         </button>
        }
    </header>
  )
}

export default Navbar
