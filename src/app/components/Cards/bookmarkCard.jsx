import React from "react";
import UserCard from "./userCard";
import { getBookMarkUsers } from "../../storage/users";
import { useSelector } from "react-redux";

const BookMarkCard = () => {

    const bookmarkUsers = useSelector(getBookMarkUsers());
    return (
        <>
            <div className="row row-cols-2 row-cols-md-4 mt-3 g-4 justify-content-around text-left">
                {bookmarkUsers.length > 0 &&
                    bookmarkUsers.map((user) => {
                        return (
                            <UserCard
                                key={user._id}
                                title="Карточка участника"
                                header={`Заголовок ${user._id}`}
                                fio={user.userName}
                                userId={user._id}
                                content="Несколько быстрых примеров текста для построения"
                                footer="Последнее обновление было "
                                borderColor={user.color}
                                textColor={user.color}
                            />
                        );
                    })}
                {bookmarkUsers.length ===0 && <p className="position-absolute start-0">Ни одного пользователя не добавлено в ИЗБРАННОЕ</p>}
            </div>
        </>
    );
};

export default BookMarkCard;
