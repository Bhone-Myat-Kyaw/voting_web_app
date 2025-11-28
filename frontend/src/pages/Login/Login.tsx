import { useNavigate } from "react-router-dom";
import { voters } from "../../Components/Texts/voterInfo";
import React, { useRef, useState } from "react";

interface FormError {
  general?: string;
  admissionID?: string;
  password?: string;
}

const Login = () => {
// type InputEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

  const formRef = useRef<HTMLFormElement>(null);
  const admissionRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  

  const [errorMsg, setErrorMsg] = useState<FormError>({})

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // clear all previous error for new submit click
    setErrorMsg({});

    if (!admissionRef.current && !passwordRef.current) {
      console.log("General error block got executed")
      if(admissionRef.current.value == '') {
        setErrorMsg({admissionID: "This field is required"})
      } else {
        setErrorMsg({password: "This field is required"})
      }
      return;
    }

    const userAdmissionID = admissionRef.current.value;
    const userPassword = Number(passwordRef.current.value);
    console.log("userAdmissionID=", userAdmissionID)

    // filter returns an array
    const foundVoter = voters.filter(voter => voter.admissionID == userAdmissionID)
    //  since the returned array contains only on element(object),
    //  we will retrieve that with index [0]
    console.log(foundVoter)
    if(foundVoter.length == 0) {
      setErrorMsg({admissionID: "User Not Found. Check your admission ID."})
      return;
    };
    
    if (foundVoter[0].password != userPassword) {
      setErrorMsg({password: "Incorrect Password."})
      return
    }
    return navigate("/vote", {state: foundVoter[0]})
  }



  

  return (
    <section className="w-full h-screen bg-clight-gray flex items-center justify-center  text-center">
      
      <div className="p-8 w-[25%] lg:w-[30%]  h-3/5 bg-cwhite rounded-3xl shadow-normal space-y-4">
      <h2 className="text-h1-lg font-heading-bold mt-3">Login</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 w-[95%] m-auto ">
        <div className="flex flex-col items-start justify-center gap-2
        ">
        <label htmlFor="name" className="font-heading-bold ">Admission ID</label>
        <input ref={admissionRef} type="text" name="admissionId" id="admissionId" required placeholder="Enter your admission ID" className="border rounded-3xl p-3   placeholder:text-cmedium-gray w-full"
         />
         <span className="text-small ml-2 text-red-400">{errorMsg.admissionID}</span>
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="password" className="font-heading-bold">Password</label>
          <input ref={passwordRef} type="password" required name="password" id="password" placeholder="Enter your password" className="border rounded-3xl p-3 w-full" />
          <span className="text-small ml-2 text-red-400">{errorMsg.password}</span>
        </div>

        
        <button type="submit" className="bg-primary p-3 w-full rounded-3xl text-cwhite font-button-bold mt-3 cursor-pointer">
          Login
        </button>
        
      </form>
      </div>
    </section>
  );
};

export default Login;
