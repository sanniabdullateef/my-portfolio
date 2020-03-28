import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class AboutMe extends Component {
    render() {
        return (
            <Grid className="about-me" style={{marginTop: '10px', paddingLeft:'10px'}}>
                <Cell col={6}>
                    <h2>About Me</h2>
                    <h4>I'm a Front-End Developer from Lagos, Nigeria</h4><br/>
                    <p>A graduate of Mathematics with workplace experience. Minor in Computer science and statistic. A focused individual with friendly personality, a good eye for detail and ability to work well independently, and as part of a team</p><br/>
                    <p>A self-taught Front-End developer with over 2years experience learning, exploring Front-End Javascript development using technologies like <br/>HTML5, CSS3, Bootstrap, Javascript, Vue (begineer).</p><br/>
                    <p>I enjoy taking complex problems and turning them into simple and beautiful interface designs. <br/> I also love the logic and structure of coding and always strive to write elegant and efficient code
                    whether it be HTML5, CSS, Bootstrap, Javascript or React. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Cell>
                <Cell col={6}>
                <img src="/Images/olanrewaju.JPG" 
                       alt="programmer" 
                       style={{height: '350px', width:'40%', marginTop:'80px', marginRight:'80px', marginLeft:'80px'}}/>
                </Cell>
            </Grid>
        )
    }
}

export default AboutMe