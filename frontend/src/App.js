import logo from './images/logo_icon.svg';
import img11 from './images/img1.webp';
import img22 from './images/img2.webp';
import img33 from './images/img3.webp';
import img44 from './images/img4.webp';
import img55 from './images/img5.webp';
import './App.css';
import {useNavigate} from 'react-router-dom';

function App()
 {
  const navigate=useNavigate();
  function handleclick(){
    navigate("/Registration")
  }
    const Logg=useNavigate();
    function handleclickk(){
      Logg("/Log")
    }
  
  return (
    <><div className="homepage_row1">
      <div className="homepage_row1_left">
        <img src={logo}></img>
        <div className="homepage_row1_left_label">
          <label className="homepage_row1_left_label_l1">
            ChristianMatrimony.com
          </label>
          <label>From Matrimony.com Group </label>
        </div>
      </div>

      <div className="homepage_row1_right">
        <label>Already a member?</label>

        <div>
          <button onClick={handleclickk}> Log In</button>
        </div>
      </div>
    </div>

    <div className='homepage_row2'>
      <div className= "homepage_row2_inner">
        <label className="homepage_row2_inner_row1">
          No. 1 and official matrimony service exclusively for Christians
        </label>
        <label>
          Meet your Christian soulmate here!
        </label>
        <div className='homepage_row2_inner_row3'>
          <div className='homepage_row2_inner_row3_col1' >
            <label>Matrimony profile for</label>
             <select>
              <option>Self</option>
              <option>Relative</option>
              <option>Friend</option>
              <option>Myself</option>
             </select>
             </div>
             <div className="homepage_row2_inner_row3_col2">
              <label>Name</label>
                <input type={"text"} placeholder="name" />
             </div>
          <div className="homepage_row2_inner_row3_col3">
           < label>Mobile numbers</label>
           <input type={"text"} placeholder="mobile number"/>
          </div>
          <button onClick={handleclick}>Register Free
          </button>
          </div>
          <label className='homepage_row2_inner_row4'>
            By clicking on Register Free, you agree to <span>terms & conditions</span> and<span>Privacy Policy</span>
            </label>
      </div>

    </div>

    <div className="homepage_row3">
        <div className='homepage_row3_text'>
          <div><img src={img11}></img> </div>
          <label>10+ years of service in helping Christians cherish the meaning of Happy marriage</label>
        </div>
        <div className='homepage_row3_text'>
          <div><img src={img22}></img> </div>
          <label>2 Lakh+ people have found their life partner using our services</label>
        </div>
        <div className='homepage_row3_text'>
          <div><img src={img33}></img> </div>
          <label>2020's winner of 'India's Growth Champions Award' by The Economic Times</label>
        </div>
        <div className='homepage_row3_text'>
          <div><img src={img44}></img> </div>
          <label>1 Lakh+ genuine profiles with 100% verified phone numbers</label>
        </div>
        <div className='homepage_row3_text'>
          <div><img src={img55}></img> </div>
          <label>130+ branches across India to serve you better</label>
        </div>
 

      </div></>
  );
}

export default App;
