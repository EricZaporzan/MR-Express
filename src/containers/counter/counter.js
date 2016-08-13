import m from 'mithril';

const Counter = {
  oninit() {},
  view(vnode) {
    return m('.Counter', [
      m('h1', vnode.state.title),
      m('button', { onclick: null }, 'click me'),
      m('p',
        m('a', { href: '/', oncreate: m.route.link }, [
          'Home ', m('i.fa.fa-arrow-left'),
        ])
      ),
    ]);
  },
};

export default Counter;
