import m from 'mithril';

import mithrilImg from '../../img/mithril.png';

const Home = {
  oninit(vnode) {
    vnode.state.title = 'Mithril rules!';
  },
  view(vnode) {
    return m('.Home', [
      m('img', { src: mithrilImg, alt: 'Mithril' }),
      m('a', {
        href: 'http://mithril.js.org',
        target: '_blank',
      }, vnode.state.title ? vnode.state.title : 'Mithril rules!'),
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
    ]);
  },
};

export default Home;
