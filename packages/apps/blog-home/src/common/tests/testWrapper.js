import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'

import theme from '../../theme'
import store from '../../entities/setUpStore'

export const getRootComponent = (Component, componentProps = {}, wrapperProps = {}) => () => (
  <TestWrapper {...wrapperProps}>
    <Component {...componentProps} />
  </TestWrapper>
)

export default class TestWrapper extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <Router {...store}>
          <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        </Router>
      </Provider>
    )
  }
}
