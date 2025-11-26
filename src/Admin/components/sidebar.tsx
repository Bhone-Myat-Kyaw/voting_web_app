import { UserCircleIcon, Cog6ToothIcon, ChartBarIcon, FolderIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-64 -translate-x-full transform bg-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 border-r border-slate-200">
      <div className="flex h-full flex-col justify-between p-4">
        {/* admin names */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">

            <div className="flex gap-3 p-2">
              <UserCircleIcon className='size-8 text-black'/>

              <div className="flex flex-col">
                <h1 className="text-slate-800 text-base font-medium leading-normal">Admin Name</h1>
                <p className="text-slate-500 text-sm font-normal leading-normal">Administrator</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2">

              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined">
                  <FolderIcon className='size-6 text-black'/>
                </span>
                <p className="text-sm font-medium leading-normal">Vote Counts</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined">
                  <UserGroupIcon className='size-6 text-black'/>
                </span>
                <p className="text-sm font-medium leading-normal">User Management</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined">
                  <Cog6ToothIcon className='size-6 text-black'/>
                </span>
                <p className="text-sm font-medium leading-normal">Charts / Stats</p>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined">
                  <ChartBarIcon className='size-6 text-black'/>
                </span>
                <p className="text-sm font-medium leading-normal">Setting</p>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  )
}