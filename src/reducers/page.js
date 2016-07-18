import { UPDATE_TITLE } from '../constants/page';

export function page(state = {}, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        title: action.title,
      };
    default:
      return state;
  }
}
