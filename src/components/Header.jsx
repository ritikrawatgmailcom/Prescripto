import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        {/*-----Left Side----- */}
        <div>
            <p>
                Book Appointment <br />With Trusted Doctors
            </p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br /> schedule  ypur appointment hassle-free.</p>
            </div>
            <a href="">Book appointment <img src={assets.arrow_icon} alt="" /></a>

        </div>
        {/* -----Right Side---- */}
        <div>
            <img src={assets.header_img} alt="" />

        </div>
    </div>
  )
}

export default Header