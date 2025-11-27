import { UserCircleIcon, FolderIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-64 -translate-x-full transform bg-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 border-r border-slate-200">
      <div className="flex h-full flex-col justify-between p-4">
        {/* admin names */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">

            <div className="flex items-center justify-start gap-3 p-2">
              <UserCircleIcon className='size-12 text-black'/>

              <div className="flex flex-col">
                <h1 className="text-slate-800 text-body font-medium leading-normal">Admin Name</h1>
                <p className="text-slate-500 text-body-sm font-normal leading-normal">Administrator</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">

              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg color-primary" to={"/"}>
                <span className="material-symbols-outlined">
                  <FolderIcon className='size-7 text-primary'/>
                </span>
                <p className="text-body font-medium leading-normal">Vote Counts</p>
              </Link>

              <Link className="flex items-center gap-3 px-3 py-2 rounded-lg te color-primary" to={"/userManagement"}>
                <span className="material-symbols-outlined">
                  <UserGroupIcon className='size-7 text-primary'/>
                </span>
                <p className="text-body font-medium leading-normal">User Management</p>
              </Link>

            </nav>
          </div>
        </div>
      </div>
    </aside>
  )
}