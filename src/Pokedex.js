import React, { Component } from 'react'
import './Pokedex.css'
 
 class Pokedex extends Component {
   constructor(props) {
     super(props)
 
     this.state = {
       pokedex: {}
     }
 
     this.fetchPokemonData(props)
   }
 
   fetchPokemonData = (props) => {
     fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pokemon}`)
       .then(response => response.json())
       .then(data => {
        const pokedex = {
          name: data.name,
          imageUrl: data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          baseXp: data.base_experience,
        }
        this.setState({pokedex})
      })
    }

   componentWillReceiveProps(nextProps) {
       const locationChanged = nextProps.location !== this.props.location
       if(locationChanged) {
           this.fetchPokemonData(nextProps)
       }
   }

   render() {
    const {name, imageUrl, weight, height, baseXp} = this.state.pokedex

    return (
        <div className="pokedex">
          <img src={imageUrl} alt={name} />
          <h2>{name}</h2>
          <h3>Height: {height * 10} centimeters</h3>
          <h3>Weight: {weight / 10} kilograms</h3>
          <h3>Base XP: {baseXp}</h3>
        </div>
    )
   }
 }
 
 export default Pokedex