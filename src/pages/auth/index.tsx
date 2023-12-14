import { useMutation } from "@tanstack/react-query"
import { mutationLogin } from "./mutation"
import { useNavigate } from "react-router"

const Auth = () => {
    const navigate=useNavigate()
    const { mutate } = useMutation({
      mutationKey: ["login"],
      mutationFn: mutationLogin,
      onSuccess: (data) => {
        localStorage.setItem("guest_session_id", data?.guest_session_id);
        navigate('/');
      },
    });
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      await mutate();
    };
    return(
    <main className="h-screen w-full bg-slate-200 flex flex-col gap-2 justify-center items-center ">
        <h1 className="text-xl text-slate-800 font-semibold font-serif ">Welcome! join by registering as a Guest below</h1>
      <form onSubmit={handleLogin}>
        <button className="w-24 py-1 text-center bg-purple-700 text-slate-100 rounded-md">Login</button>
      </form>
    </main>
  )
}

export default Auth
