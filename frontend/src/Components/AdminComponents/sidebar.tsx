import { 
  UserCircleIcon, 
  FolderIcon, 
  UserGroupIcon
} from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navigationItems = [
    {
      name: "Vote Counts",
      path: "/admin",
      icon: FolderIcon,
      description: "Live voting results"
    },
    {
      name: "User Management",
      path: "/admin/userManagement",
      icon: UserGroupIcon,
      description: "Manage users & roles"
    }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
      <aside className={`
        h-screen z-50 transform bg-cwhite shadow-xl transition-all duration-300 ease-in-out
        lg:relative lg:z-30
        lg:w-64 w-20
        lg:translate-x-0
      `}>
        <div className="flex h-full flex-col">

          {/* Admin Profile */}
          <div className={`p-4 border-b border-clight-gray lg:px-2`}>
            <div className={`flex items-center gap-3 lg:justify-center`}>
              <div className="relative shrink-0">
                <UserCircleIcon className='w-12 h-12 text-clight-gray' />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-cwhite"></div>
              </div>

              <div className="min-w-0 flex-1 max-lg:hidden">
                <h2 className="text-cextra-dark-gray font-semibold truncate">Sarah Johnson</h2>
                <p className="text-cdark-gray text-sm truncate">Administrator</p>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group lg:justify-center lg:px-2
                    ${active 
                      ? 'bg-blue-50 border border-blue-100 text-primary shadow-sm' 
                      : 'text-cdark-gray hover:bg-gray-50 hover:text-cextra-dark-gray border border-transparent'
                    }
                  `}
                >
                  <div className={`relative shrink-0 ${active ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    <Icon className="w-6 h-6" />
                    {active && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                  
                  
                    <div className="min-w-0 flex-1 max-lg:hidden">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      <p className="text-xs text-cdark-gray truncate">{item.description}</p>
                    </div>
                </Link>
              );
            })}
          </nav>

        </div>
      </aside>



  );
}