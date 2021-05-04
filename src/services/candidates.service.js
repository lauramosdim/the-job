const getAllCandidates=async ()=>{

try{
    const response = await fetch('http://localhost:3004/api/jobs')
    const jobs= await response.json()
    return jobs
}
catch (error){
throw Error('something went wrong')
}   
}

const getCandidate=async (id)=>{
    try{
        const response = await fetch(`http://localhost:3004/api/jobs/${id}`)
        const job= await response.json()
        return job
    }
    catch (error){
    throw Error('something went wrong')
    }   
}

const createCandidate=(job)=>{
return job
}

export {
    getAllCandidates,
    getCandidate,
    createCandidate

}