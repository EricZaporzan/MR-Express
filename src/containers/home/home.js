import m from 'mithril';

import mReduxImage from '../../img/m-redux.png';

const Home = {
  oninit(vnode) {
    vnode.state.title = '';
  },
  view(vnode) {
    return m('.Home', [
      m('img', { src: mReduxImage, alt: 'Mithril Redux' }),
      m('h1', vnode.state.title),
      m('input', {
        value: vnode.state.title,
      }),
      m('p',
        m('a', { href: '/counter', config: m.route }, [
          'Counter ', m('i.fa.fa-arrow-right'),
        ])
      ),
      m('p',
        m('a', { href: '/backend', config: m.route }, [
          'Backend ', m('i.fa.fa-arrow-right'),
        ])
      ),
    ]);
  },
};

export default Home;
