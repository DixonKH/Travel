import React, {useState, useRef} from 'react'

function UserForm() {
  const [firstName, setFirstName] = useState(''); 
  const [nameValid, setNameValid] = useState(true);
  let userName = useRef();

  function onChangeName(e) {
    setFirstName(e.target.value);
  }
  function onSubmitHandler(e) {
     e.preventDefault();  
     if(firstName.trim() === '') {
      setNameValid(false);
        return;
     }
     setNameValid(true);  
    console.log(firstName);
    setFirstName('');
    // console.log(userName.current.value);
    // userName.current.value = "";
    
  }
  return (
    <>
      <div>
        <div className='modal-container'>
           <h3>Create New User</h3>
           <div className='user-form'>
             <form className='form-container' onSubmit={onSubmitHandler}>
                <div>
                    <input className='name-input' type='text' onChange={onChangeName} value={firstName} ref={userName} placeholder='Firs Name' />
                   { !nameValid && <div><span style={{color: 'red'}}>First name is required field</span></div> }
                    <input className='name-input' type='text' placeholder='Last Name' /> 
                </div>
                <div>
                    <input type='email' className='email-input' placeholder='Email...' /> 
                </div>
                <div>
                    <input type='password' className='password-input' placeholder='Password' /> 
                    <input type='password' className='password-input' placeholder='Confirm Password' /> 
                </div>
                <div>
                    <select name="country" className='city-input'>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>    
                    </select>
                    <select name="city" className='city-input'>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Houston">Houston</option>        
                    </select>
                </div>
                <div>
                    <input type='date' className='date-input' placeholder='Date of Birth' />
                    <select name='gander' className='date-input'>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>        
                    </select>
                </div>
                <button type='submit' className='add-user-btn'>Create User</button>
             </form>
           </div>
        </div>
      </div>
    </>
  )
}

export default UserForm
