import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Profile() {
    const [profile, setProfile] = useState([])
    const learn_more = 'Learn more >'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/profile/`)
                setProfile(res.data[0])
                console.log(res.data)
            }   
            catch (err) {
            }
        }
        fetchData();
    }, []);

  return (
    <div className='profile-container'>
        <div className='row profile-parent'>
            <div className='col profile-details'>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        Hi, I'm Ilija.
                    </span>
                </div>

                <div className='profile-details-role'>
                    <span className='secondary-text'>
                        I'm a python developer from Montenegro
                            {/* <Typical
                            //  loop={Infinity}
                            wrapper="p"
                             steps={[
                                "Python Developer",
                                1000,
                             ]}
                             /> */}
                    </span>
                </div>

                <div className='learn-more'>
                    <span> {learn_more}</span>
                </div>

                {/* <div className='profile-options'>
                    <a href='#'download="#">
                        <button className='btn highlightet-btn'>Get CV</button>
                    </a>
                </div> */}
            </div>

            <div className='col profile-picture'> 
                <img src={profile.avatar} alt="" />
            </div>
        </div>
    </div>
  )
}
