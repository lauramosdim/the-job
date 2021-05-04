import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser} from '@fortawesome/fontawesome-free-solid';
import {registerAccount, getEmails} from '../../../../services/auth.service'
import { useHistory} from 'react-router-dom'


const FormRegister=()=>{

// const [loginInfo, setLoginInfo]=useState({})

// const handleChange=(evt) =>{
//     setLoginInfo({
//       [evt.target.name]: evt.target.value,
//         });
//   }

const [form, setForm]=useState({})
const history=useHistory()

const handleChange=({target})=>{
  const {name,value}=target
console.log('soy el form',form)
  setForm({...form,[name]:value})
}

  const handleSubmit=async(evt)=> {
    evt.preventDefault();
    // handleSave(form);
    
    const newUser={
      ...form
      }

      try {

        const userList=await getEmails()
        console.log('userList',userList)   
        let emailExists=false
        userList.map(user=>{
          if (user.email===newUser.email){
            emailExists=true
          }
          return emailExists
        })

        if(emailExists){
          alert ('El usuario ya existe')
        }else{
          const userRegistered=await registerAccount(newUser)
          console.log('soy un nuevo usuario',userRegistered)   
          delete userRegistered.password     
          localStorage.setItem('THE_JOB_APP',JSON.stringify(userRegistered))
          history.push('/')

        }

       
      } catch (error) {
        console.error(error)
        
      }
  }

const validateForm=() =>{
        const { name, email, password } = form;
    
        return (email && email.length > 0) &&
          (password && password.length > 0) &&
          (name && name.length > 0);
      }

    return (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Your name"
                required
                onChange={handleChange}
              />
            </div>
          </div>
  
          <hr className="hr-xs" />
  
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
          </div>
  
          <hr className="hr-xs" />
  
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <FontAwesomeIcon icon={faLock} size="1x" />
              </span>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <FontAwesomeIcon icon={'dice'} size="1x" />
              </span>
              <select
                name="role"
                onChange={handleChange}
              >   <option>Admin</option>
                  <option>Candidate</option>
                </select>
            </div>
          </div>
{/* preguntar en qué momento el botón hace las validaciones */}
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={!validateForm}
          >
            Login
          </button>
  
        </form>
      );
}

export default FormRegister