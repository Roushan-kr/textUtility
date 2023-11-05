import React from 'react'

export default function About(props) {
    // TODO: here i have to manually check wether the function work or not 

    const txtColor = (props.mode === "light" ? "dark" : "white")
    const linkColor = (props.mode === "light" ? "light" : "dark") //
    console.log(props.mode,txtColor, linkColor,`link-${linkColor}`)
    return (
        <div>
            <header className={`py-5 bg-${linkColor} text-${txtColor}`}>
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3">Our mission is to make building websites easier for everyone.</h1>
                                <p className="lead fw-normal text-muted mb-4">Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                                <a className="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <footer className={`bg-${linkColor} py-4 mt-auto`}>
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className={`small m-0 text-${txtColor}`}>Copyright &copy; Your Website 2023</div></div>
                        <div className="col-auto">
                            <a className={`link-primary small`} href="#!">Privacy</a>
                            <span className={`text-${txtColor} mx-1`}>&middot;</span>
                            <a className={`link-primary small`} href="#!">Terms</a>
                            <span className={`text-${txtColor} mx-1`}>&middot;</span>
                            <a className={`link-${linkColor} small`} href="#!">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
