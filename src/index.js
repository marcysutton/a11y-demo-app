import 'webcomponents.js';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ready from 'document-ready-promise';

ready().then(() => {
	const mountNode = document.querySelector('#root');
	mountNode && render(<App />, mountNode);
	registerServiceWorker();
});
