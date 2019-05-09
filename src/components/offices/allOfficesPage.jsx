import React, {Component} from 'react';
import HomePageHeader from "./homePageHeader";
import AllOfficesResults from "./allOfficesResults";
import MainFooter from "../mainFooter";

class AllOfficesPage extends Component {
    render() {
        return (
            <div>
                <HomePageHeader />
                <AllOfficesResults/>
                <MainFooter/>
            </div>
        );
    }
}

export default AllOfficesPage;