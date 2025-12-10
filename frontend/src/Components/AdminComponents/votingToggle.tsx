import { useEffect, useState } from "react";
import axios from "axios";

export default function VotingToggleWithConfirm() {
  const [isVotingOpen, setIsVotingOpen] = useState<any>(null);
  const [pendingValue, setPendingValue] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);

  console.log(pendingValue);

  useEffect(() => {
    async function fetchFunction() {
      const res = await axios.get(`${import.meta.env}/admin/getVotingStatus`, { withCredentials: true });
      setIsVotingOpen(res.data.isVotingOpen);
    }

    fetchFunction();
  }, []);

  const handleToggleClick = () => {
    setPendingValue(!isVotingOpen);
    setShowModal(true);
  };

  const confirmChange = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER}/admin/setVotingStatus`,
        { status: !isVotingOpen },
        { withCredentials: true }
      );
      console.log("confirm pending value=", pendingValue)

      setIsVotingOpen(pendingValue!);
    } catch (err) {
      console.error("Failed to update voting status", err);
      alert("Failed to update status. Please try again.");
    }
    setShowModal(false);
  };

  const cancelChange = () => {
    setPendingValue(null);
    setShowModal(false);
  };

  return (
    <div>
      {/* Toggle Switch */}
      <label className="flex items-center gap-3 cursor-pointer">
        <span className="text-xl font-semibold">
          Voting: {isVotingOpen ? "OPEN" : "CLOSED"}
        </span>

        <div
          onClick={handleToggleClick}
          className={`w-14 h-7 flex items-center rounded-full p-1 transition 
            ${isVotingOpen ? "bg-green-500" : "bg-gray-400"}`}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform transition 
              ${isVotingOpen ? "translate-x-7" : ""}`}
          ></div>
        </div>
      </label>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Are you sure?</h2>

            <p className="mb-4">
              {pendingValue
                ? "This will OPEN voting. Students will be able to vote."
                : "This will CLOSE voting. No more votes can be submitted."}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelChange}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={confirmChange}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
              >
                Yes, Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}