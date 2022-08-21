import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Project.css';
import { Link } from 'react-router-dom';


export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/portfolio/`)
                setProjects(res.data)
                console.log(res.data)
            }   
            catch (err) {
            }
        }
        fetchData();
    }, []);

    const getProjects = () => {
        let list = [];
        let result = [];
        
        projects.map(projectPost => {
            return list.push(
                <div className="project">
                    <Link to="/projects" >
                        <img  className='project-img' src={projectPost.image} alt='thumbnail' />
                    </Link>
                    <h3 className='project-name'> {projectPost.name} </h3>
                    <p className='project-desc'> {projectPost.description} </p>
                    {/* <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link> */}
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row project-row'>
                    <div className='col-md-3'>
                        {list[i]}
                    </div>
                    <div className='col-md-3'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                    <div className='col-md-3'>
                        {list[i+2] ? list[i+2] : null}
                    </div>
                </div>
            )
        }

        return result;
    };


  return (
    <div className='projects-section'>
        <div>
            <span className='projects-text'> Projects </span>
        </div>
        {getProjects()}
    </div>
  )
}
