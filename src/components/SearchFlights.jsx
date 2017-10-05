import React from 'react';
import { getFlight } from './../actions';
import { connect } from 'react-redux';
import styles from './../styles/SearchFlights.css';

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
      <div className={styles.searchflights}>
        <div>
        <div className="row">
          <div className="col-md-6">
            <h2>Search Flights</h2>
            <div className="formGroup">
              <label>From  </label>
              <input type="text"/>
            </div>
            <br/>
            <div className="formGroup">
              <label>To  </label>
              <input type="text"/>
            </div>
            <br/>
            <div className="formGroup">
              <label>Deaprture  </label>
              <input type="date"/>
            </div>
            <br/>
            <div className="formGroup">
              <label>Return  </label>
              <input type="date"/>
            </div>
            <br/>
            <div className="formGroup">
              <label>Passengers  </label>
              <input type="text"/>
            </div>
            <br/>
            <button onClick={this.handleSubmit}>Search</button>

          </div>
        </div>
      </div>
     </div>
    );
  }
}
export default connect()(SearchFlights);
