import { NavLink } from "react-router-dom";

export default function Friend({ friend }) {

    return (
        <>
            <div className="friend-profil-block">
                <div>
                    <img src={friend.avatar} alt="" className="sidebar-avatar-image" />
                </div>
                <div>
                    <h2>{friend.pseudo}</h2>
                </div>
            </div>
        </>
    )
}