import axios from "axios";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Candidates from "../../../Components/AdminComponents/Candidates";
import VotingToggleWithConfirm from "../../../Components/AdminComponents/votingToggle";
function VotesPage() {
  const { data: candidates, isLoading: candidateIsLoading } = useQuery({
    queryKey: ["candidates"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/vote/selectCandidates`, { withCredentials: true });
      return res.data.data;
    },
    staleTime: Infinity
  });

  const { data: votes, isLoading: votesIsLoading} = useQuery({
    queryKey: ["votes"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/vote/countVotes`, { withCredentials: true });
      return res.data.votes;
    },
    refetchInterval: 10 * 1000,
    placeholderData: keepPreviousData
  });

  if (candidateIsLoading || votesIsLoading) {
    return <div className="flex items-center justify-center">Loading...</div>
  }

  let totalVoters = 0;

  const voteMap = new Map();
  votes.forEach((v: any) => {
    totalVoters += v.vote_count;
    voteMap.set(v.candidateid, v.vote_count);
  });

  // Step 2: Combine
  const combinedCandidates = candidates.map((candidate: any) => {
    const newVotes = voteMap.get(candidate.id) || 0;

    return ({
      ...candidate,
      voteCount: newVotes
    })
  });

  // Step 3: Separate king/queen
  const kingCandidates = combinedCandidates
    .filter((c: any) => c.students.gender === "male")
    .sort((a: any, b: any) => b.voteCount - a.voteCount);

  const queenCandidates = combinedCandidates
    .filter((c: any) => c.students.gender === "female")
    .sort((a:any, b:any) => b.voteCount - a.voteCount);

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
              <p className="text-cextra-dark-gray text-2xl sm:text-3xl font-bold mt-1">{kingCandidates.length}</p>
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
              <p className="text-cextra-dark-gray text-2xl sm:text-3xl font-bold mt-1">{queenCandidates.length}</p>
            </div>
            <div className="text-purple-500 bg-purple-50 p-2 rounded-lg">
              <span className="text-sm font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Vote Section */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-light overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-gray-200 flex items-start justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cextra-dark-gray">Live Vote Counts</h2>
            <p className="text-cdark-gray text-sm mt-1">Real-time updates every 10 seconds</p>
          </div>

          <VotingToggleWithConfirm />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 divide-x-0 xl:divide-x divide-y xl:divide-y-0 divide-gray-200">
          {/* King Candidates */}
          <Candidates candidates={kingCandidates} category="male" />
        
          {/* Queen Candidates */}
          <Candidates candidates={queenCandidates} category="female"/>
        </div>
      </div>
    </section>
  );
}

export default VotesPage;