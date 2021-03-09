import { Link } from "react-router-dom";
import logo from "../resources/17sdg.png";
import sdglogo from "../resources/sdglogo.png";

export const ProblemStatements = () => {
    return (
        <>
            <Overview />
        </>
    );
};

export const Overview = () => {
    return (
        <section>
            <div className="container">
                <img
                    style={{
                        alignSelf: "center",
                        width: "100%",
                    }}
                    src={sdglogo}
                />

                <br />
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className=""
                            style={{
                                width: "100%",
                            }}
                            src={logo}
                        />
                    </div>
                    <div className="col-md-6">
                        <br />
                        <br />
                        <br />
                        <p
                            className="mb-3"
                            style={{
                                fontFamily: "GoogleSans-Bold",
                            }}
                        >
                            The Google Developer Student Clubs 2021 Solution Challenge mission
                            is to solve for one of the United Nations’ 17 Sustainable
                            Development Goals using Google technology.
            </p>
                        <p>
                            Created by the United Nations in 2015 to be achieved by 2030, the
                            17 Sustainable Development Goals (SDGs) agreed upon by all 193
                            United Nations Member States aim to end poverty, ensure
                            prosperity, and protect the planet.
              <br />
                            <Link className="btn" to="https://developers.google.com/community/dsc-solution-challenge/UN-goals" target="_blank">
                                Problem Statements</Link>&nbsp;&nbsp;&nbsp;
                            <Link className="btn" to="https://developers.google.com/community/dsc-solution-challenge" target="_blank">
                                Judging criteria</Link>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center p-4">
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/0XTBYMfZyrM"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center p-4 ">
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/xVWHuJOmaEk"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <div style={{
                margin: 'auto',
                width: '20rem',
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingBottom: '0.75rem'
            }}>
                <a style={{
                    minWidth: '8.5rem',
                    fontSize: '1.5rem'
                }} target="_blank" href="https://developers.googleblog.com/2020/07/dsc-global-students-solutions-with-code.html" className="btn">Previous Winners</a>
            </div>
        </section>
    );
};
