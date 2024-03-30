import React from 'react';
import s from "./Pagination.module.scss"
const Pagination = ({handlePrev, page, handleNext}) => {
    return (
        <div className={s.pagination}>
            <button onClick={handlePrev} >Prev</button>
                <span>{page}</span>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Pagination;