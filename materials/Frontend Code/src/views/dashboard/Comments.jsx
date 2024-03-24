import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function Comments() {
    return (
        <>
            <Header />
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row mt-0 mt-md-4">
                        <div className="col-lg-12 col-md-8 col-12">
                            {/* Card */}
                            <div className="card mb-4">
                                {/* Card header */}
                                <div className="card-header d-lg-flex align-items-center justify-content-between">
                                    <div className="mb-3 mb-lg-0">
                                        <h3 className="mb-0">Comments</h3>
                                        <span>You have full control to manage your own comments.</span>
                                    </div>
                                </div>
                                {/* Card body */}
                                <div className="card-body">
                                    {/* List group */}
                                    <ul className="list-group list-group-flush">
                                        {/* List group item */}
                                        <li className="list-group-item p-4 shadow rounded-3">
                                            <div className="d-flex">
                                                <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg" alt="avatar" className="rounded-circle avatar-lg" style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover" }} />
                                                <div className="ms-3 mt-2">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h4 className="mb-0">Eleanor Pena</h4>
                                                            <span>2 hour ago</span>
                                                        </div>
                                                        <div>
                                                            <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Report Abuse">
                                                                <i className="fe fe-flag" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <p className="mt-2">
                                                            <span className="fw-bold me-2">
                                                                Comment <i className="fas fa-arrow-right"></i>
                                                            </span>
                                                            This post was really amazing, do you recommend that beginners learn React.js and Django?
                                                        </p>
                                                        <p className="mt-2">
                                                            <span className="fw-bold me-2">
                                                                Response <i className="fas fa-arrow-right"></i>
                                                            </span>
                                                            Thanks for the commment. Yes, it's an ideal stack for proficient development.
                                                        </p>
                                                        <p>
                                                            <button class="btn btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                                Send Response
                                                            </button>
                                                        </p>
                                                        <div class="collapse" id="collapseExample">
                                                            <div class="card card-body">
                                                                <form>
                                                                    <div class="mb-3">
                                                                        <label for="exampleInputEmail1" class="form-label">
                                                                            Write Response
                                                                        </label>
                                                                        <textarea name="" id="" cols="30" className="form-control" rows="4"></textarea>
                                                                    </div>

                                                                    <button type="submit" class="btn btn-primary">
                                                                        Send Response <i className="fas fa-paper-plane"> </i>
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
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

export default Comments;
