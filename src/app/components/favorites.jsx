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
      <div className="container d-flex">
        {users &&
          users.map(
            (user) =>
              user.favorite && (
                <div key={user._id} className="column m-4">
                  <CardMainPage
                    key={user._id}
                    name={user.name}
                    age={user.age}
                    about={user.description}
                    src={user.src}
                    alt={user.alt}
                  />
                  <button>Удалить из избранного</button>
                </div>
              )
          )}
      </div>
    </>
  );
};

export default Favorites;
