import React, {Component} from 'react'

class Github extends Component {
    state = {
        username: "",
    }

    handleChange = (ev) => {
        this.setState({username: ev.target.value})
    }

    render() {
        return (
            <div className="github">
                <img className="github-logo" 
                     src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" 
                     alt="github logo"
                />
                <form>
                    <div>    
                        <input type="text" 
                               value={this.state.username} 
                               onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look Up Github User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Github