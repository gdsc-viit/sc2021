import logo from '../resources/DSC Logo [New Guidelines].png'
import poster from '../resources/poster.jpeg'
import {
    Link
} from "react-router-dom";
export const Contact = () => {
    return (<>
        <section>
            <div className="container">
                <div className="row m-3" >
                    <div className="col-md-6">
                        <img style={{
                            width: '100%'
                        }} src={logo} />
                    </div>
                    <div className="col-md-6 d-flex justify-content-left">
                        <h1 className="m-3">Hack2LiveOn</h1>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-7 d-flex justify-content-center">
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_dfbnBf.json" background="transparent" speed="1"
                            style={{ height: '100%', }} loop autoplay></lottie-player>
                    </div>
                    <div className="col-md-5">
                        <img style={{
                            width: '100%',
                            height: '100%'
                        }} src={poster} id="poster" />
                    </div>
                    <div className="col-md-7 p-5 d-flex justify-content-center">
                        <a style={{
                            width: '8.5rem',
                            height: '3.5rem',
                            fontSize: '1.5rem'
                        }} target="_blank" href="https://chat.whatsapp.com/KkJavWvebgSBBtFnR3Noyr" className="btn">WhatsApp</a>
                &nbsp; &nbsp;
                <a style={{
                            width: '8.5rem',
                            height: '3.5rem',
                            fontSize: '1.5rem'
                        }} href='mailto:dscviit@gmail.com' target="_blank" className="btn">Mail</a>
                &nbsp; &nbsp;
                </div>
                    <div className="col-md-7  d-flex justify-content-center">
                        <a style={{
                            width: '8.5rem',
                            height: '3.5rem',
                            fontSize: '1.5rem'
                        }} target="_blank" href="https://twitter.com/dscviit" target="_blank" className="btn">Twitter</a>
                &nbsp; &nbsp;
                        <a style={{
                            width: '8.5rem',
                            height: '3.5rem',
                            fontSize: '1.5rem'
                        }} href='https://medium.com/@dscviit' target="_blank" className="btn">Medium</a>
                &nbsp; &nbsp;
                <a style={{
                            width: '8.5rem',
                            height: '3.5rem',
                            fontSize: '1.5rem'
                        }} href='https://github.com/dsc-viit' target="_blank" className="btn">Github</a>
                &nbsp; &nbsp;
                    </div>
                </div>
                <br />
            </div>
        </section>
    </>)
}

// export const Details = () => {
//     return (<>Details</>)
// }
// export const FAQ = () => {
//     return (<>fAQ</>)
// }