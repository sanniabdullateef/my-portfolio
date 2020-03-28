import React, { Component } from 'react'
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories (){
         
        if(this.state.activeTab === 0){
            return (
                <div className="html-project">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red ', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbkNTVQglAWSt6YatnNq_VdmsyeFJjSbFmplyBTu8w2KCfNiUJ) center / cover'}}>
                        HTML/CSS Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red ', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbkNTVQglAWSt6YatnNq_VdmsyeFJjSbFmplyBTu8w2KCfNiUJ) center / cover'}}>
                        HTML/CSS Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red ', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbkNTVQglAWSt6YatnNq_VdmsyeFJjSbFmplyBTu8w2KCfNiUJ) center / cover'}}>
                        HTML/CSS Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 4 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red ', height:'176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbkNTVQglAWSt6YatnNq_VdmsyeFJjSbFmplyBTu8w2KCfNiUJ) center / cover'}}>
                        HTML/CSS Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="html-project">
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png) center / cover'}}>
                        BootStrap Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png) center / cover'}}>
                        BootStrap Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png) center / cover'}}>
                        BootStrap Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png) center / cover'}}>
                        BootStrap Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>  
                </div>
               
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="html-project">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://www.w3schools.com/whatis/img_js.png) center / cover'}}>
                        JavaScript Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://www.w3schools.com/whatis/img_js.png) center / cover'}}>
                        JavaScript Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://www.w3schools.com/whatis/img_js.png) center / cover'}}>
                        JavaScript Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://www.w3schools.com/whatis/img_js.png) center / cover'}}>
                        JavaScript Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
               <div className="html-project">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/landscape/svelte-logo-vertical.png) center / cover'}}>
                        Svelte Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/landscape/svelte-logo-vertical.png) center / cover'}}>
                        Svelte Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/landscape/svelte-logo-vertical.png) center / cover'}}>
                        Svelte Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'red', height:'176px', background:'url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/landscape/svelte-logo-vertical.png) center / cover'}}>
                        Svelte Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
               </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div className="html-project">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'Red', height:'176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'Red', height:'176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'Red', height:'176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'Red', height:'176px', background:'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React Project
                    </CardTitle>
                    <CardText>This is my HTML (HyperText MarkUp Language) and CSS (Cascading Styling) Project built by me</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style ={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    } 
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab= {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>BootStrap</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Svelte</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Project