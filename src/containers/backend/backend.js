import m from 'mithril';
import fetchival from 'fetchival';

const Backend = {
  oninit(vnode) {
    vnode.state.endpointVal = '...';

    vnode.state.getFromEndpoint = (e) => {
      fetchival('/api/example').get()
      .then(data => {
        vnode.state.endpointVal = data.title;
      })
      .catch(err => {
        vnode.state.endpointVal = "totally impossible to fetch right now, sorry.";
      })
      .then(() => {
        m.redraw();
      })
    };
  },

  view(vnode) {
    return m('.Backend', [
      m('h1', `Title retrieved from the endpoint is ${vnode.state.endpointVal}`),
      m('button', { onclick: vnode.state.getFromEndpoint }, 'click me!'),
      m('p',
        m('a', { href: '/', oncreate: m.route.link }, [
          'Home ', m('i.fa.fa-arrow-left'),
        ])
      ),
    ]);
  },
};

export default Backend;
