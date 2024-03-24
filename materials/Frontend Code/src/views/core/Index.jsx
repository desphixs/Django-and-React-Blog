import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
function Index() {
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
                            <h2 className="text-start d-block mt-1">Trending Articles 🔥</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <Link to={`/7-common-mistakes-everyone-makes-while-travelling/`} className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </Link>
                                    </h4>
                                    <button style={{ border: "none", background: "none" }}>
                                        <i className="fas fa-bookmark text-danger"></i>
                                    </button>
                                    <button style={{ border: "none", background: "none" }}>
                                        <i className="fas fa-thumbs-up text-primary"></i>
                                    </button>

                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/black-woman-smiling-with-hands-in-hair-PMCFL93-1.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/flat-with-touch-of-creativity-PX387LV-2.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/young-handsome-afro-black-man-going-upstairs-from-PJWPWPR-2.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="d-flex mt-2">
                        <ul className="pagination">
                            <li className="">
                                <button className="page-link text-dark fw-bold me-1 rounded">
                                    <i className="fas fa-arrow-left me-2" />
                                    Previous
                                </button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li key={1} className="active">
                                <button className="page-link text-dark fw-bold rounded">1</button>
                            </li>
                            <li key={2} className="ms-1">
                                <button className="page-link text-dark fw-bold rounded">2</button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li className={`totalPages`}>
                                <button className="page-link text-dark fw-bold ms-1 rounded">
                                    Next
                                    <i className="fas fa-arrow-right ms-3 " />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className="bg-light pt-5 pb-5 mb-3 mt-3">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-12 ">
                            <div className="mb-4">
                                <h2>Categories</h2>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="mt-2">
                                    <div className="card bg-transparent">
                                        <img className="card-img" src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/father-son-1.jpg" style={{ width: "150px", height: "80px", objectFit: "cover" }} alt="card image" />
                                        <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                            <h5 className="mb-0">Life Style</h5>
                                            <small>3 Articles</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="card bg-transparent">
                                        <img className="card-img" src="https://assets.entrepreneur.com/content/3x2/2000/1599591949-GettyImages-1174414266.jpg" style={{ width: "150px", height: "80px", objectFit: "cover" }} alt="card image" />
                                        <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                            <h5 className="mb-0">Entertainment</h5>
                                            <small>1 Articles</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="card bg-transparent">
                                        <img
                                            className="card-img"
                                            src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
                                            style={{ width: "150px", height: "80px", objectFit: "cover" }}
                                            alt="card image"
                                        />
                                        <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                            <h5 className="mb-0">Cars</h5>
                                            <small>2 Articles</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="card bg-transparent">
                                        <img className="card-img" src="https://guardian.ng/wp-content/uploads/2019/03/sport-equipment-e1555707764770.jpeg" style={{ width: "150px", height: "80px", objectFit: "cover" }} alt="card image" />
                                        <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                            <h5 className="mb-0">Sports</h5>
                                            <small>8 Articles</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="card bg-transparent">
                                        <img className="card-img" src="https://aliviohealth.com/wp-content/uploads/2022/07/Managing-Mental-Health-During-COVID-19.jpg" style={{ width: "150px", height: "80px", objectFit: "cover" }} alt="card image" />
                                        <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                            <h5 className="mb-0">Health</h5>
                                            <small>7 Articles</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="card bg-transparent">
                                        <img
                                            className="card-img"
                                            src="https://www.realsimple.com/thmb/yla86Nr8GjRXe_9IyADQ638gPrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashion-trends-GettyImages-1457816153-d2982e954afe4b42bf5587f087da90d4.jpg"
                                            style={{ width: "150px", height: "80px", objectFit: "cover" }}
                                            alt="card image"
                                        />
                                        <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                            <h5 className="mb-0">Fashion</h5>
                                            <small>4 Articles</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <div className="card bg-transparent">
                                        <img className="card-img" src="https://insight.ng/wp-content/uploads/2022/01/andrey-suslov-shutterstock-1199480788_w400-3.png" style={{ width: "150px", height: "80px", objectFit: "cover" }} alt="card image" />
                                        <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                            <h5 className="mb-0">Tech</h5>
                                            <small>13 Articles</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block card-img-flash">
                                <img src="assets/images/adv-3.png" alt="" />
                            </a>
                            <h2 className="text-start d-block mt-1">Latest Articles 🕒</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/yellow-and-gray-industrial-office-PFDQ5CR-1.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/loft-office-with-vintage-decor-PFD2JSL-1.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/glacier-ice-cave-of-iceland-PWYAVUU-1.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/black-woman-smiling-with-hands-in-hair-PMCFL93-1.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/flat-with-touch-of-creativity-PX387LV-2.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card mb-4">
                                <div className="card-fold position-relative">
                                    <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/young-handsome-afro-black-man-going-upstairs-from-PJWPWPR-2.jpg" alt="Card image" />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title">
                                        <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                        <li>
                                            <a href="#" className="text-dark text-decoration-none">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="d-flex mt-2">
                        <ul className="pagination">
                            <li className="">
                                <button className="page-link text-dark fw-bold me-1 rounded">
                                    <i className="fas fa-arrow-left me-2" />
                                    Previous
                                </button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li key={1} className="active">
                                <button className="page-link text-dark fw-bold rounded">1</button>
                            </li>
                            <li key={2} className="ms-1">
                                <button className="page-link text-dark fw-bold rounded">2</button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li className={`totalPages`}>
                                <button className="page-link text-dark fw-bold ms-1 rounded">
                                    Next
                                    <i className="fas fa-arrow-right ms-3 " />
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

export default Index;
