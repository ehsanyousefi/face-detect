import React from 'react'
import './Signin.css'

class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
  this.setState({signInEmail: event.target.value})
  }
  
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
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

            <h2 className="active">Sign In</h2>
    

            <div className="fadeIn first">
            </div>

            <div>
              <input onChange={this.onEmailChange} type="text" id="login" className="fadeIn second" name="login" placeholder="Email" />
              <input onChange={this.onPasswordChange} type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
              <input id="click" onClick={this.onSubmitSignIn} type="submit" className="fadeIn fourth" value="Log In" />
            </div>

            <div id="formFooter">
              <h3 onClick={() => this.props.onRouteChange('register')} className="underlineHover">Sign Up</h3>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Signin
