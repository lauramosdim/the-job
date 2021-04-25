import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/fontawesome-free-solid';

const FormRegister=({handleSave})=>{

const [loginInfo, setLoginInfo]=useState({})

const handleChange=(evt) =>{
    setLoginInfo({
      [evt.target.id]: evt.target.value,
    });
  }

  const handleSubmit=(evt)=> {
    evt.preventDefault();
    handleSave(loginInfo);
  }


  const validateForm=() =>{
        const { name, email, password } = loginInfo;
    
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
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={handleChange
                }
              />
            </div>
          </div>
{/* preguntar en qué momento el botón hace las validaciones */}
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </button>
  
        </form>
      );
}

export default FormRegister