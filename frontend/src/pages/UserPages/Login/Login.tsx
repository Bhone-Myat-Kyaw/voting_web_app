import { useNavigate } from "react-router-dom";
// import type { Voter } from "../../../Shared/Types";
import React, { useState } from "react";
import {motion} from "framer-motion"
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";
import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";

// interface FormError {
//   general?: string;
//   admissionID?: string;
//   password?: string;
// }

const Login = () => {
  const navigate = useNavigate();
  const [admissionid, setAdmissionid] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);



  // common styles 
  // const darkField = "";
  const focusField = "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";
    // custom styles
  const background = isLightMode? "bg-cwhite":"bg-dark-bg-base";
  const formStyle = isLightMode?"bg-cwhite" :"bg-dark-login-form-bg border-dark-card-border";
  const title = isLightMode? "text-cextra-dark-gray":"text-dark-text-primary";
  // const darkFormLabel = "text-dark-text-primary";
  const darkInputField = "placeholder:text-cmedium-gray bg-dark-input-bg border-dark-input-border placeholder:text-dark-placeholder shadow-dark-border";
  // const darkInputFocus = "focus-within:bg-dark-input-bg focus-within:border-dark-input-border"

  // getting data from authContext
  // const {login} = useAuthContext();


  // TODO: error - have to reload for login form to appears



// type InputEvent = React.ChangeEvent<HTMLInputElement>;
  // type FormEvent = React.FormEvent<HTMLFormElement>;

  
  




  async function submitFunction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    // console.log(import.meta.env.VITE_SERVER)

    const id = admissionid.split('/');
    if (id.length == 2 && !Number.isNaN(id[0]) && id[0].length == 2 && !Number.isNaN(id[1]) && id[1].length == 5) {
      try {
        console.log("Trying post method")
        const response = await axios.post(
          `api/auth/login`,
          { admissionid, password },
          { withCredentials: true }
        );
        
        console.log(response);
        if (response.status == 200) {
          console.log(response.data.redirectUrl);
          navigate(response.data.redirectUrl);
        } else {
          setError(response.data);
          console.log("error statsu not 200=",error)
        }
      } catch (error: any) {
        setError("Invalid credentials");
        console.error(error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      setError("Please enter valid admission id.");
    }
  }  

  return (
    <motion.section className={`w-full h-screen ${background}  flex items-center justify-center  text-center`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
    >
      
      <motion.div className={`p-8 min-w-sm w-md max-w-lg h-auto lg:h-3/5 ${formStyle} rounded-3xl shadow-normal space-y-4 `}
      variants={childVariants}
      >
        <motion.h2 className={`text-h1-lg font-heading-bold mt-3 ${title} `}
        >Login</motion.h2>
        <form onSubmit={submitFunction} 
        autoComplete="off"
        className={`space-y-5 w-[95%] m-auto ${title}`}
        >
          <div className="flex flex-col items-start justify-center gap-2 
          ">
          <label htmlFor="name" className="font-heading-bold ">Admission ID</label>
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
           className={`border rounded-3xl p-3   w-full ${isLightMode? "":darkInputField} ${
                  error ? 'border-red-500 shake' : 'border-gray-300'
                } ${focusField}`}
            disabled={isLoading}
          />
          </div>

          <div className="flex flex-col items-start justify-center gap-2">
            <label htmlFor="password" className="font-heading-bold">Password</label>
            <div className="w-full relative">
              <input 
                name="password" 
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(''); // Clear error when user starts typing
                }}
               type={`${showPassword? "text": "password"}`} 
               required 
               placeholder="Enter your password" 
               className={`border rounded-3xl p-3 w-full ${isLightMode? "":darkInputField} ${
                  error ? 'border-red-500 shake' : 'border-gray-300'
                } ${focusField}`}
               disabled={isLoading}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-full flex items-center transition-transform duration-200 hover:scale-110 disabled:opacity-50"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {!showPassword ? (
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

          
          <button type="submit" className="bg-primary p-3 w-full rounded-3xl text-cwhite font-button-bold mt-3 cursor-pointer">
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
      </motion.div>
    </motion.section>
  );
};

export default Login;
