export default function UserManagementPage() {
  const users = [
    {id: 101, name: "Kyaw Gyi", role: "student"},
    {id: 102, name: "Kyaw Lay", role: "admin"},
    {id: 103, name: "May Gyi", role: "student"},
    {id: 104, name: "May Lay", role: "student"},
  ]

  return (
    <section>
      <div className=' rounded-2xl bg-cwhite border-clight-gray p-5'>
        <h1 className='text-cextra-dark-gray text-h2 font-bold'>King Candidates</h1>

        <div className="w-full overflow-hidden border rounded-xl border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-slate-500 bg-slate-50">
                <tr>
                  <th className="px-6 py-3" scope="column">Student Id</th>
                  <th className="px-6 py-3" scope="column">Full Name</th>
                  <th className="px-6 py-3" scope="column">Role</th>
                  <th className="px-6 py-3 text-right" scope="column">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {
                  users.map((user, index) => (
                    <tr className="hover:bg-slate-50" key={index}>
                      <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{user.id}</td>
                      <td className="px-6 py-4 ">{user.name}</td>
                      <td className="px-6 py-4 ">{user.role}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="px-3 py-1.5 text-body-sm font-heading text-primary bg-primary/10 rounded-md hover:bg-primary/20">Change Role</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}