import { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

import apiInstance from "../../utils/axios";

function Category() {
    const [posts, setPosts] = useState([]);
    const param = useParams();

    const fetchPosts = async () => {
        const response = await apiInstance.get(`post/category/posts/${param.slug}/`);
        setPosts(response.data);
    };
    useEffect(() => {
        fetchPosts();
    }, []);

    // Pagination
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const postItems = posts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div>
            <Header />
            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block card-img-flash">
                                <img src="assets/images/adv-3.png" alt="" />
                            </a>
                            <h2 className="text-start d-block mt-1">
                                <i className="bi bi-grid-fill"></i> {posts[0]?.category?.title} (16 Articles)
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-0 mt-4">
                <div className="container">
                    <div className="row">
                        {postItems?.map((p, index) => (
                            <div className="col-sm-6 col-lg-3" key={index}>
                                <div className="card mb-4">
                                    <div className="card-fold position-relative">
                                        <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src={p.image} alt={p.title} />
                                    </div>
                                    <div className="card-body px-3 pt-3">
                                        <h4 className="card-title">
                                            <Link to={`${p.slug}`} className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                                {p.title?.slice(0, 32) + "..."}
                                            </Link>
                                        </h4>
                                        <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                            <li>
                                                <a href="#" className="text-dark text-decoration-none">
                                                    <i className="fas fa-user"></i> {p?.profile?.full_name}
                                                </a>
                                            </li>
                                            <li className="mt-2">
                                                <i className="fas fa-calendar"></i> {moment(p.date).format("DD MMM, YYYY")}
                                            </li>
                                            <li className="mt-2">
                                                <i className="fas fa-eye"></i> {p.view} Views
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <nav className="d-flex mt-5">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="page-link me-1" onClick={() => setCurrentPage(currentPage - 1)}>
                                    <i className="ci-arrow-left me-2" />
                                    Previous
                                </button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            {pageNumbers.map((number) => (
                                <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => setCurrentPage(number)}>
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <ul className="pagination">
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button className="page-link ms-1" onClick={() => setCurrentPage(currentPage + 1)}>
                                    Next
                                    <i className="ci-arrow-right ms-3" />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Category;
