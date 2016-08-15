import m from 'mithril';

const Counter = {
  oninit(vnode) {
    vnode.state.count = 0;
  },
  view(vnode) {
    return m('.Counter', [
      m('h1', vnode.state.count),
      m('button', { onclick: () => vnode.state.count++ }, 'click me'),
      m('p',
        m('a', { href: '/', oncreate: m.route.link }, [
          'Home ', m('i.fa.fa-arrow-left'),
        ])
      ),
    ]);
  },
};

export default Counter;
