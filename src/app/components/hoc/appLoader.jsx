import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
    getUsersLoadingStatus,
    loadUsersList
} from "../../storage/users";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getUsersLoadingStatus());

    useEffect(() => {
        dispatch(loadUsersList());
    }, []);

    if (isLoading) return "Загружаем участников команды в стор...";

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default AppLoader;
