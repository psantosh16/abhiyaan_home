import "./Button.css";
import { Link } from "react-router-dom";

const Teams = () => {
    return (
        <div className="bg-black z-10 flex flex-col items-center justify-center gap-4  pt-16" id="teams">
            <h1 className="text-6xl text-white m-2 font-bold">Teams</h1>
            <Link to="/web-team" className="btnnn p-4">Web Development Team</Link>
            <Link to="/Studentcouncil" className="btnnn p-4" id="ssbtn">Student Council Team</Link>
        </div>
    );
};

export default Teams;
