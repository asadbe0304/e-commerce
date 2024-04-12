import ReactDOM from 'react-dom'
import store from './store/store'
import Route from "./Routes/index"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)