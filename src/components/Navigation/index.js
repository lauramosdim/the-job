import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [logged, setLogged] = useState({})

    useEffect(() => {
        verifyLogin()
    })

    const verifyLogin = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name) {
            setLogged({ isAuth: true });
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="pull-left">
                        <Link className="navbar-toggle" to="/" data-toggle="offcanvas">
                            <i className="ti-menu" />
                        </Link>
                        <div className="logo-wrapper">
                            <Link className="logo" to="/">
                                <img src="/img/logo.png" alt="logo" />
                            </Link>
                            <Link className="logo-alt" to="/">
                                <img src="/img/logo-alt.png" alt="logo-alt" />
                            </Link>
                        </div>
                    </div>
                    <div className="pull-right user-login">
                        <Link to="/login" className="btn btn-sm btn-primary">login</Link>
            or <Link to="/register">register</Link>
                    </div>
                    <ul className="nav-menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="/jobs">Position</a>
                            <ul>
                                <li><Link to="/jobs">Browse jobs</Link></li>
                                <li><Link to="/jobs/detail/1020">Job detail</Link></li>
                                <li><Link to="/jobs/apply/1020">Apply for job</Link></li>
                                {/* {
                  logged && (
                    <li><Link to="/jobs/create">Post a job</Link></li>
                  )
                } */}
                                <li><Link to="/jobs/create">Post a job</Link></li>
                                <li><Link to="/candidates">Candidates</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default Navigation