import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchOffices} from "../../actions/officeActions";
import dateFormat from "../../utils/dateFormat";


class AllOfficesResults extends Component {
      componentWillMount(){
      this.props.fetchOffices();
  }
    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="container-title">
                        <p>Political Offices</p>
                    </div>
                    <table className="offices-details">
                        <tr>
                            <th>Office Name</th>
                            <th>County</th>
                            <th>Registered voters</th>
                            <th>Registration Date</th>
                        </tr>
                        { this.props.offices.reverse().map(office =>
                        <tr>
                            <td>{office.name}</td>
                            <td>{office.office_type}</td>
                            <td>{office.candindates.length}</td>
                            <td>{dateFormat(office.date_created)}</td>
                        </tr>
                )}
                    </table>
                </div>
            </div>
        );
    }
}

AllOfficesResults.propTypes = {
  fetchOffices :propTypes.func.isRequired,
  offices: propTypes.array.isRequired

}

const mapStateToProps = state => ({
  offices: state.offices.offices,
});


export default connect(mapStateToProps, { fetchOffices })(AllOfficesResults);
