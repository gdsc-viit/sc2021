import React from 'react';
import logo0 from '../resources/Solution_Challange_2021_Lockup.png';
import logo1 from '../resources/Wavy_Bus-35_Single-03.jpg';
import {
    Link
} from "react-router-dom";
export const Landing = () => {
    return (
        <section>
            <div className="row" style={{
                paddingTop: '8vh',
                paddingBottom: '30px',
                width: '90vw',
                margin: 'auto'
            }} >
                <div className="col-md-8 ">
                    <img style={{
                        width: '90%'
                    }} src={logo0} />
                </div>
                <div className="col-sm-auto col-md-4">
                    <img style={{
                        width: '100%',
                        marginLeft: 'auto'
                    }} src={logo1} />
                </div>
            </div>
            <div style={{
                margin: 'auto',
                display: 'flex',
                paddingTop: '3.75rem',
                paddingBottom: '0.75rem',
                justifyContent: 'space-evenly',
                width: '20rem'
            }}>
                <a style={{
                    width: '8.5rem',
                    fontSize: '1.5rem'
                }} target="_blank" href="https://forms.gle/qNU7v83EhjDGJCCs6" className="btn">Register</a>
                &nbsp; &nbsp;
                <Link style={{
                    width: '8.5rem',
                    fontSize: '1.5rem'
                }} to="/NeedHelp" className="btn">Need Help</Link>
                &nbsp; &nbsp;

            </div>

            <div style={{
                margin: 'auto',
                width: '20rem',
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingBottom: '0.75rem'
            }}>
                <Link style={{
                    minWidth: '8.5rem',
                    fontSize: '1.5rem'
                }} to="/ProblemStatements" className="btn">Problem Statements</Link>
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
                }} target="_blank" href="https://sdgs.un.org/2030agenda" className="btn">UN agenda</a>
            </div>

        </section >
    )
}