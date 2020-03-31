import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'


class LandingPage extends Component {
    render() {
        return (   
            <div style= {{width: '100%', margin: 'auto' }}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                       <img src="/Images/olanrewaju.JPG" 
                       alt="avatar" 
                       className="avatar-img" style={{height: '250px', borderRadius:'50%'}}/>
                     <div className="banner-text">
                        <h1>Frontend Developer </h1> 
                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | ReactJS | SvelteJS</p>
                        <div className="social-links">

                            {/* google */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-google" aria-hidden="true" />
                            </a>

                            {/* linkedin link */}
                            <a href="https://www.linkedin.com/in/sanni-olanrewaju-b805ab89/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                             {/* Github */}
                             <a href="https://github.com/sanniabdullateef" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                             {/* freecodecamp */}
                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>

                        </div>
                         </div>  
                   </Cell>
               </Grid>
               </div>
        )
    }
}

export default LandingPage