import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userJobs = [
    {
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        description: "Фотоматериалы для работы номер 1"
    },
    {
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        description: "Фотоматериалы для работы номер 2"
    },
    {
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        description: "Фотоматериалы для работы номер 3"
    },
    {
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        description: "Фотоматериалы для работы номер 4"
    }
];

const initUsers = [
    {
        _id: 1,
        userName: "Стас Бугаевский",
        age: 40,
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
        created: 1646092800000,
        isTeamLead: false,
        social: "Telegram, GitHub",
        status: "Junior Frontend",
        sliderjobs: userJobs,
        knowledge:
            "Javascript,  React/Redux, BackEnd/Express, MongoDB, FireBase",
        sinceJavascript: 30,
        sinceReact: 40,
        sinceDb: 50,
        isBookMark: false,
        color: "success"
    },
    {
        _id: 2,
        userName: "Анна Потапова",
        age: 16,
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
        created: 1646179200000,
        sliderjobs: userJobs,
        isTeamLead: true,
        social: "VK, Instagram, Telegram, GitHub",
        status: "Middle Frontend",
        knowledge:
            "Javascript,  React/Redux, BackEnd/Express, MongoDB, FireBase",
        sinceJavascript: 40,
        sinceReact: 50,
        sinceDb: 60,
        isBookMark: false,
        color: "primary"
    },
    {
        _id: 3,
        userName: "Ксения Корнеева",
        age: 16,
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
        created: 1646438400000,
        sliderjobs: userJobs,
        isTeamLead: false,
        social: "VK, Instagram, Telegram, GitHub",
        status: "Middle Frontend",
        knowledge:
            "Javascript,  React/Redux, BackEnd/Express, MongoDB, FireBase",
        sinceJavascript: 40,
        sinceReact: 50,
        sinceDb: 60,
        isBookMark: false,
        color: "secondary"
    },
    {
        _id: 4,
        userName: "Test User",
        age: 60,
        photo: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
        created: 1646697600000,
        sliderjobs: userJobs,
        isTeamLead: false,
        status: "Study Frontend",
        social: "Odnoklassniki",
        knowledge: "Javascript,  React",
        sinceJavascript: 10,
        sinceReact: 20,
        sinceDb: 15,
        isBookMark: true,
        color: "dark"
    }
];

const initialState = {
    entities: null,
    error: null,
    dataLoaded: false,
    isLoading: true
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersRecived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        userSetBookmark: (state, action) => {
            const user = state.entities.find((u) => u._id === action.payload);

            if (user.isBookMark) {
                toast.info(
                    `Пользователь [${
                        state.entities.find((u) => u._id === action.payload)
                            .userName
                    }] удален из избранного`,
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined
                    }
                );
            } else {
                toast.success(
                    `Пользователь [${
                        state.entities.find((u) => u._id === action.payload)
                            .userName
                    }] добавлен в избранное`,
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined
                    }
                );
            }
            state.entities = state.entities.map((user) => {
                if (user._id === action.payload) {
                    user.isBookMark = !user.isBookMark;
                }
                return user;
            });
            localStorage.setItem("usersTeam", JSON.stringify(state.entities));
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const { usersRequested, usersRecived, usersRequestFailed, userSetBookmark } =
    actions;

// const authRequested = createAction("users/authRequested");

export const loadUsersList = () => async (dispatch, getState) => {
    // console.log(isOutDated(lastFetch));
    // if (getState().users.entities && getState().users.entities.length > 0) {
    //     return;
    // }
    dispatch(usersRequested());
    try {
        let content;
        if (localStorage.getItem("usersTeam")) {
            if (
                JSON.parse(localStorage.getItem("usersTeam")).legth ===
                initUsers.length
            ) {
                content = JSON.parse(localStorage.getItem("usersTeam"));
            } else content = initUsers;
        } else {
            localStorage.setItem("usersTeam", JSON.stringify(initUsers));
            content = initUsers;
        }

        dispatch(usersRecived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const getUsersLoadingStatus = () => (state) => {
    return state.users.isLoading;
};

export const getUsers = () => (state) => {
    return state.users.entities;
};

export const getBookMarkUsers = (id) => (state) => {
    if (state.users.entities) {
        return state.users.entities.filter((u) => u.isBookMark);
    }
    return [];
};

export const getUserById = (id) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === id);
    }
    return {};
};

export const getUserBookMarkById = (id) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === id).isBookMark;
    }
    return false;
};

export const setUserBookMark = (id) => (dispatch, getState) => {
    dispatch(userSetBookmark(id));
};

export default usersReducer;
