import React, { Component } from 'react';
import About from './About/About'
import SideNav from './SideNavAbout/SideNavAbout'
import './AboutScrum.css'

class AboutScrumView extends Component {
    state = {
        posts: []
    }
    //init contentful
    client = require('contentful').createClient({
        space: 'n041sndlsw1t',
        accessToken: 'Bu4RwmRWubJ2JzRGJxE-uf1ikkfpCa7XoUgVMx12pnE'
    });
    //fetch on componen mount and re render
    componentDidMount() {
        this.fetchPosts()
            .then(this.setPosts)
    };

    fetchPosts = () => this.client.getEntries()

    setPosts = response => {
        this.setState({
            posts: response.items,
        })
    };

    render() {

        return (
            <>
                <SideNav />
                <div className="about-container">
                    <div className="about-item" id="section1">

                        {this.state.posts.map(({ fields }, i) =>
                            <About key={i} {...fields} />
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default AboutScrumView;
