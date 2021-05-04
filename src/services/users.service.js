const getAllJobs=async ()=>{

try{
    const response = await fetch('http://localhost:3004/api/users')
    const jobs= await response.json()
    return jobs
}
catch (error){
throw Error('something went wrong')
}   
}

const getJob=async (id)=>{
    try{
        const response = await fetch(`http://localhost:3004/api/jobs/${id}`)
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