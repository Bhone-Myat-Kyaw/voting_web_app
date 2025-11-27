export default function VotesPage() {
  const kingCandidates =[
    { 
      id: 1, 
      name: "Kyaw Gyi", 
      rollNum: 1, 
      image: "./images/image0.jpg", 
      votes: 1247,
      trend: "up"
    },
    { 
      id: 2, 
      name: "Zaw Gyi", 
      rollNum: 2, 
      image: "./images/image1.jpg", 
      votes: 892,
      trend: "up"
    },
    { 
      id: 3, 
      name: "Maw Gyi", 
      rollNum: 3, 
      image: "./images/image2.jpg", 
      votes: 756,
      trend: "down"
    },
    { 
      id: 4, 
      name: "Htaw Gyi", 
      rollNum: 4, 
      image: "./images/image3.jpg", 
      votes: 543,
      trend: "up"
    }
  ];

  const queenCandidates = [
    { 
      id: 11, 
      name: "Kyaw Lay", 
      rollNum: 11, 
      image: "./images/image4.jpg", 
      votes: 1342,
      trend: "up"
    },
    { 
      id: 21, 
      name: "Zaw Lay", 
      rollNum: 21, 
      image: "./images/image5.jpg", 
      votes: 987,
      trend: "up"
    },
    { 
      id: 31, 
      name: "Maw Lay", 
      rollNum: 31, 
      image: "./images/image6.jpg", 
      votes: 765,
      trend: "down"
    },
    { 
      id: 41, 
      name: "Htaw Lay", 
      rollNum: 41, 
      image: "./images/image7.jpg", 
      votes: 621,
      trend: "up"
    }
  ];


  const totalVoters = 5234;
  const kingCandidatesCount = kingCandidates.length;
  const queenCandidatesCount = queenCandidates.length;

  return (
    <section className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-normal transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cdark-gray text-sm font-medium">Total Voters</p>
              <p className="text-cextra-dark-gray text-2xl sm:text-3xl font-bold mt-1">{totalVoters.toLocaleString()}</p>
            </div>
            <div className="text-success bg-green-50 p-2 rounded-lg">
              <span className="text-sm font-semibold">+2.4%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-normal transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cdark-gray text-sm font-medium">King Candidates</p>
              <p className="text-cextra-dark-gray text-2xl sm:text-3xl font-bold mt-1">{kingCandidatesCount}</p>
            </div>
            <div className="text-primary bg-blue-50 p-2 rounded-lg">
              <span className="text-sm font-semibold">Active</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-normal transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cdark-gray text-sm font-medium">Queen Candidates</p>
              <p className="text-cextra-dark-gray text-2xl sm:text-3xl font-bold mt-1">{queenCandidatesCount}</p>
            </div>
            <div className="text-purple-500 bg-purple-50 p-2 rounded-lg">
              <span className="text-sm font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Vote Section */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-light overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-cextra-dark-gray">Live Vote Counts</h2>
          <p className="text-cdark-gray text-sm mt-1">Real-time updates every 3 seconds</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 divide-x-0 xl:divide-x divide-y xl:divide-y-0 divide-gray-200">
          {/* King Candidates */}
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-8 bg-primary rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-cextra-dark-gray">King Candidates</h3>
            </div>
            
            <div className="space-y-4">
              {kingCandidates.map((candidate, index) => (
                <div 
                  key={candidate.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors hover:shadow-light"
                >
                  <div className="shrink-0">
                    <div className="relative">
                      <img 
                        src={candidate.image} 
                        alt={candidate.name}
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
                        {candidate.name}
                      </p>
                      {candidate.trend === "up" ? (
                        <span className="text-green-500 text-sm">↑</span>
                      ) : (
                        <span className="text-red-500 text-sm">↓</span>
                      )}
                    </div>
                    <p className="text-cdark-gray text-sm">Roll No: {candidate.rollNum}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg sm:text-xl font-bold text-gray-900">
                      {candidate.votes.toLocaleString()}
                    </p>
                    <p className="text-cdark-gray text-sm">Votes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Queen Candidates */}
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-8 bg-pink-500 rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Queen Candidates</h3>
            </div>
            
            <div className="space-y-4">
              {queenCandidates.map((candidate, index) => (
                <div 
                  key={candidate.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-pink-300 transition-colors hover:shadow-light"
                >
                  <div className="shrink-0">
                    <div className="relative">
                      <img 
                        src={candidate.image} 
                        alt={candidate.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-light"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                        {candidate.name}
                      </p>
                      {candidate.trend === "up" ? (
                        <span className="text-green-500 text-sm">↑</span>
                      ) : (
                        <span className="text-red-500 text-sm">↓</span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">Roll No: {candidate.rollNum}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg sm:text-xl font-bold text-gray-900">
                      {candidate.votes.toLocaleString()}
                    </p>
                    <p className="text-gray-500 text-sm">Votes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}