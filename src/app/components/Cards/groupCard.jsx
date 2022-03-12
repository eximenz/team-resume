import React from "react";
import { useParams } from "react-router-dom";
import UserCard from "./userCard";
import { useSelector } from "react-redux";
import { getUsers, getUserById } from "../../storage/users";

const GroupCard = () => {
    const params = useParams();
    const currentUser = useSelector(getUserById(Number(params.userId)));
    console.log(currentUser);
    const users = useSelector(getUsers());

    if (
        params.userId &&
        Number(params.userId) >= 1 &&
        Number(params.userId) <= 4
    ) {
        
        return (
            <>
                <div className="row row-cols-1 row-cols-md-1 mt-3 g-0 justify-content-center align-content-center">
                    <UserCard
                        title="Пример карточки"
                        header={`Заголовок ${params.userId}`}
                        fio={currentUser.userName}
                        content="Несколько быстрых примеров текста для построения"
                        footer="Последнее обновление 3 мин. назад"
                        borderColor="success"
                        textColor="success"
                    />
                </div>
            </>
        );
    }  
    return (
        <>
            <div className="row row-cols-2 row-cols-md-4 mt-3 g-4 justify-content-around">
                {users.map((user) => {
                    return (
                        <UserCard
                            key={user._id}
                            title="Карточка участника"
                            header={`Заголовок ${user._id}`}
                            fio={user.userName}
                            userId={user._id}
                            content="Несколько быстрых примеров текста для построения"
                            footer="Последнее обновление 3 мин. назад"
                            borderColor={user.color}
                            textColor={user.color}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default GroupCard;
