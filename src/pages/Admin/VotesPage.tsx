export default function VotesPage() {
  const kingCandidates = [
    { name: "Kyaw Gyi", rollNum: 1, image: "./images/image0.jpg", votes: 10},
    { name: "Zaw Gyi", rollNum: 2, image: "./images/image1.jpg", votes: 10},
    { name: "Maw Gyi", rollNum: 3, image: "./images/image2.jpg", votes: 10},
    { name: "Htaw Gyi", rollNum: 4, image: "./images/image3.jpg", votes: 10}
  ]
  const queenCandidates = [
    { name: "Kyaw Lay", rollNum: 11, image: "./images/image4.jpg", votes: 10},
    { name: "Zaw Lay", rollNum: 21, image: "./images/image5.jpg", votes: 10},
    { name: "Maw Lay", rollNum: 11, image: "./images/image6.jpg", votes: 10},
    { name: "Kyaw Lay", rollNum: 1, image: "./images/image7.jpg", votes: 10}
  ]

  return (
    <section className="relative min-h-screen">
      
      {/* Info */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        <div className="flex flex-col gap-2 p-6 border rounded-xl bg-cwhite border-clight-gray">
          <p className="text-cdark-gray text-base font-medium leading-normal">Total Voters</p>
          <p className="text-cextra-dark-gray tracking-light text-2xl font-bold leading-tight">1,234</p>
          <p className="text-green-500 text-sm font-medium leading-normal">+1.2%</p>
        </div>

        <div className="flex flex-col gap-2 p-6 border rounded-xl bg-cwhite border-clight-gray">
          <p className="text-cdark-gray text-base font-medium leading-normal">King Candidates</p>
          <p className="text-cextra-dark-gray tracking-light text-2xl font-bold leading-tight">1,234</p>
          <p className="text-green-500 text-sm font-medium leading-normal">+1.2%</p>
        </div>

        <div className="flex flex-col gap-2 p-6 border rounded-xl bg-cwhite border-clight-gray">
          <p className="text-cdark-gray text-base font-medium leading-normal">Queen Candidates</p>
          <p className="text-cextra-dark-gray tracking-light text-2xl font-bold leading-tight">1,234</p>
          <p className="text-green-500 text-sm font-medium leading-normal">+1.2%</p>
        </div>
      </div>

      {/* Live Vote Section */}
      <div className='mb-6'>
        <h1 className="text-cextra-dark-gray text-h1 font-black leading-tight tracking-[-0.033em]">Live Vote Counts</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-5">
          {/* King Section */}
          <div className=' rounded-2xl bg-cwhite border-clight-gray p-5'>
            <h1 className='text-cextra-dark-gray text-h2 font-bold'>King Candidates</h1>
            <ul className="mt-5">
              {
                kingCandidates.map((candidate, index) => (
                  <li key={index} className='flex items-start justify-between relative h-[75px] mt-4'>
                    <div className='w-[10%] relative'>
                      <img src={candidate.image} alt="" className='w-[65px] aspect-square flex items-center justify-center rounded-full object-cover'/>
                    </div>
                    <div className='flex flex-col items-start justify-center w-[60%] pl-15'>
                      <p className="text-h2 font-bold text-cextra-dark-gray">{candidate.name}</p>
                      <p className="text-sm text-cdark-gray">Roll Num: {candidate.rollNum}</p>
                    </div>
                    <p className="text-h2 font-bold text-cextra-dark-gray w-[40%] flex items-end justify-end pr-10">{candidate.votes} Votes</p>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Queen section */}
          <div className=' rounded-2xl bg-cwhite border-clight-gray p-5'>
            <h1 className='text-cextra-dark-gray text-h2 font-bold'>Queen Candidates</h1>
            <ul className="mt-5">
              {
                queenCandidates.map((candidate, index) => (
                  <li key={index} className='flex items-start justify-between relative h-[75px] mt-4'>
                    <div className='w-[10%] relative'>
                      <img src={candidate.image} alt="" className='w-[65px] aspect-square flex items-center justify-center rounded-full object-cover'/>
                    </div>
                    <div className='flex flex-col items-start justify-center w-[60%] pl-15'>
                      <p className="text-h2 font-bold text-cextra-dark-gray">{candidate.name}</p>
                      <p className="text-sm text-cdark-gray">Roll Num: {candidate.rollNum}</p>
                    </div>
                    <p className="text-h2 font-bold text-cextra-dark-gray w-[40%] flex items-end justify-end pr-10">{candidate.votes} Votes</p>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}