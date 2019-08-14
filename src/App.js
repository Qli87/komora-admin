import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PageRouting from './PageRouting'

class App extends React.Component {
  render() {
    return (
      <Router>
          <Route path='/pocetna' component={PageRouting} />
          <Route path='/kontakt' component={PageRouting} />
          <Route path='/spisakClanova' component={PageRouting} />
          <Route path='/dodajClana' component={PageRouting} />
          <Route path='/izmjeniClana' component={PageRouting} />
      </Router>
    )
  }
}

export default App;
