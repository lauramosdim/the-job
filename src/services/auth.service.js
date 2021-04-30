const API_URL_BASE=process.env.REACT_API_BASE || ''

export const registerAccount=async user=>{
    try { const payload={
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        }
    }
    const response = await fetch (`${API_URL_BASE}/api/users`, payload) 
    const newUser= response.json()
    return newUser
    } catch (error) {
        console.error(error)
    }
}

