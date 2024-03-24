import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function Posts() {
    return (
        <>
            <Header />
            <section className="py-4">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="card border bg-transparent rounded-3">
                                <div className="card-header bg-transparent border-bottom p-3">
                                    <div className="d-sm-flex justify-content-between align-items-center">
                                        <h5 className="mb-2 mb-sm-0">
                                            All Blog Posts <span className="badge bg-primary bg-opacity-10 text-primary">5</span>
                                        </h5>
                                        <a href="#" className="btn btn-sm btn-primary mb-0">
                                            Add New <i className="fas fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row g-3 align-items-center justify-content-between mb-3">
                                        <div className="col-md-8">
                                            <form className="rounded position-relative">
                                                <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search Articles" aria-label="Search" />
                                                <button className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                                                    <i className="fas fa-search fs-6 " />
                                                </button>
                                            </form>
                                        </div>
                                        <div className="col-md-3">
                                            <form>
                                                <select className="form-select z-index-9 bg-transparent" aria-label=".form-select-sm">
                                                    <option value="">Sort by</option>
                                                    <option>Newest</option>
                                                    <option>Oldest</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Search and select END */}
                                    {/* Blog list table START */}
                                    <div className="table-responsive border-0">
                                        <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                                            {/* Table head */}
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col" className="border-0 rounded-start">
                                                        Article Name
                                                    </th>
                                                    <th scope="col" className="border-0">
                                                        Views
                                                    </th>
                                                    <th scope="col" className="border-0">
                                                        Published Date
                                                    </th>
                                                    <th scope="col" className="border-0">
                                                        Category
                                                    </th>
                                                    <th scope="col" className="border-0">
                                                        Status
                                                    </th>
                                                    <th scope="col" className="border-0 rounded-end">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="border-top-0">
                                                <tr>
                                                    <td>
                                                        <h6 className="mt-2 mt-md-0 mb-0 ">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                How to become a better django and react developer
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                201 Views
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>March 21, 2024.</td>
                                                    <td>Technology</td>
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn-round mb-0 btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                                <i className="bi bi-trash" />
                                                            </a>
                                                            <a href="dashboard-post-edit.html" className="btn btn-primary btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                                <i className="bi bi-pencil-square" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h6 className="mt-2 mt-md-0 mb-0 ">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                How to become a better django and react developer
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                201 Views
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>March 21, 2024.</td>
                                                    <td>Technology</td>
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn-round mb-0 btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                                <i className="bi bi-trash" />
                                                            </a>
                                                            <a href="dashboard-post-edit.html" className="btn btn-primary btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                                <i className="bi bi-pencil-square" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h6 className="mt-2 mt-md-0 mb-0 ">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                How to become a better django and react developer
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                201 Views
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>March 21, 2024.</td>
                                                    <td>Technology</td>
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn-round mb-0 btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                                <i className="bi bi-trash" />
                                                            </a>
                                                            <a href="dashboard-post-edit.html" className="btn btn-primary btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                                <i className="bi bi-pencil-square" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h6 className="mt-2 mt-md-0 mb-0 ">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                How to become a better django and react developer
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                201 Views
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>March 21, 2024.</td>
                                                    <td>Technology</td>
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn-round mb-0 btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                                <i className="bi bi-trash" />
                                                            </a>
                                                            <a href="dashboard-post-edit.html" className="btn btn-primary btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                                <i className="bi bi-pencil-square" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h6 className="mt-2 mt-md-0 mb-0 ">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                How to become a better django and react developer
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            <a href="#" className="text-dark text-decoration-none">
                                                                201 Views
                                                            </a>
                                                        </h6>
                                                    </td>
                                                    <td>March 21, 2024.</td>
                                                    <td>Technology</td>
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn-round mb-0 btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                                <i className="bi bi-trash" />
                                                            </a>
                                                            <a href="dashboard-post-edit.html" className="btn btn-primary btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                                <i className="bi bi-pencil-square" />
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

export default Posts;
