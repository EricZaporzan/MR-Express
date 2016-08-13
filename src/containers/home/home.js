import m from 'mithril';

import mithrilImg from '../../img/mithril.png';

const Home = {
  oninit(vnode) {
    vnode.state.title = 'Mithril!';
  },
  view(vnode) {
    return m('.Home', [
      m('img', { src: mithrilImg, alt: 'Mithril' }),
      m('a', {
        href: 'https://youtu.be/8aShfolR6w8?t=69',
        target: '_blank',
      }, vnode.state.title ? vnode.state.title : 'Mithril!'),
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
