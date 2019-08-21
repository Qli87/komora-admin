import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userPath } from './constants/user.constants'
import HomePage from './components/HomePage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MemberListCnt from './containers/MemberListCnt';
import MemberAddCnt from './containers/MemberAddCnt';
import MemberEditCnt from './containers/MemberEditCnt';
import BoardMembersCnt from './containers/BoardMembersCnt';
import BiographyCnt from './containers/BiographyCnt';
import ContactCnt from './containers/ContactCnt';
import NewsCnt from './containers/NewsCnt'
import NewsForCatCnt from './containers/NewsForCatCnt'
import EditNoveltyCnt from './containers/EditNoveltyCnt';
import PgCnt from './containers/parliament/PgCnt'
import NkCnt from './containers/parliament/NkCnt'
import CtCnt from './containers/parliament/CtCnt'
import SouthCnt from './containers/parliament/SouthCnt'
import NorthCnt from './containers/parliament/NorthCnt'

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePage /> </div>
    },
    {
        path: userPath.contact,
        main: () => <div> <ContactCnt /> </div>
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
    },
    {
        path: userPath.boardMembers,
        main: () => <BoardMembersCnt />
    },
    {
        path: userPath.biography+'/:id',
        main: ({match}) => <BiographyCnt biography={match.params}/>
    },
    {
        path: userPath.news,
        main: () => <NewsCnt />
    },
    {
        path: userPath.newsForCategory+'/:id',
        main: ({match}) => <NewsForCatCnt category={match.params}/>
    },
    {
        path: userPath.editNovelty+'/:id',
        main: ({match}) => <EditNoveltyCnt novelty={match.params} />
    },
    {
        path: userPath.parliamentPG,
        main: () => <PgCnt />
    },
    {
        path: userPath.parliamentNk,
        main: () => <NkCnt />
    },
    {
        path: userPath.parliamentCt,
        main: () => <CtCnt />
    },
    {
        path: userPath.parliamentNorth,
        main: () => <NorthCnt />
    },
    {
        path: userPath.parliamentSouth,
        main: () => <SouthCnt />
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