import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

class HomePage extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    home page
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)