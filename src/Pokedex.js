import React, { Component } from 'react'
 
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
       .then(pokedex => this.setState({ pokedex }))
   } 

   componentWillReceiveProps(nextProps) {
       const locationChanged = nextProps.location !== this.props.location
       if(locationChanged) {
           this.fetchPokemonData(nextProps)
       }
   }

   render() {
    const {pokedex} = this.state

    return (
        <div className="pokedex">
          <h2>{pokedex.name}</h2>
          <h3>Height: {pokedex.height * 10} centimeters</h3>
          <h3>Weight: {pokedex.weight / 10} kilograms</h3>
          <h3>Base XP: {pokedex.base_experience}</h3>
        </div>
    )
   }
 }
 
 export default Pokedex