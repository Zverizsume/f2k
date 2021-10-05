import React, { Component } from 'react'

import Link from 'next/link';
import { Navbar as HeaderNav, Nav, NavDropdown, Container } from 'react-bootstrap'

export default class Navbar extends Component {

    constructor(props) {
        super();
        this.state = {
            scrolled: props.scrolled
        };
    }

    componentDidMount() {
        if(this.state.scrolled !== 'disabled')
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        if(this.state.scrolled !== 'disabled')
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if(this.state.scrolled !== 'disabled')
        {
            if (window.scrollY > 20)
            {
                this.setState({ scrolled : true });
            } 
            else 
            {
                this.setState({ scrolled : false });
            }
        }
    };

    render() {
        return(
                          
            <HeaderNav fixed="top" variant='dark' expand="lg" className={this.state.scrolled ? 'nav_scrolled' : ''}>
                <Container>
                    <HeaderNav.Toggle aria-controls="basic-navbar-nav" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </HeaderNav.Toggle>
                    <HeaderNav.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link href="/"><a className="nav-link" >Home</a></Link>
                            <NavDropdown title="Insights" id="basic-nav-dropdown">
                                <Link href="/press"><a className="dropdown-item" >F2K Press</a></Link>
                                <Link href="/blog"><a className="dropdown-item" >F2K Blog</a></Link> 
                            </NavDropdown>
                            {/* <Link href="https://shop.f2k.gg"><a className="nav-link" >Shop</a></Link> */}
                            <Link href="/about"><a className="nav-link" >About Us</a></Link>
                        </Nav>
                    </HeaderNav.Collapse>
                </Container>
            </HeaderNav>

    )}
}