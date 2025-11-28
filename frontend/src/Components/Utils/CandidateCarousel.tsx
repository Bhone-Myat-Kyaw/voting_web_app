import {useState} from 'react'
import {Button} from "flowbite-react"
// import { candidates } from '../Texts/candidatesInfo'
import type { Candidate } from '../Texts/candidatesInfo'

interface CandidateProps {
  candidates : Candidate[];
  onVoteClick: () => void;
}


const CandidateCarousel = ({candidates, onVoteClick}: CandidateProps) => {
  const [index, setIndex] = useState(0);

  const lessThan3 = "justify-around";

  // show 3 on desktop, 1 on mobile
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 3;

  const maxIndex = candidates.length - itemsPerSlide;

  const next = () => {
    setIndex((prev: number) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prev = () => {
    setIndex((prev: number) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <div className="relative max-w-6xl mx-auto mt-8 px-6 select-none">
      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
      >
        ▶
      </button>

      <div className='overflow-hidden'>

        <div className={`flex  transition-transform duration-500 px-10 ${candidates.length < 3? lessThan3 : ""}`} style={{
            transform: `translateX(-${(index * 100) / itemsPerSlide}%)`,
          }}>

          {candidates.map((candidate) => (
<div key={candidate.id}
            
            className="flex justify-center px-4 py-6"
          >
             
            <div className="bg-white rounded-2xl shadow-md w-80 overflow-hidden">
              <img
                src={"../../assets/STILLNESS.png"}
                alt={"name"}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {"Engineering"} | {"electronic engineer"}
                </p>

                <Button
                  className="w-full mt-4"
                  color="blue"
                  onClick={onVoteClick}
                >
                  Vote
                </Button>
              </div>
            </div>
          </div> 
          ))}

        </div>
      </div>

      

      
        
    </div>
       
    </div>
    
  )
}

export default CandidateCarousel