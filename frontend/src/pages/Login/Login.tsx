import React from "react";

const Login = () => {
  return (
    <section className="w-full h-screen bg-clight-gray flex items-center ">
      <div className=" m-auto">
        <div>
          <form action="">
            <label htmlFor="admissionId">Admission Id</label>
            <input type="number" name="admissionId" id="admissionID" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
