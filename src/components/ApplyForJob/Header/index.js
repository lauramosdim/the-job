import React from 'react';
import {Link} from 'react-router-dom'

const Header = ({job}) => {

  const {company, image,location,title,ago,id}=job

  return( 
  <header className="page-header bg-img size-lg" style={{ backgroundImage: 'url(/img/bg-banner1.jpg)' }}>
  <div className="container no-shadow">
    <h1 className="text-center">Apply for the job</h1>
    <p className="lead text-center">
      Apply with your online resume, create new resume for the job,
      or make a custom application.
    </p>

    <hr />
    <Link className="item-block item-block-flat" to={`/job/${id}`}>
      <header>
        <img src={image} alt="Logo" />
        <div className="hgroup">
          <h4>{title}</h4>
          <h5>{company}</h5>
        </div>
        <div className="header-meta">
          <span className="location">{location}</span>
          <time>{ago}</time>
        </div>
      </header>
    </Link>

    <div className="button-group">
      <div className="action-buttons">
        <a className="btn btn-primary" href="#sec-resume">Apply now</a>
      </div>
    </div>

  </div>
</header>)
 
};

Header.defaultProps={
job:{
  company:'',
  image:'',
  location:'',
  title:'',
  ago:'',
}

}

export default Header;
