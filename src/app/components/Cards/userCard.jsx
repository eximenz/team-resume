import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/logo192.png";

const UserCard = ({
    title = "Пример карточки участника",
    userId,
    header = "Заголовок",
    fio="Test User",
    content = "Несколько быстрых примеров текста для построения",
    footer = "Последнее обновление 3 мин. назад",
    borderColor = "success",
    textColor = "success"
}) => {

    return (
        <div className="col w-auto">
            <div
                className={`card border-${borderColor} h-auto m-3`}
                style={{ maxWidth: "18rem", minHeight: "50vh" }}
            >
                <div
                    className={`card-header bg-transparent border-${borderColor}`}
                >
                    <p className="card-header text-center">{header}</p>
                    <img
                        src={logo}
                        className="card-img-top img-fluid"
                        alt="Участник команды"
                    ></img>
                </div>

                <div className={`card-body text-${textColor}`}>
                    <h5 className="card-title">{title}<br/>{fio}</h5>
                    <p className="card-text">{content}</p>
                </div>
                <div
                    className={`card-footer bg-transparent text-center border-${borderColor}`}
                >
                    <small className="text-muted">{footer}</small>
                    {userId && (
                        <a
                            href={`/profile/${userId}`}
                            className="btn btn-primary m-3"
                        >
                            Перейти в профиль
                        </a>
                    )}
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
    header: PropTypes.string,
    footer: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string
};

export default UserCard;
