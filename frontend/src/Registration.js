import './Registration.css';
import logo from './images/logo_icon.svg';
import reglogo from './images/regimg.webp';
export default function Registration()
{
    return(
        <><><><div className="regpage_row1">
            <div className="regpage_row1_left">
                <img src={logo}></img>
                <div className="regpage_row1_left_label">
                    <label className="regpage_row1_left_label_l1">
                        ChristianMatrimony.com
                    </label>
                    <label>From Matrimony.com Group </label>
                </div>
            </div>
        </div></>
            <div className='regpage_row3_out'>
                <div className='regpage_row2'>
                    <label> Great! You have completed <span> 20%</span>  </label>
                </div>
                <div className='regpage_row3'>
                    <div className='regpage_row3_col1'>
                        <img src={reglogo}></img>
                        <label> Trusted by Christians across the world!</label>
                    </div>
                    <div className='regpage_row3_col2_head'>
                        <label>Please provide with us with your basic details</label>

                        <div className='regpage_row3_col2'>
                            <div className='regpage_row3_col2_1'>
                                <label>Date of birth</label>
                                <input type='text'></input>
                            </div>
                            <div className='regpage_row3_col2_2'>
                                <label>Denomination</label>
                                <input type='text'></input>
                            </div>
                            <div className='regpage_row3_col2_2'>
                                <label>Division</label>
                                <input type='text'></input>
                            </div>
                            <div className='regpage_row3_col2_2'>
                                <label>Subcaste(optional)</label>
                                <input type='text'></input>
                            </div>
                            <div className='regpage_row3_col2_2'>
                                <label>Mother tongue</label>
                                <input type='text'></input>
                            </div>
                            <div className='regpage_row3_col2_2'>
                                <label>Email id</label>
                                <input type='text'></input>
                            </div>
                            <div className='regpage_row3_col2_2'>
                                <label>Password</label>
                                <input type='text'></input>
                            </div>
                            <div className='regpage_row3_col2_button'>
                                <button>CONTINUE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </><div className='regpage_row4'>
                <label>Copyright © 2022. All rights reserved.</label>
            </div></>
        )
    }
