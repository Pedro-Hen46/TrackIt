import reactDom from 'react-dom';

import "./assets/css/reset.css"
import "./assets/css/styles.css"

import App from './components/App';

reactDom.render(<App />, document.querySelector('.root'));