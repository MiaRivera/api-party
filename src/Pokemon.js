import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Pokedex from './Pokedex'
import './Pokemon.css'

class Pokemon extends Component {
    state = {
        pokemon: "",
    }

    handleChange = (ev) => {
        this.setState({pokemon: ev.target.value.toLowerCase()})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokemon/${this.state.pokemon}`)
        this.setState({pokemon: ""})
    }

    render() {
        return (
            <div className="pokemon">
                <img className="pokeball-img" 
                     src="https://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" 
                     alt="pokeball"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>    
                        <input type="text" 
                               value={this.state.pokemon} 
                               onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look Up Pokemon Stats</button>
                    </div>
                </form>
                <Route path="/pokemon/:pokemon" component={Pokedex} />
                <Route exact path="/pokemon" render={() => <h3>Please enter a Pokemon name or number.</h3>} />
            </div>
        )
    }
}

export default Pokemon