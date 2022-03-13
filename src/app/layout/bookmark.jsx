import React from "react";
import BookMarkCard from "../components/Cards/bookmarkCard";

const BookMark = ({ ...props }) => {
    return (
        <>
            <h2>Избранное</h2>
            <BookMarkCard  />
        </>
    );
};

export default BookMark;
