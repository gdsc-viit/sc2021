import logo from '../resources/DSC Logo [New Guidelines].png'

export const NeedHelp = () => {
    return (
        <>
            <section><Resources /></section>
        </>
    )
}

export const Resources = () => {
    return (
        <div className="container">
            <div className="row m-3" >
                <div className="col-md-6">
                    <img style={{
                        width: '100%'
                    }} src={logo} />
                </div>
                <div className="col-md-6 d-flex justify-content-left">
                    <h1 className="m-3">2021 Solution Challenge</h1>
                </div>
            </div>
            <br />
            <div className="row ">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <iframe frameBorder="0" allowFullScreen="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        width="500" height="315"
                        src="https://www.youtube.com/embed/uyzFcuBmy_o?autohide=1&amp;showinfo=0&amp;video-id=uyzFcuBmy_o&amp;enablejsapi=1&amp;widgetid=29"
                        dataTitle="YouTube video player"></iframe>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h3>Taking a project from idea to launch</h3>
                    <p>
                        Join our Googler co-hosts, Alina and Kyle, in this week's episode as part of the 2021 Solution Challenge where they
                        interview a Google Developer Expert, Bryce Howitson, about project planning,
                        finding the right tech for the project, and working on your project remotely with your team.
                        </p>
                </div>
            </div>
            <br />
            <br />
            <div className="row ">
                <div className="col-md-6 col-sm-12">
                    <h3>Brainstorming ideas for the 2021 Solution Challenge</h3>
                    <p>
                        In this video, Arman Hezarkhani will show us how to research the United Nations’ Sustainable Development Goals and brainstorm ideas for your 2021 Solution Challenge project.

                        Pages used during this video to brainstorm ideas:
                        <li>
                            <a href="http://goo.gle/38xVC5O">Take action on the United Nations 17 SDG Goals</a>
                        </li>
                        <li>
                            <a href=" http://goo.gle/38zFpNJ">Digital Impact Alliance - Building blocks</a>
                        </li>
                    </p>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <iframe frameBorder="0" allowFullScreen="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        width="500" height="315"
                        src="https://www.youtube.com/embed/50QQ6ksr8FE?autohide=1&amp;showinfo=0&amp;video-id=50QQ6ksr8FE&amp;enablejsapi=1&amp;widgetid=29"
                        dataTitle="YouTube video player"></iframe>
                </div>
            </div>
            <br />
            <br />
            <div className="row ">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center p-4">
                    <iframe frameBorder="0" allowFullScreen="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        width="500" height="315"
                        src="https://www.youtube.com/embed/Wkaz5uw0Evo?autohide=1&amp;showinfo=0&amp;video-id=Wkaz5uw0Evo&amp;enablejsapi=1&amp;widgetid=29"
                        dataTitle="YouTube video player"></iframe>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h3>Example project</h3>
                    <p>
                        In this video, we will pick a sample solution and walk through the journey to building a successful project.
                    </p>
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
                }} target="_blank" href="https://developers.google.com/community/dsc-solution-challenge/resources" className="btn">More Resources</a>
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
                }} target="_blank" href="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJPLtXeKN8iTQuvadcwi6Ig" className="btn">2021 Demo Day Playlist</a>
            </div>
        </div>

    )
}