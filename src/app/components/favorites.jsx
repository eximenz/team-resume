import React, { useState, useEffect } from "react";
import api from "../api";
import CardMainPage from "./cardMainPage/cardMainPage";

const Favorites = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    api.developers.fetchAll().then((data) => setUsers(data));
  }, []);
  users && console.log(users.map((user) => user.age));
  return (
    <>
      {users &&
        users.map(
          (user) =>
            user.favorite && (
              <div key={user._id}>
                <CardMainPage
                  key={user._id}
                  name={user.name}
                  age={user.age}
                  about={user.description}
                  imageUrl={user.src}
                  alt={user.alt}
                />
                <button>Удалить из избранного</button>
              </div>
            )
        )}
    </>
  );
};

export default Favorites;
