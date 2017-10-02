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
        SearchFlights
      </div>
    );
  }
}
export default SearchFlights;
