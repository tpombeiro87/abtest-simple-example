import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import getActiveAbTestsFromSplit from './lib/get-active-ab-tests-from-split'
import ErrorBoundary from './components/error-boundary'
import Header from './components/header'
import LoadingSpiner from './components/loading-spiner'
import PAGES from './pages'
import { APP_STATUS_LOADING, APP_STATUS_READY } from './lib/constants'
import { loadActiveAbTests as loadActiveAbTestsAction } from './redux/actions'

export const ActiveAbTestsContext = React.createContext({})

class App extends Component {
  state = {
    activeAbTests: {},
  }

  componentDidMount () {
    getActiveAbTestsFromSplit()
      .then(activeAbTests => {
        this.props.loadActiveAbTests(activeAbTests)
        this.setState({ activeAbTests })
      })
  }

  render () {
    const { appStatus } = this.props
    const appStatusBehaviour = {
      [APP_STATUS_LOADING]: <LoadingSpiner />,
      [APP_STATUS_READY]: (
        <Switch>
          { PAGES.map(page =>
            <Route component={page.component} exact key={page.url} path={page.url} />
          )}
          <Redirect to='/404' />
        </Switch>
      ),
    }

    return (
      <ActiveAbTestsContext.Provider value={this.state.activeAbTests}>
        <Router>
          <Header pages={PAGES}/>
          <ErrorBoundary>
            { appStatusBehaviour[appStatus] }
          </ErrorBoundary>
        </Router>
      </ActiveAbTestsContext.Provider>
    )
  }
}

const mapStateToProps = state => {
  return { appStatus: state.appStatus }
}

const mapDispatchToProps = {
  loadActiveAbTests: loadActiveAbTestsAction,
}

App.propTypes = {
  appStatus: PropTypes.string,
  loadActiveAbTests: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
