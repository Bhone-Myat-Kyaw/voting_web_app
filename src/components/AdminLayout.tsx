import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { SunIcon } from "@heroicons/react/24/solid";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen">
        <Sidebar />
      </div>

      {/* Content */}
      <main className="flex-1 p-6 bg-clight-gray max-lg:ml-20 ml-64">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-cextra-dark-gray text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Admin Dashboard</h1>
            <p className="text-cdark-gray text-base font-normal leading-normal">Real-time monitoring and management</p>
          </div>
          <div className="items-center hidden gap-4 lg:flex">
            <button className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <SunIcon className='size-6 sm:size-7 text-cdark-gray'/>
            </button>
          </div>
        </div>

        <Outlet /> {/* Admin pages appear here */}
      </main>
    </div>
  );
}
