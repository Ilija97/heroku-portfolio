import React, { useState } from 'react';
import './ContactMe.css';


export default function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // function submit(e) {
    //   e.preventDefault();
    //   Axios.post(url, {
    //     req_skills: data.req_skills,
    //     opt_skills: data.opt_skills,
    //     experience: data.experience,
    //     country: data.country,
    //     num: data.num
    //   })
    //   .then(res=>{
    //     // console.log(res.data)
    //     // console.log(res.data.candidates)
    //     const new_candidates = {...res.data}
    //     // console.log(new_candidates)
    //     setCandidates(new_candidates)
    //     console.log(candidates.candidates)
    //     setLoading(false)
    //   })
    // }
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Thank you`)
    }

  return (
    <div>
        <div>
            <span className='contact-me-text'> Contact me</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" onSubmit={handleSubmit}>Send</button>
        </form>
        <div>
                    <div className='icon'>
                        <a href='https://me.linkedin.com/in/ilija-gracanin-300936102'>
                            <i className='fa fa-linkedin-square color-orange'></i>
                        </a>
                        <a href='https://github.com/Ilija97'>
                            <i className='fa fa-github-square color-orange'></i>
                        </a>
                        <a href='https://www.instagram.com/ilija_gracanin/'>
                            <i className='fa fa-instagram color-orange'></i>
                        </a>
                    </div>
                </div>
    </div>
  )
}
