import React, { Component } from 'react'
import RegisterForm from '../components/RegisterForm'
import Login from '../components/Login'

export default class LandingPage extends Component {
    state = {
        new: false,
        existing: false
    }
    clicker (e) {
        this.setState({[e.target.id]: true})
    }
    render() {
        return (
        <div className="LandingPage">
            <h1 className="siteHeading">Habit.</h1>
            <div className="rightCol">
            {!this.state.new && <button id="new" onClick={(e)=>this.clicker(e)}>New User?</button>}
            {this.state.new && 
            <div className="new">
            <h3>Register</h3>
            <RegisterForm />
            </div>}
            {!this.state.existing && <button id="existing" onClick={(e)=>this.clicker(e)}>Existing User?</button>}
            {this.state.existing &&
            <div className="existing">
            <h3>Login</h3>
            <Login loggedInUser={this.props.loggedIn} setUserId={this.props.setUserId}/>
            </div>}
            </div>
        </div>
        )
    }
}
