import reactDom from 'react-dom';

import "./assets/css/reset.css"
import "./assets/css/styles.css"

import App from './src/components/App';

reactDom.render(<App />, document.querySelector('.root'));