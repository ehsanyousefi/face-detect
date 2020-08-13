import React from 'react'
import './Register.css'

class Register extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }
  
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignUp = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        }
      })
  }

  render() {
    return (
      <div>
        <div className="wrapper fadeInDown">
          <div id="formContent">

            <h2 className="active">Register</h2>

            <div className="fadeIn first">
            </div>

            <div>
              <input onChange={this.onNameChange} type="text" id="name" className="fadeIn second" name="name" placeholder="Name" />
              <input onChange={this.onEmailChange} type="text" id="login" className="fadeIn second" name="login" placeholder="Email" />
              <input onChange={this.onPasswordChange} type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
              <input id="click" onClick={this.onSubmitSignUp} type="submit" className="fadeIn fourth" value="Register" />
            </div>

            <div id="formFooter">
              <h3 onClick={() => this.props.onRouteChange('signin')} className="underlineHover">Sign In</h3>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Register
