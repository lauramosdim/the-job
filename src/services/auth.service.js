const API_URL_BASE=process.env.REACT_APP_API_BASE || ''

console.log('urlbase',API_URL_BASE)

const registerAccount=async (user)=>{
    console.log('urlbase2',API_URL_BASE)
    try { const payload={
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        }
    }
        const response = await fetch (`${API_URL_BASE}/api/users`, payload) 
    const newUser= await response.json()
    return newUser
    } catch (error) {
        console.error(error)
    }
}

const getEmails=async ()=>{

    try{
        const response = await fetch(`${API_URL_BASE}/api/users`)
        const users= await response.json()
        return users
    }
    catch (error){
    throw Error('something went wrong')
    }   
}


const forgotPassword = () => {}

const loginAccount = () => {}

export { loginAccount, registerAccount, forgotPassword, getEmails}
