import React, {Component} from 'react';

class AllOfficesResults extends Component {
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
                        </tr>
                        <tr>
                            <td><a href="office-details.html">Governor</a></td>
                            <td>Nairobi</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td><a href="office-details.html">Senator</a></td>
                            <td>Nairobi</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td><a href="office-details.html">Women Rep</a></td>
                            <td>Nairobi</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>Governor</td>
                            <td>Nairobi</td>
                            <td>10000</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default AllOfficesResults;