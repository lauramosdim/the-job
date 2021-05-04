const API_URL_BASE=process.env.REACT_APP_API_BASE || ''


const getAllJobs=async ()=>{

try{
    const response = await fetch(`${API_URL_BASE}/api/jobs`)
    const jobs= await response.json()
    return jobs
}
catch (error){
throw Error('something went wrong')
}   
}

const getJob=async (id)=>{
    try{
        const response = await fetch(`${API_URL_BASE}/api/jobs/${id}`)
        const job= await response.json()
        return job
    }
    catch (error){
    throw Error('something went wrong')
    }   
}

const createJob = async (job) => {
    try {
      const payload = {
        method: "POST",
        body: JSON.stringify(job),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
  
      const response = await fetch(`${API_URL_BASE}/api/jobs`, payload);
      const newJob = await response.json();
  
      return newJob;
    } catch (err) {
      throw Error("OHHPS");
    }
  };

export {
    getAllJobs,
    getJob,
    createJob

}