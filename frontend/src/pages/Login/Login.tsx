import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen bg-clight-gray flex items-center justify-center  text-center">
      
      <div className="p-8 w-[25%] lg:w-[30%]  h-3/5 bg-cwhite rounded-3xl shadow-normal space-y-4">
      <h2 className="text-h1-lg font-heading-bold mt-3">Login</h2>
      <form action="#" className="space-y-5 w-[95%] m-auto ">
        <div className="flex flex-col items-start justify-center gap-2
        ">
        <label htmlFor="name" className="font-heading-bold ">Admission Id</label>
        <input type="text" name="admissionId" id="admissionId" required placeholder="Enter your admission ID" className="border rounded-3xl p-3   placeholder:text-cmedium-gray w-full" />
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="font-heading-bold">Password</label>
          <input type="password" name="" id="" placeholder="Enter your password" className="border rounded-3xl p-3 w-full" />
        </div>

        <button type="button" onClick={()=> navigate("/vote")} className="bg-primary p-3 w-full rounded-3xl text-cwhite font-button-bold mt-3 cursor-pointer">
          Login
        </button>
        
      </form>
      </div>
    </section>
  );
};

export default Login;
