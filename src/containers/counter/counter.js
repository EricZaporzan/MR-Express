import m from 'mithril';

const Counter = {
  oninit() {},
  view(vnode) {
    return m('.Counter', [
      m('h1', `${count} clicked`),
      m('button', { onclick: null }, 'click me'),
      m('p',
        m('a', { href: '/', config: m.route }, [
          'Home ', m('i.fa.fa-arrow-left'),
        ])
      ),
    ]);
  },
};

export default Counter;
