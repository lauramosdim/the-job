const API_URL_BASE=process.env.REACT_API_BASE || ''


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

const createJob=(job)=>{
return job
}

export {
    getAllJobs,
    getJob,
    createJob

}