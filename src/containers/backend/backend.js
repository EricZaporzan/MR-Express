import m from 'mithril';
import fetchival from 'fetchival';

const Backend = {
  oninit(props) {
    const endpointVal = m.prop('...');

    const getFromEndpoint = (e) => {
      fetchival('/api/example').get()
      .then(data => {
        endpointVal(data.title);
      })
      .catch(err => {
        endpointVal("totally impossible to fetch right now, sorry.");
      })
      .then(() => {
        m.redraw();
      })
    }

    return {
      endpointVal,
      getFromEndpoint
    }
  },

  view(ctrl, props) {
    const { actions, count } = props;

    return m('.Backend', [
      m('h1', `Title retrieved from the endpoint is ${ctrl.endpointVal()}`),
      m('button', { onclick: ctrl.getFromEndpoint }, 'click me!'),
      m('p',
        m('a', { href: '/', config: m.route }, [
          'Home ', m('i.fa.fa-arrow-left'),
        ])
      ),
    ]);
  },
};

export default Backend;
