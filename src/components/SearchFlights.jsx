import React from 'react';

class SearchFlights extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render(){
    return(
      <div>
       <form onSubmit={this.handleSubmit}>
         <input
           placeholder="Origin"
           type="text"
           ref="_origin"/>
         <input
           placeholder="destination"
           type="text"
           ref="_destination"/>
         <input
           placeholder="Adults"
           type="number"
           refs="_adults"/>
         <input
           placeholder="Childern"
           type="number"
           refs="_children"/>
         <input
           placeholder="departure"
           type="date"
           refs="_date"/>
         <button type="Submit">search</button>
       </form>
     </div>
    );
  }
}
export default SearchFlights;
