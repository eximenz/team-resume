import React from "react";
import { useParams } from "react-router-dom";
import GroupCard from "../components/Cards/groupCard";

const Profile = () => {
    const params = useParams();
    const isInProfile = params.userId && params.userId > 0 ? true : false;

    return (
        <>
            {isInProfile?<h2>Профиль участника</h2>:<h2>Страница карточек участников</h2>}
            <GroupCard  />
        </>
    );
};

export default Profile;
