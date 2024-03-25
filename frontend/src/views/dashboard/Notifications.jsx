import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

import apiInstance from "../../utils/axios";
import useUserData from "../../plugin/useUserData";
import Toast from "../../plugin/Toast";

function Notifications() {
    const [noti, setNoti] = useState([]);
    const userId = useUserData()?.user_id;

    const fetchNoti = async () => {
        const response = await apiInstance.get(`author/dashboard/noti-list/${userId}/`);
        setNoti(response.data);
    };

    useEffect(() => {
        fetchNoti();
    }, []);

    const handleMarkNotiAsSeen = async (notiId) => {
        const response = await apiInstance.post("author/dashboard/noti-mark-seen/", { noti_id: notiId });
        console.log(response.data);
        Toast("success", "Notification Seen", "");
        fetchNoti();
    };

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
                                        {noti?.map((n, index) => (
                                            <>
                                                <li className="list-group-item p-4 shadow rounded-3 mt-4">
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
                                                </li>
                                            </>
                                        ))}

                                        {noti?.length < 1 && <p>No notifications yet</p>}
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
