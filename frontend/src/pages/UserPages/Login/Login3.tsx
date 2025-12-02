import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [admissionid, setAdmissionid] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function submitFunction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    console.log(import.meta.env.VITE_SERVER)

    const id = admissionid.split('/');
    if (id.length == 2 && !Number.isNaN(id[0]) && id[0].length == 2 && !Number.isNaN(id[1]) && id[1].length == 5) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER}/auth/login`,
          { admissionid, password },
          { withCredentials: true }
        );
        
        console.log(response);
        if (response.status == 200) {
          //console.log(response.data.redirectUrl);
          navigate(response.data.redirectUrl);
        } else {
          setError(response.data);
        }
      } catch (error: any) {
        setError("Invalid credentials");
        //console.error(error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      setError("Please enter valid admission id.");
    }
  }

  return (
    <section className="w-full h-screen bg-clight-gray flex items-center justify-center text-center">
      <div className="p-8 w-110 max-[500px]:w-[90%] max-[500px]:px-2 h-auto bg-cwhite rounded-3xl shadow-normal space-y-4 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-h1-lg font-heading-bold mt-3 text-primary transition-colors duration-300">
          Login
        </h2>

        <form action="#" className="space-y-5 w-[95%] m-auto" onSubmit={submitFunction}>
          {/* Admission ID Input */}
          <div className="flex flex-col items-start justify-center gap-2">
            <label htmlFor="admissionid" className="font-heading-bold text-gray-700">
              Admission Id
            </label>
            <input 
              type="text" 
              name="admissionid"
              id="admissionid"
              value={admissionid}
              onChange={(e) => {
                setAdmissionid(e.target.value);
                setError(''); // Clear error when user starts typing
              }}
              required 
              placeholder="Enter your admission ID" 
              className={`border rounded-3xl p-3 placeholder:text-cmedium-gray w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sa
              }`}
              disabled={isLoading}
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col items-start justify-center gap-2 relative">
            <label htmlFor="password" className="font-heading-bold text-cdark-gray">
              Password
            </label>
            <div className="relative w-full">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(''); // Clear error when user starts typing
                }}
                required
                placeholder="Enter your password" 
                className={`border rounded-3xl p-3 w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-12 `}
                disabled={isLoading}
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-full flex items-center transition-transform duration-200 hover:scale-110 disabled:opacity-50"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl transition-all duration-300 animate-fadeIn">
              <div className="flex items-center justify-center space-x-2">
                <ExclamationCircleIcon className="text-red-700 size-5" />
                <span className="text-sm font-medium">{error}</span>
              </div>
            </div>
          )}


          {/* Login Button */}
          <button
            type="submit"
            className={`p-3 w-full rounded-3xl text-cwhite font-button-bold mt-3 transition-all duration-300 transform bg-primary hover:bg-primary-dark cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg'
            } ${isLoading ? 'opacity-80 cursor-wait' : ''}`}
          >
            <div className="flex items-center justify-center space-x-2">
              {isLoading && (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <span>{isLoading ? 'Logging in...' : 'Login'}</span>
            </div>
          </button>
        </form>
      </div>

    </section>
  );
};






export default Login;
