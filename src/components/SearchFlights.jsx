import React from 'react';
import { getFlight } from './../actions';
import { connect } from 'react-redux';

class SearchFlights extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(getFlight());

  }
  render(){
    return(
      <div>

         <button onClick={this.handleSubmit}>test</button>
  
     </div>
    );
  }
}
export default connect()(SearchFlights);
