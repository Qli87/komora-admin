import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userPath } from './constants/user.constants'
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MemberListCnt from './containers/MemberListCnt';
import MemberAddCnt from './containers/MemberAddCnt';
import MemberEditCnt from './containers/MemberEditCnt';

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePage /> </div>
    },
    {
        path: userPath.contact,
        main: () => <div> <Contact /> </div>
    },
    {
        path: userPath.membersList,
        main: () => <div> <MemberListCnt /> </div>
    },
    {
        path: userPath.addMember,
        main: () =>  <MemberAddCnt /> 
    },
    {
        path: userPath.editMember+'/:id',
        main: ({match}) => <MemberEditCnt member={match.params}/>
    }
]


class PageRouting extends React.Component {
    
    render() {
        return (
            <Router>
                <div className="skin-blue sidebar-mini">
                    <Header />
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                        {
                            routes.map((route, index) => (
                                <Route 
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))
                        }
                        </div>
                </div>
            </Router>
            
        )
    }
}

export default PageRouting