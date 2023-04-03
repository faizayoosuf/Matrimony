import './Log.css';
import {useNavigate} from 'react-router-dom';
export default function Log()
 {
  const Find=useNavigate()
  function handleclick1(){
    Find("/Search")
  }
  return (
   
    <div className='log_row1_out'>
    <div className="log_row1">
      <label>Login</label>
    </div>
    <div className='log_row2'>
      <label>Matrimony Id/Mobile No./E-mail</label>
      <input type='text'></input>
      <label>Password</label>
      <input type='text'></input>
      <div className='log_row3'>
      <input type='checkbox'></input>
      <label>  Keep me logged in</label>
      </div>
      <div className='log_row4'>
      <button onClick={handleclick1}>LOGIN</button>
      </div>
      <label>Forgot Password? | Login Via OTP</label>
    </div>
    </div>
  )
 }