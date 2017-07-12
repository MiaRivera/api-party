import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'
import YodaResult from './YodaResult'

class Yoda extends Component {
    state = {
        sentence: "",
    }

    handleChange = (ev) => {
        this.setState({sentence: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/yoda/${this.state.sentence}`)
        this.setState({sentence: ""})
    }

    render = () => {
        return (
            <div className="yoda">
                <img className="yoda-img"
                     src="https://vignette2.wikia.nocookie.net/starwars/images/4/45/Yoda.jpg/revision/latest?cb=20080121004032"
                     alt="yoda" 
                />
                <h2>Speak like Yoda!</h2>
                <form className="yoda-form" onSubmit={this.handleSubmit}>
                    <div>    
                        <input type="text"
                               value={this.state.sentence}
                               onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Yoda-fy it!</button>
                    </div>
                </form>

                <Route path="/yoda/:sentence" component={YodaResult} />
                <Route exact path="/yoda" render={() => <h3>Please enter a sentence for Yoda to translate!</h3>} />
            </div>
        )
    }
}

export default Yoda
