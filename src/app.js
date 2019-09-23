import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import HighOrderComponentExample from './examples/high-order-component'
import ReduxSelectorExample from './examples/redux-selector'
import Info from './info'
import NoMatch from './no-match'

const PAGES = [
  { url: '/hoc', component: HighOrderComponentExample, title: 'High order component' },
  { url: '/redux-selector', component: ReduxSelectorExample, title: 'Redux Selector' },
  { url: '/info', component: Info, title: 'Info' },
  { url: '/', component: Info },
]

const App = () =>
  <Router>
    <Header pages={PAGES}/>

    <Switch>
      { PAGES.map(page =>
        <Route component={page.component} exact key={page.url} path={page.url} />
      )}
      <Route component={NoMatch} />
    </Switch>

  </Router>

export default App
