import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getJob} from '../../services/jobs.service'


const JobDetail = () =>{ 
  const {id}=useParams()

  const [jobDetail,setJobDetail]=useState(null)

  const getJobDetail=async()=>{
   const job= await getJob(id)
   setJobDetail(job)
  }

useEffect(()=>{
  getJobDetail()
},[id])

console.log('jobDetail',jobDetail)

return  (
<section>
    <div className="container">
      <p>
        {jobDetail?jobDetail.about:null}
      </p>
      <br />
      <h4>Responsibilities</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non.
      </p>
      <ul>
   {jobDetail?jobDetail.responsibilities.map((responsibility,index)=>{
     return(
       <li key={index}>{responsibility}</li>
     )
   }):null}
      </ul>

      <br />
      <h4>Minimum qualifications</h4>
      <ul>
   {jobDetail?jobDetail.minimumQualifications.map((minimunQualification,index)=>{
     return(
       <li key={index}>{minimunQualification}</li>
     )
   }):null}
      </ul>


      <br />
      <h4>Preferred qualifications</h4>
      <ul>
   {jobDetail?jobDetail.preferredQualifications.map((preferredQualification,index)=>{
     return(
       <li key={index}>{preferredQualification}</li>
     )
   }):null}
      </ul>
    </div>
  </section>)
};

export default JobDetail;
