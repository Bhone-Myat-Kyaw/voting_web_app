export default function Candidates({candidates, category}: {candidates: any, category: "male" | "female"}) {
  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-3 h-8 rounded-full ${category == 'male' ? 'bg-primary' : 'bg-pink-500'}`}></div>
        <h3 className="text-lg sm:text-xl font-bold text-cextra-dark-gray">{category == 'male' ? "King" : "Queen"} Candidates</h3>
      </div>
      
      <div className="space-y-4">
        {candidates.map((candidate: any, index:number) => (
          <div 
            key={candidate.studentid}
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors hover:shadow-light"
          >
            <div className="shrink-0">
              <div className="relative">
                <img 
                  src={candidate.students.image} 
                  alt={candidate.students.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-light"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                  {candidate.students.name}
                </p>
                {candidate.trend === "up" ? (
                  <span className="text-green-500 text-sm">↑</span>
                ) : (
                  <span className="text-red-500 text-sm">↓</span>
                )}
              </div>
              <p className="text-cdark-gray text-sm">Roll No: {candidate.students.rollnum}</p>
            </div>
            
            <div className="text-right">
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                {candidate.voteCount}
              </p>
              <p className="text-cdark-gray text-sm">Votes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}