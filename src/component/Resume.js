import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Language from './Languaage'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style ={{textAlign:'center'}}>
                        <img src="/Images/olanrewaju.JPG" 
                       alt="avatar" 
                       className="avatar-img" style={{height: '250px'}}/>
                        </div>

                        <h2 style={{paddingTop:'2em'}}>Sanni Abdullateef</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833f', width: '50%'}}/>
                        <p>A graduate of Mathematics with workplace experience. Minor in Computer science and statistic. A focused individual with friendly personality, a good eye for detail and ability to work well independently, and as part of a team
                           I currently seek a software engineer role in an organization that duly compensate tech skills and enables one to expand beyond capabilities through algorithms and web technologies
                           Well-versed in Programming Language like <br/> HTML, CSS, BOOTSTRAP, JAVASCRIPT and ReactJS.</p>
                     <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                     <h5>Address</h5>
                     <p>No 2, Lala Street, Off Lamination, Ipaja Ayobo, Lagos State</p>
                     <h5>Phone</h5>
                     <p>[+234] 903-1259-895</p>
                     <h5>Email</h5>
                     <p>Slateef39@gmail.com</p>
                     <h5>Web</h5>
                     <p>mywebsite.com</p>
                     <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                          startYear={2014}
                          endYear = {2018}
                          schoolName="University of Ilorin, Ilorin"
                          schoolDescription= "Bsc. Pure and Applied Mathematics Minor in Computer Science"
                        />

                        <Education 
                          startYear={2011}
                          endYear={2013}
                          schoolName="Kwara State Polytechnic, Ilorin"
                          schoolDescription="National Diploma in Mechanical Engineering"
                        />

                        <Education 
                          startYear={2005}
                          endYear={2010}
                          schoolName="Adam Yakub Memorial High School, Lagos State"
                          schoolDescription="Sciences"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience 
                          startYear={'November 2018'}
                          endYear={'October 2019'}
                          jobName={'Corp Member, Al-Eeman Science School, Ibadan, Oyo State'}
                          jobDescription='Computer Operator , Mathematics Teacher, FurtherMathematics Teacher'
                        />

                        <Experience 
                          startYear={'Feburary 2016'}
                          endYear={'September 2018'}
                          jobName={'Computer Operator, Solarex Institue of Technology,Ilorin, Kwara State'}
                          jobDescription='I ensured the computer software are running as required.
                          I did some basic office management tasks like: Typeset documents using some Microsoft packages, dispatching files and mails to different 
                          customers as regards our product and posting of additional information to the oracle section for update'
                        />

                       <Experience 
                          startYear={'January 2014'}
                          endYear={'November 2014'}
                          jobName={'Internship, Engineering Solution Nigeria Limited, Ikeja, Lagos State'}
                          jobDescription='Sales Support Engineer , SEW Eurodrive Motor, Department, Computer Operators'
                        />

                        <Experience 
                          startYear={'October 2013'}
                          endYear={'December 2013'}
                          jobName={'Internship, First Aluminium Company, Ikeja, Lagos State'}
                          jobDescription='Maintenance Department , Using of Lathe Machine, Department'
                        />

                        <Experience 
                          startYear={'August 2012'}
                          endYear={'November 2012'}
                          jobName={'Siwes, Kwara State Polytechnic Workshop, Ilorin, Kwara State'}
                          jobDescription='Worked at Mechanical Engineering ,Worked at Electrical Engineering'
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                          Skills='Excel/Word'
                          progress={100}
                          buffer={100}
                        />

                         <Skills 
                          Skills='Windows/Unbuntu'
                          progress={90}
                          buffer={100}
                        />

                         <Skills 
                          Skills='Sublime Text/Visual Studio/Git'
                          progress={90}
                          buffer={100}
                        />

                        <Skills 
                          Skills='HTML/CSS'
                          progress={100}
                        />

                        <Skills 
                          Skills='BootStrap'
                          progress={100}
                        //   buffer={100}
                        />

                        <Skills 
                          Skills='JavaScript'
                          progress={80}
                          buffer={100}
                        />

                        <Skills 
                          Skills='ReactJs'
                          progress={70}
                          buffer={100}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                         <h2>Language</h2>
                         <Language 
                          Language='English'
                          progress={99}
                         />

                        <Language 
                          Language='Arabic'
                          progress={50}
                         />

                        <Language 
                          Language='Yoruba'
                          progress={100}
                         />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume