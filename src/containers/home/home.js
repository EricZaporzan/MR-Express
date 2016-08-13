import m from 'mithril';

import Counter from '../counter/counter';

import mReduxImage from '../../img/m-redux.png';

const Home = {
  oninit(vnode) {
    vnode.state.title = 'HEYYYYY';
  },
  view(vnode) {
    return m('.Home', [
      m('img', { src: mReduxImage, alt: 'Mithril Redux' }),
      m('h1', vnode.state.title),
      m('input', {
        oninput: m.withAttr('value', (val) => { vnode.state.title = val; }),
        value: vnode.state.title,
      }),
      m('p',
        m('a', { href: '/counter', oncreate: m.route.link }, [
          'Counter ', m('i.fa.fa-arrow-right'),
        ])
      ),
      m('p',
        m('a', { href: '/backend', oncreate: m.route.link }, [
          'Backend ', m('i.fa.fa-arrow-right'),
        ])
      ),
      m(Counter),
    ]);
  },
};

export default Home;
