import axios from "axios";
import { useEffect, useState } from "react";
import "./Pagination.css";

export const Pagination = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const itemsPerPage = 10; // Ensure this matches the API `limit`

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`)
            .then((response) => {
                setData(response.data.products);
                setTotalPages(Math.ceil(response.data.total / itemsPerPage)); // Calculate total pages
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [currentPage]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const getPageNumbers = () => {
        const totalPageNumbersToShow = 10;
        const halfRange = Math.floor(totalPageNumbersToShow / 2);

        let start = Math.max(currentPage - halfRange, 1);
        let end = start + totalPageNumbersToShow - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(end - totalPageNumbersToShow + 1, 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    };

    return (
        <div className="display-properties">
            {data.map((user) => (
                <div className="boxes" key={user.id}>
                    {user.id} - {user.title}
                </div>
            ))}
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? "active" : ""}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
