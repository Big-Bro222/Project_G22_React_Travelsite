import React, { Component } from 'react';
import { Affix, Menu, Icon } from 'antd';
import "./Navbar.css";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
class Navbar extends Component {
    state = {
        top: 0,
    }
    logout=e=>{
        e.preventDefault();
        firebase.auth().signOut().then(console.log('signout')
        ).catch(function(error){console.log(error)});
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
              console.log(user)
              this.setState({
                authenticated: true,
              });
            } else {
              this.setState({
                authenticated: false,
              });
              console.log('not logged in')
            }
          });
      }
    render() {
        return (
            <div>
                <header>
                    <Affix offsetTop={this.state.top}>
                        <Menu mode="horizontal" className="background">
                            <Menu.Item style={{ float: "left" }}>
                                <Icon type="smile" style={{color:"#ffffff"}} theme="filled" />
                            </Menu.Item>
                            <Menu.Item key="alipay">
                            <h1 style={{color:"#ffffff", marginBottom:"0px"}}><Icon type="rocket" theme="filled"/>TRAVEL &nbsp; PLANNER <Icon type="rocket" theme="filled" /></h1>
                            </Menu.Item>
                            <Menu.Item style={{ float: "right" }}>
                            <Link to='/SignIn'><Button style={{color:'red'}} onClick={this.logout}>Log out</Button></Link>
                            </Menu.Item>
                        </Menu>
                    </Affix>
                </header>
            </div>
        );
    }
}

export default Navbar;