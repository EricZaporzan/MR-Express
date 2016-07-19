import m from 'mithril';
import fetchival from 'fetchival';

const Backend = {
  controller(props) {
    const endpointVal = m.prop('');

    const getFromEndpoint = (e) => {
      fetchival('/api/example').get().then(data => {
        endpointVal(data.title);
        m.redraw();
      });
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
