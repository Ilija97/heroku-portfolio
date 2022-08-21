import React, { useDebugValue } from "react";
import './Skills.css'

export default function Skills(props) {
    // const skills = props.skills;
    // console.log(props.skills)
    // const skills = props.skills.map(({ name }) => name);
    // console.log(skills)
    // const listItems = skills.map((skill) =>
    //     <li key="{skill}"> {skill} </li>
    // );
    const value = props.skills
    // const value = [
    //     {
    //         name: "python",
    //         score: 50
    //     },
    //     {
    //         name: "js",
    //         score: 50
    //     },
    //     {
    //         name: "java",
    //         score: 50
    //     },
    //     {
    //         name: "machine learning",
    //         score: 50
    //     }
    // ]

    return (
        <div className="row skill-score">
            {value.map((value, index) => {
                return (
                    <div className="col-lg-4 col-mg-6 col-sm-12 my-2">
                        <span className="skill"> {value.name} </span>
                        <div className="progress-some">
                            <div className="progress-new" style={{width: value.score +'%'}} >
                            </div>
                        </div>
                    </div>
                )
                
                }
            )
}

        </div>
        // <ul>{listItems}</ul>
    )
}
