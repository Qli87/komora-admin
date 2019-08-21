import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageRouting from './PageRouting'
import Page404 from './components/Page404'

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path='/pocetna' component={PageRouting} />
            <Route path='/kontakt' component={PageRouting} />
            <Route path='/spisakClanova' component={PageRouting} />
            <Route path='/dodajClana' component={PageRouting} />
            <Route path='/izmjeniClana' component={PageRouting} />
            <Route path='/clanoviOdbora' component={PageRouting} />
            <Route path='/biografija' component={PageRouting} />
            <Route path='/vijesti' component={PageRouting} />
            <Route path='/vijestiKategorije' component={PageRouting} />
            <Route path='/izmijeniVijest' component={PageRouting} />
            <Route path='/clanoviSkupstinePg' component={PageRouting} />
            <Route path='/clanoviSkupstineNk' component={PageRouting} />
            <Route path='/clanoviSkupstineCt' component={PageRouting} />
            <Route path='/clanoviSkupstineSjever' component={PageRouting} />
            <Route path='/clanoviSkupstineJug' component={PageRouting} />
            <Route path="/" component={Page404}></Route>
          </Switch>
      </Router>
    )
  }
}

export default App;
