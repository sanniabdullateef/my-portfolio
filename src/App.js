import React, { Component } from 'react';
import { Layout, Navigation, Drawer, Content, Header } from 'react-mdl';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Main from './component/Main';
import { Link } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color:'red'}} to="/">MyPortfolio</Link>}  >
        <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main /> 
        </Content>
    </Layout>
</div>
        );
    }
}