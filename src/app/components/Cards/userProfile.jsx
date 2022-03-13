import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
    getUserById
} from "../../storage/users";
import Accordion from "../accordeon";
import Slider from "../slider";

const UserCard = ({
    title = "Пример карточки участника",
    userId,
    fio = "Test User",
    content = "Несколько быстрых примеров текста для построения",
    footer = "Последнее обновление было ",
    borderColor = "success",
    textColor = "success"
}) => {

    const currentUser = useSelector(getUserById(userId));

    return (
        <div
            className={`card border-${borderColor} m-3`}
            style={{ maxWidth: "90%", maxHeight: "90%" }}
        >
            <div className="row g-0">
                <div
                    className={`card-header col-md-3 bg-transparent border-${borderColor}`}
                >
                    <h4 className="card-header text-center">
                        {currentUser.userName}
                    </h4>

                    <img
                        src={currentUser.photo}
                        className="card-img-top img-fluid m-3"
                        alt="Участник команды"
                    ></img>
                </div>

                <div className={`card-body col-md-3 text-${textColor}`}>
                    <Accordion  currentUser={currentUser}/>
                </div>
                <div
                    className={`card-footer col-md-6 bg-transparent text-center border-${borderColor}`}
                >
                    <Slider currentUser={currentUser}/>
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    title: PropTypes.string,
    userId: PropTypes.number,
    fio: PropTypes.string,
    content: PropTypes.string,
    footer: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string
};

export default UserCard;
