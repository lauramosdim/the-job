import React from 'react';
import Header from './Header';
import Main from './Form';
import {useParams} from 'react-router-dom'
import { getJob } from '../../services/jobs.service';
import { useEffect, useState } from 'react/cjs/react.development';


const ApplyJob = () => {

const [jobDetail,setJobDetail]=useState(null)
const {id}=useParams()

const getJobDetail =async()=>{
  const job =await getJob(id)
  setJobDetail(job)
}

useEffect(()=>{
  getJobDetail()
},[id])



  return(
  <div>
{  jobDetail?  <Header job={jobDetail}/>:null}
    <Main />
  </div>
)};

export default ApplyJob;
