import React from "react";
import styles from './Paginator.module.css'

const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let slicedPages;
    if (currentPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(currentPage - 3, currentPage + 2);
    }

    return (
        <div>
            <div className={styles.sidePage}>
                {slicedPages.map(p => {
                    return <span key={p} className={currentPage === p ? styles.selectPage : undefined}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
        </div>
    )
}
export default Paginator;