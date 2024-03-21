import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function Notifications() {
    return (
        <>
            <Header />
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row mt-0 mt-md-4">
                        <div className="col-lg-12 col-md-8 col-12">
                            <div className="card mb-4">
                                <div className="card-header d-lg-flex align-items-center justify-content-between">
                                    <div className="mb-3 mb-lg-0">
                                        <h3 className="mb-0">Notifications</h3>
                                        <span>Manage all your notifications from here</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item p-4 shadow rounded-3 mt-4">
                                            <div className="d-flex">
                                                <div className="ms-3 mt-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h4 className="mb-0 fw-bold">
                                                                <i className="bi bi-chat-left-quote-fill text-success "></i> New Comment
                                                            </h4>
                                                            <p className="mt-3">
                                                                Monica FineGeh commented on your post <b>How to become a better django and react.js developer</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <p className="mt-1">
                                                            <span className="me-2 fw-bold">
                                                                Date: <span className="fw-light">30/11/24</span>
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <button class="btn btn-outline-secondary" type="button">
                                                                Mark as Seen <i className="fas fa-check"></i>
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="list-group-item p-4 shadow rounded-3 mt-4">
                                            <div className="d-flex">
                                                <div className="ms-3 mt-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h4 className="mb-0 fw-bold">
                                                                <i className="fas fa-thumbs-up text-primary "></i> New Like
                                                            </h4>
                                                            <p className="mt-3">
                                                                Destiny Franks liked your post <b>How to become a better django and react.js developer</b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <p className="mt-1">
                                                            <span className="me-2 fw-bold">
                                                                Date: <span className="fw-light">30/11/24</span>
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <button class="btn btn-outline-secondary" type="button">
                                                                Mark as Seen <i className="fas fa-check"></i>
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Notifications;
