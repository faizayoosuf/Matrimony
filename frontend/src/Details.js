import {useNavigate} from 'react-router-dom';
import './Details.css';
import logo from './images/logo_icon.svg';
import userpic from './images/userpic.png';
import profile from './images/profilepic.webp';
export default function Details()
{
  
    return(
       <><div className='details_row1'>
            <img src={logo}></img>
            <div className='labels'>
                <label>MY HOME</label>
                <label>SEARCH</label>
                <label>MATCHES</label>
                <label>UPGRADE NOW</label></div>
            <div className='details_row1_image'>
                <img src={userpic}></img>
            </div>
        </div><div className='details_row2'>
                <div className='details_row2_col1'>
                    <img src={profile}></img></div>

                <div className='details_row2_col2'>
                    <div className='details_name'>
                        <label>Aswathy AB</label></div>
                    <div className='details_profilenum'>
                        <label>E5939741 | Profile created by Self | Active - 1 week ago</label></div>
                    <div className='details_ver'>
                        <label>Verified</label></div>
                    <div className='details_age'>
                        <label>27 years and 9 months, 4'7"</label></div>
                    <div className='details_moth'><label>Mother Tongue is Malayalam</label></div>
                    <div className='details_lang'><label>24 Manai Telugu Chettiyar</label></div>
                </div>
                <div className='details_row2_col3'>
                    <div className='place'><label>Lives in Rangat</label></div>
                    <div className='quali'><label>Studied in B.A. Degree</label></div>
                    <div className='work'><label>Not working</label></div>
            </div>
            </div>
            <div className='about_profile'>
            <div className='main_head'><label>About her</label></div>
            <div className='main_head_detail'><label>I belong to a middle class family with moderate values</label></div>
            </div>
            </>
        
        )
    }