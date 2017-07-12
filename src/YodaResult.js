import React, { Component } from 'react'
 
 class YodaResult extends Component {
   constructor(props) {
     super(props)
 
     this.state = {
       yodaTalk: ""
     }
 
     this.fetchTranslated(props)
   }
 
   fetchTranslated = (props) => {
     fetch(`https://yoda.p.mashape.com/yoda?sentence=${props.match.params.sentence}`,
        {method: "GET",
        headers: {
            "X-Mashape-Key": "pAkxhmUc93mshQvvAf4wsM7DCI1Yp1cyHSKjsniGRG3crrzuxS"
     }})
       .then(response => response.json())
       .then(data => this.setState(this.state.yodaTalk))
   } 

   componentWillReceiveProps(nextProps) {
       const locationChanged = nextProps.location !== this.props.location
       if(locationChanged) {
           this.fetchTranslated(nextProps)
       }
   }

   render() {
    const yodaTalk = this.state.yodaTalk
    return (
        <div className="response">
            <h3>{yodaTalk}</h3>
        </div>
    )
   }
 }
 
 export default YodaResult