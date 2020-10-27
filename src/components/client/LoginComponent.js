import React from 'react';
import './css/login.css';
class LoginComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username : "tantm",
      password : "admin"
    };
  }
  
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}
login = (e) => {
    e.preventDefault();
    if(this.state.username==="admin" && this.state.password==="admin"){
        sessionStorage.setItem("user",this.state.username);
        sessionStorage.setItem("pass",this.state.password);
        sessionStorage.setItem("is_login",true);
        
        this.props.history.push("/")
    }else{
        this.setState({
            error: "username or password are not correct!"
        });
    }
}


    render() {
    return(
          <div className="card-body text-center">
          <form class="login-page text-center"  method="POST">
          <h2>LOGIN</h2>

              <table>

                  <tbody>
                      <tr>
                          <td>
                          <label for="usernameField" class="">Username:</label>
                                    </td>
                                    <td>
                                        <input name="username" id="usernameField" type="text" class="form-control" required
                                            value={this.state.username}  onChange={this.handleChange}  />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="passField" class="">Password:</label>
                                    </td>
                                    <td>
                                        <input name="password" id="passField" type="password" class="form-control" required
                                            value={this.state.password} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" color="red">
                                        {this.state.error}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button class="mt-1 btn btn-primary" type="submit">Login</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
      </div>
    );
    }
  }

export default LoginComponent;
