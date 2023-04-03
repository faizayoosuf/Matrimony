import './Search.css';
import imge from './images/searchimg.jpg';
import logo from './images/logo_icon.svg';
import userpic from './images/userpic.png';
import pic from './images/profilepic.webp';
import {useNavigate} from 'react-router-dom';
export default function Search()

{
    const Det=useNavigate()
    function handleclick2(){
      Det("/Details")
    }
    return(
    <><div className='search_back_row1'>
            <img src={imge}></img>
            <div className='search_back_rows'>
                <div className='search_row1'>
                    <img src={logo}></img>
                    <label>MY HOME</label>
                    <label>SEARCH</label>
                    <label>MATCHES</label>
                    <label>UPGRADE NOW</label>
                    <div className='search_row1_image'>
                        <img src={userpic}></img>
                    </div>
                </div>
                <div className='search_bar_row1'>
                    <input type='text'></input>
                    <button>SEARCH</button>
                </div>
            </div>
        </div><div className='search_row2_out'>
                <div className='search_row2'>
                    <img onClick={handleclick2} src={pic}></img>
                    <div className='search_details_col1'>
                        <label className='search_details_head'> WTTRR**</label>
                        <label>26 Years, 5'5"</label>
                        <label>Mumbai</label>
                        <label>Hindu,Brahmin</label>
                        <label>Bhumihar</label>
                        <label>Hindi-UP/UK</label>
                    </div>
                    <div className='search_details_col2'>
                        <label>BHMS</label>
                        <label>Doctor</label>
                        <label>₹ 0 - 1 Lakh</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div>
            <div className='search_row2_out'>
                <div className='search_row2'>
                    <img src={pic}></img>
                    <div className='search_details_col1'>
                        <label className='search_details_head'> WTTRR**</label>
                        <label>26 Years, 5'5"</label>
                        <label>Mumbai</label>
                        <label>Hindu,Brahmin</label>
                        <label>Bhumihar</label>
                        <label>Hindi-UP/UK</label>
                    </div>
                    <div className='search_details_col2'>
                        <label>BHMS</label>
                        <label>Doctor</label>
                        <label>₹ 0 - 1 Lakh</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div><div className='search_row2_out'>
                <div className='search_row2'>
                    <img src={pic}></img>
                    <div className='search_details_col1'>
                        <label className='search_details_head'> WTTRR**</label>
                        <label>26 Years, 5'5"</label>
                        <label>Mumbai</label>
                        <label>Hindu,Brahmin</label>
                        <label>Bhumihar</label>
                        <label>Hindi-UP/UK</label>
                    </div>
                    <div className='search_details_col2'>
                        <label>BHMS</label>
                        <label>Doctor</label>
                        <label>₹ 0 - 1 Lakh</label>
                        <label>Never Married</label>
                    </div>
                </div>
            </div></>
                )
                }