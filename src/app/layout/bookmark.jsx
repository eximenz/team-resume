import React from "react";
import BookMarkCard from "../components/Cards/bookmarkCard";

const BookMark = ({ ...props }) => {
    return (
        <>
            <h1>Избранное</h1>
            <BookMarkCard  />
        </>
    );
};

export default BookMark;
