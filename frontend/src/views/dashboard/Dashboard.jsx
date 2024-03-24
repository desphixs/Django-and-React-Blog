import { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

import apiInstance from "../../utils/axios";
import useUserData from "../../plugin/useUserData";
import moment from "moment";
import Toast from "../../plugin/Toast";

function Dashboard() {
    const [stats, setStats] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [noti, setNoti] = useState([]);

    const userId = useUserData()?.user_id;

    const fetchDashboardData = async () => {
        const stats_res = await apiInstance.get(`author/dashboard/stats/${userId}/`);
        setStats(stats_res.data[0]);

        const post_res = await apiInstance.get(`author/dashboard/post-list/${userId}/`);
        setPosts(post_res.data);

        const comment_res = await apiInstance.get(`author/dashboard/comment-list/`);
        setComments(comment_res.data);

        const noti_res = await apiInstance.get(`author/dashboard/noti-list/${userId}/`);
        setNoti(noti_res.data);
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const handleMarkNotiAsSeen = async (notiId) => {
        const response = await apiInstance.post("author/dashboard/noti-mark-seen/", { noti_id: notiId });
        console.log(response.data);
        fetchDashboardData();
        Toast("success", "Notification Seen", "");
    };

    return (
        <>
            <Header />
            <section className="py-4">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row g-4">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-body border p-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-xl fs-1 p-3 bg-success bg-opacity-10 rounded-3 text-success">
                                                <i className="bi bi-people-fill" />
                                            </div>
                                            <div className="ms-3">
                                                <h3>{stats.views}</h3>
                                                <h6 className="mb-0">Total Views</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-body border p-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-xl fs-1 p-3 bg-primary bg-opacity-10 rounded-3 text-primary">
                                                <i className="bi bi-file-earmark-text-fill" />
                                            </div>
                                            <div className="ms-3">
                                                <h3>{stats.posts}</h3>
                                                <h6 className="mb-0">Posts</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-body border p-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-xl fs-1 p-3 bg-danger bg-opacity-10 rounded-3 text-danger">
                                                <i className="bi bi-suit-heart-fill" />
                                            </div>
                                            <div className="ms-3">
                                                <h3>{stats.likes}</h3>
                                                <h6 className="mb-0">Likes</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card card-body border p-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-xl fs-1 p-3 bg-info bg-opacity-10 rounded-3 text-info">
                                                <i className="bi bi-tag" />
                                            </div>
                                            <div className="ms-3">
                                                <h3>{stats.bookmarks}</h3>
                                                <h6 className="mb-0">Bookmarks</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xxl-4">
                            <div className="card border h-100">
                                <div className="card-header border-bottom d-flex justify-content-between align-items-center  p-3">
                                    <h5 className="card-header-title mb-0">All Posts ({stats.posts})</h5>
                                    <div className="dropdown text-end">
                                        <a href="#" className="btn border-0 p-0 mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-grid-fill text-danger fa-fw" />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <div className="row">
                                        {posts?.map((p, index) => (
                                            <>
                                                <div className="col-12">
                                                    <div className="d-flex position-relative">
                                                        <img className="w-60 rounded" src={p.image} style={{ width: "100px", height: "110px", objectFit: "cover", borderRadius: "10px" }} alt="product" />
                                                        <div className="ms-3">
                                                            <a href="#" className="h6 stretched-link text-decoration-none text-dark">
                                                                {p.title}
                                                            </a>
                                                            <p className="small mb-0 mt-3">
                                                                <i className="fas fa-calendar me-2"></i>
                                                                {moment(p.date).format("DD MMM, YYYY")}
                                                            </p>
                                                            <p className="small mb-0">
                                                                <i className="fas fa-eye me-2"></i>
                                                                {p.view} Views
                                                            </p>
                                                            <p className="small mb-0">
                                                                <i className="fas fa-thumbs-up me-2"></i>
                                                                {p.likes?.length} Likes
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="my-3" />
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer border-top text-center p-3">
                                    <Link to="/posts/" className="fw-bold text-decoration-none text-dark">
                                        View all Posts
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                            <div className="card border h-100">
                                <div className="card-header border-bottom d-flex justify-content-between align-items-center  p-3">
                                    <h5 className="card-header-title mb-0">Comments ({comments?.length})</h5>
                                    <div className="dropdown text-end">
                                        <a href="#" className="btn border-0 p-0 mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-chat-left-quote-fill text-success fa-fw" />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <div className="row">
                                        {comments?.slice(0, 3).map((c, index) => (
                                            <>
                                                <div className="col-12">
                                                    <div className="d-flex align-items-center position-relative">
                                                        <div className="avatar avatar-lg flex-shrink-0">
                                                            <img className="avatar-img" src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }} alt="avatar" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <p className="mb-1">
                                                                <a className="h6 stretched-link text-decoration-none text-dark" href="#">
                                                                    {c.comment}
                                                                </a>
                                                            </p>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="small mb-0">
                                                                    <i>by</i> {c.name} <br />
                                                                    <i>Date</i> {moment(c.date).format("DD MMM, YYYY")}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="my-3" />
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="card-footer border-top text-center p-3">
                                    <Link to="/comments/" className="fw-bold text-decoration-none text-dark">
                                        View all Comments
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                            <div className="card border h-100">
                                <div className="card-header border-bottom d-flex justify-content-between align-items-center  p-3">
                                    <h5 className="card-header-title mb-0">Notifications</h5>
                                    <div className="dropdown text-end">
                                        <a href="#" className="btn border-0 p-0 mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-bell text-warning fa-fw" />
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <div className="custom-scrollbar h-350">
                                        <div className="row">
                                            {noti?.slice(0, 3)?.map((n, index) => (
                                                <>
                                                    <div className="col-12">
                                                        <div className="d-flex justify-content-between position-relative">
                                                            <div className="d-sm-flex">
                                                                <div className="icon-lg bg-opacity-15 rounded-2 flex-shrink-0">{n.type === "Like" && <i className="fas fa-thumbs-up text-primary fs-5" />}</div>
                                                                <div className="icon-lg bg-opacity-15 rounded-2 flex-shrink-0">{n.type === "Comment" && <i className="bi bi-chat-left-quote-fill  text-success fs-5" />}</div>
                                                                <div className="icon-lg bg-opacity-15 rounded-2 flex-shrink-0">{n.type === "Bookmark" && <i className="fas fa-bookmark text-danger fs-5" />}</div>
                                                                <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                                    <h6 className="mb-0">{n.type}</h6>
                                                                    <p className="mb-0">
                                                                        {n.type === "Like" && (
                                                                            <p>
                                                                                Someone liked your post <b>{n.post?.title?.slice(0, 30) + "..."}</b>
                                                                            </p>
                                                                        )}
                                                                        {n.type === "Comment" && (
                                                                            <p>
                                                                                You have a new comment on <b>{n.post?.title?.slice(0, 30) + "..."}</b>
                                                                            </p>
                                                                        )}
                                                                        {n.type === "Bookmark" && (
                                                                            <p>
                                                                                Someone bookmarked your post <b>{n.post?.title?.slice(0, 30) + "..."}</b>
                                                                            </p>
                                                                        )}
                                                                    </p>
                                                                    <span className="small">5 min ago</span>
                                                                    <br />
                                                                    <button onClick={() => handleMarkNotiAsSeen(n.id)} className="btn btn-secondary mt-2">
                                                                        <i className="fas fa-check-circle"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="my-3" />
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer border-top text-center p-3">
                                    <Link to="/notifications/" className="fw-bold text-decoration-none text-dark">
                                        View all Notifications
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="card border bg-transparent rounded-3">
                                <div className="card-header bg-transparent border-bottom p-3">
                                    <div className="d-sm-flex justify-content-between align-items-center">
                                        <h5 className="mb-2 mb-sm-0">
                                            All Blog Posts <span className="badge bg-primary bg-opacity-10 text-primary">{posts?.length}</span>
                                        </h5>
                                        <a href="#" className="btn btn-sm btn-primary mb-0">
                                            Add New <i className="fas fa-plus"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body">
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
                                                {posts?.map((p, index) => (
                                                    <tr>
                                                        <td>
                                                            <h6 className="mt-2 mt-md-0 mb-0 ">
                                                                <a href="#" className="text-dark text-decoration-none">
                                                                    {p?.title}
                                                                </a>
                                                            </h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="mb-0">
                                                                <a href="#" className="text-dark text-decoration-none">
                                                                    {p.view} Views
                                                                </a>
                                                            </h6>
                                                        </td>
                                                        <td>{moment(p.date).format("DD MMM, YYYY")}</td>
                                                        <td>{p.category?.title}</td>
                                                        <td>
                                                            <span className="badge bg-dark bg-opacity-10 text-dark mb-2">{p.status}</span>
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
                                                ))}
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

export default Dashboard;
