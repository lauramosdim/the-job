/* eslint-disable */
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {getAllJobs} from '../../services/jobs.service'


const RecentJobs = () => {


  const[jobs,setJobs]=useState([])

  useEffect(async ()=>{
    const jobsInfo= await getAllJobs()
    setJobs(jobsInfo)
  },[])

 
  return(
  
    <section>
    <div className="container">
      <header className="section-header">
        <span>Latest</span>
        <h2>Recent jobs</h2>
      </header>

      <div className="row item-blocks-connected">
        {jobs.length?jobs.map((job) => (
          <div className="row item-blocks-connected" key={job.id}>
            <div className="col-xs-12">
              <Link className="item-block" to={`/jobs/detail/${job.id}`}>
                <header>
                  <img src={job.image} alt={job.company} />
                  <div className="hgroup">
                    <h4>{job.title}</h4>
                    <h5>{job.company}</h5>
                  </div>
                  <div className="header-meta">
                    <span className="location">{job.location}</span>
                    <span className="label label-success">{job.type}</span>
                  </div>
                </header>
              </Link>
            </div>
          </div>
        )):'loading'
        }
      </div>

      <br /><br />
      <p className="text-center">
        <Link className="btn btn-info" to="/jobs">Browse all jobs</Link>
      </p>
    </div>
  </section>
)};

export default RecentJobs;
