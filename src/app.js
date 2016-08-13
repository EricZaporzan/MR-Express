import m from 'mithril';

import Counter from './containers/counter/counter';
import Backend from './containers/backend/backend';
import Home from './containers/home/home';

m.route.prefix('#!');

m.route(document.getElementById('app'), '/',
  {
    '/': Home,
    '/counter': Counter,
    '/backend': Backend,
  }
);
