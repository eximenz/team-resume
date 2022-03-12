import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initUsers = [
    {
        _id: 1,
        userName: "Стас Бугаевский",
        age: 40,
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
        isTeamLead: false,
        social: "Telegram, GitHub",
        status: "Junior Frontend",
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
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
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
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
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
        cardContent:
            "Несколько быстрых примеров текста для построения контента для карточки пользователя",
        isTeamLead: false,
        status: "Study Frontend",
        social: "Odnoklassniki",
        knowledge: "Javascript,  React",
        sinceJavascript: 40,
        sinceReact: 50,
        sinceDb: 60,
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
            toast.warning(
                `Пользователь [${
                    state.entities.find(
                        (u) =>
                            u._id === action.payload).userName
                }] добавлен в избранное`,
                {
                    position: "top-center"
                }
            );
            state.entities = state.entities.map((user) => {
                if (user._id === action.payload) {
                    user.isBookMark = !user.isBookMark;
                }
                return user;
            });
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
            content = JSON.parse(localStorage.getItem("usersTeam"));
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

export const getBookMarkUsers = () => (state) => {
    if (state.users.entities) {
        return state.users.entities.filter((u) => u.isBookMark);
    }
    return [];
};

export const getUserById = (id) => (state) => {
    if (state.users.entities) {
            return state.users.entities.find((u) => u._id === id);
        }
        return {}
};

export const setUserBookMark = (id) => (dispatch, getState) => {
    dispatch(userSetBookmark(id));
};

export default usersReducer;
