import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.error(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return <h3>Something went wrong.. Check the console log..</h3>
    }

    return this.props.children
  }
}

export default ErrorBoundary
