import HighOrderComponentExample from './hoc-example'
import ReduxSelectorExample from './redux-selector-example'
import ContextExample from './context-example'
import Info from './info'
import NoMatch from './no-match'

const PAGES = [
  { url: '/hoc', component: HighOrderComponentExample, title: 'High order component', showInMenu: true },
  { url: '/redux-selector', component: ReduxSelectorExample, title: 'Redux Selector', showInMenu: true },
  { url: '/context', component: ContextExample, title: 'Context Example', showInMenu: true },

  { url: '/info', component: Info, title: 'Info', showInMenu: true },
  { url: '/404', component: NoMatch, title: 'Info', showInMenu: false },
  { url: '/', component: Info, showInMenu: false },
]

export default PAGES
