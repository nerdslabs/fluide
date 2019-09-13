import * as sapper from '@sapper/app';

import './styles/styles.scss';
import 'highlight.js/scss/github.scss';

sapper.start({
	target: document.querySelector('#sapper')
});