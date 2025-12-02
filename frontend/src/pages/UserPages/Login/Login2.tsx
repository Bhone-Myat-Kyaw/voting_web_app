import { useNavigate } from "react-router-dom";
import { voters } from "../../../Components/Texts/voterInfo";
import type { Voter } from "../../../Components/Texts/voterInfo";
import React, { useRef, useState } from "react";
import type { Variants } from "framer-motion";
import {motion} from "framer-motion"
import { useAuthContext } from "../../../Shared/Context/AuthConstant";
import { isLightMode } from "../../../helpers/checkTheme";
import { containerVariants, childVariants } from "../../../Shared/framerVariants";
import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";

interface FormError {
  general?: string;
  admissionID?: string;
  password?: string;
}

const Login = () => {
  const navigate = useNavigate();
    const [admissionid, setAdmissionid] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);


  // common styles 
  const darkField = "";

  // getting data from authContext
  const {login} = useAuthContext();



  // TODO: error - have to reload for login form to appears



// type InputEvent = React.ChangeEvent<HTMLInputElement>;
  type FormEvent = React.FormEvent<HTMLFormElement>;

  const formRef = useRef<HTMLFormElement>(null);
 


  async function submitFunction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

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

    

    // const hasUser = checkUsers(foundVoter);

    // if(hasUser === false) {
    //   return;
    // };
    
    
    
    // console.log(checkPassword(foundVoter, userPassword))

    // if(!checkPassword(foundVoter, userPassword)) {
    //   return;
    // };

    // login(foundVoter[0]) // store in local storage + context
    // return navigate("/vote", {state: foundVoter[0]})
  // }


  // custom styles
  const background = isLightMode? "bg-cwhite":"bg-dark-bg-base";
  const formStyle = isLightMode?"bg-cwhite" :"bg-dark-login-form-bg border-dark-card-border";
  const title = isLightMode? "text-cextra-dark-gray":"text-dark-text-primary";
  const darkFormLabel = "text-dark-text-primary";
  const darkInputField = "placeholder:text-cmedium-gray bg-dark-input-bg border-dark-input-border placeholder:text-dark-placeholder shadow-dark-border";
  const darkInputFocus = "focus-within:bg-dark-input-bg focus-within:border-dark-input-border"





  

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
        <motion.form ref={formRef} onSubmit={submitFunction} 
        
        className={`space-y-5 w-[95%] m-auto ${title}`}
        >
          <div className="flex flex-col items-start justify-center gap-2 
          ">
          <label htmlFor="name" className="font-heading-bold ">Admission ID</label>
          <input  
            type="text" 
            name="admissionid" 
            id="admissionid" 
            required 
            placeholder="Enter your admission ID"
            value={admissionid}
            onChange={(e)=> {
                setAdmissionid(e.target.value)
                setError('');
            }} 
            className={`border rounded-3xl p-3   w-full ${isLightMode? "":darkInputField} ${
                error ? 'border-red-500 shake' : ''}`}
            disabled={isLoading}
          />
          
          </div>

          <div className="flex flex-col items-start  justify-center gap-2">
            <label htmlFor="password" className="font-heading-bold">Password</label>
            <div className="w-full relative">
                <input
                 type={`${showPassword? "text": "password"}`} required 
                 name="password" 
                 id="password" 
                 value={password}
                 onChange={(e)=> {
                    setPassword(e.target.value);
                    setError(''); // Clear error when user starts typing
                 }}
                 placeholder="Enter your password" 
                 className={`border rounded-3xl p-3 w-full ${isLightMode? "":darkInputField} ${error ? 'border-red-500 shake': ""}`}
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

          
          <button type="submit" className="bg-primary p-3 w-full rounded-3xl text-cwhite font-button-bold mt-3 cursor-pointer">
            Login
          </button>
          
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Login;