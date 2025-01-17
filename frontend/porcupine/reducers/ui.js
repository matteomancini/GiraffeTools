import {
  SET_ACTIVE_TAB,
  UPDATE_LOADING_PERCENT,
  SET_SEARCH_TEXT,
  TOGGLE_TOOLBOX,
  SET_VISIBLE_TOOLBOXES,
  ADD_TOOLBOX_NODES,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  showToolboxes: [],
  searchText: '',
  toolboxes: [],
  activeTab: undefined,
  loadingPercent: -1,
};

const ui = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_VISIBLE_TOOLBOXES:
      const {toolboxes} = payload;
      return {...state, showToolboxes: toolboxes}
    case TOGGLE_TOOLBOX:
      const {toolbox} = payload;
      if (!state.showToolboxes) {
        return {...state, showToolboxes: [toolbox]};
      } else if (state.showToolboxes.includes(toolbox)) {
        const showToolboxes = state.showToolboxes.filter(
            (toolboxName) => toolbox != toolboxName
        );
        return {...state, showToolboxes};
      } else {
        const showToolboxes = [toolbox].concat(state.showToolboxes);
        return {...state, showToolboxes};
      }
    case ADD_TOOLBOX_NODES:
      return {
        ...state,
        toolboxes: [...payload.toolboxes, ...state.toolboxes],
        showToolboxes: [
          ...payload.toolboxes.map((t) => t.name),
          ...state.showToolboxes,
        ],
      };
    case SET_ACTIVE_TAB:
      return {...state, activeTab: payload.tab};
    case SET_SEARCH_TEXT:
      return {...state, searchText: payload.text};
    case UPDATE_LOADING_PERCENT:
      return {...state, loadingPercent: payload.percent};
    default:
      return state;
  }
};

export default ui;
