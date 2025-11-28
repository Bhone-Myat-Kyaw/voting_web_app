import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className=" w-full  fixed top-0 z-30 backdrop-blur-lg  py-5">
        <div className="w-5/6 m-auto flex justify-between items-center">
          {/* left  */}
          <img src="" alt="" />
          {/* right */}
          <div className="flex justify-between items-center gap-4">
            <ul className="list-none flex justify-around items-center gap-5 font-heading cursor-pointer ">
              <li>
                <Link
                  to="historyName"
                  smooth={true}
                  duration={100}
                  offset={-100}
                >
                  History
                </Link>
              </li>
              <li>Major Info</li>
              <li>User Manual</li>
              <li>Memorable Things</li>
            </ul>
            <button
              className="bg-primary text-cwhite py-3 px-5 rounded-2xl font-button-bold text-button cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
