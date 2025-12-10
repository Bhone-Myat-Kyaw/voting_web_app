import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/AdminComponents/sidebar";
import { ArrowRightEndOnRectangleIcon, SunIcon } from "@heroicons/react/24/solid";
import { useUser } from "../../hooks/useUser";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";


export default function AdminLayout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser();

  async function logoutFunction() {
    queryClient.clear();

    try {
      const res = await axios.post(`api/auth/logout`, {}, { withCredentials: true });

      if (res.status == 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen relative">
      <div className="fixed top-0 left-0 h-screen">
        <Sidebar />
      </div>

      <main className="flex-1 p-6 bg-clight-gray max-lg:ml-20 ml-64">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-cextra-dark-gray text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
              Admin Dashboard
            </h1>
            <p className="text-cdark-gray text-base font-normal leading-normal">
              Welcome, {user?.name} {/* Now safe to access user */}
            </p>
          </div>
          <div className="items-center hidden gap-4 lg:flex">
            <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <ArrowRightEndOnRectangleIcon className="size-6 sm:size-7 text-cdark-gray" onClick={logoutFunction}/>
            </button>
            <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <SunIcon className='size-6 sm:size-7 text-cdark-gray'/>
            </button>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}