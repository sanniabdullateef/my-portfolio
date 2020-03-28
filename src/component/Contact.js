import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
               <Grid className="contact-grid">
                  <Cell col={6}>
                      <h2>Sanni Abdullateef <br/> Olanrewaju</h2>
                      <img src="/Images/olanrewaju.JPG" 
                       alt="avatar" style={{height: '250px'}}
                       />
                       <p style={{ width:'75%', margin:'auto', paddingTop: '1em'}}>	A graduate of Mathematics with workplace experience. Minor in Computer science and statistic. A focused individual with friendly personality, a good eye for detail and ability to work well independently, and as part of a team
 I currently seek a software engineer role in an organization that duly compensate tech skills and enables one to expand beyond capabilities through algorithms and web technologies
Well-versed in Programming Language like <br/> HTML, CSS, BOOTSTRAP, JAVASCRIPT and ReactJS.  
</p>
                  </Cell>
                  <Cell col={6}>
                      <h2>Contact Me</h2>
                      <hr/>

                      <div className="Contact-list">
                      <List>
                       <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                             [+234] 903-1259-895
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                            <i className="fa fa-fax" aria-hidden="true"/>
                             [+234] 8053759564
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                             Slateef39@gmail.com
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                            <i className="fa fa-skype" aria-hidden="true"/>
                             slateef39@outlook.com
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'anton'}}>
                            <i className="fa fa-twitter" aria-hidden="true"/>
                             @lateefknows01
                            </ListItemContent>
                        </ListItem>
                       
                 </List>
                      </div>
                  </Cell>
               </Grid> 
            </div>
        )
    }
}

export default Contact