import React from 'react'
import './AboutMe.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Skills from '../../components/Skills'


export default function AboutMe() {
    const [profile, setProfile] = useState({
        bio: "none",
        skills: [],
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/profile/`)
                setProfile(res.data[0])
            }   
            catch (err) {
            }
        }
        fetchData();    
    }, []);

    console.log(profile)

  return (
    <div className='about-me-section'>
        <div className='d-flex flex-column'>
            <span className='about-me-text'> About me</span>
            <span className='why-text-sub'> Why choose me? </span>
            <div className='col justify-content-center about-me-container'>
                <div className='d-flex flex-column'>
                    <span className='text-about-me'>
                        {profile.bio}
                    </span>
                </div>
                <div className='d-flex flex-column'>
                    <span className='skills'> Skills </span>
                    <span>
                        <Skills skills={profile.skills}/>
                        {/* <ul className='list-skills'>
                            <li>sdds</li>
                            <li>sdds</li>
                        </ul> */}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
