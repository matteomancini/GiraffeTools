import {
  ADD_NODE,
  REMOVE_NODE,
  UPDATE_NODE,
  ADD_PARAMETER,
  ADD_PARAMETER_TO_NODE,
  REMOVE_PARAMETER,
  UPDATE_PARAMETER,
  REPOSITION_PORTS,
  ADD_LINK,
  REMOVE_LINK,
  START_LINK,
  TOGGLE_SIDEBAR,
  UPDATE_LOADING_PERCENT,
  HOVER_PORT,
  CLICK_NODE,
  CLICK_SCENE,
  SET_MOUSE_STATE,
  CLEAR_DATABASE,
  TOGGLE_CODEEDITOR,
  SET_ACTIVE_TAB,
  SET_USER,
  SET_REPOSITORY,
  SET_BRANCH,
  SET_COMMIT,
  SET_PORK_FILE,
  OPEN_MODAL,
  CLOSE_MODAL
} from "./actionTypes";

export const clearDatabase = () => ({
  type: CLEAR_DATABASE
});

///// LOADING BAR /////
export const updateLoadingPercent = percent => ({
  type: UPDATE_LOADING_PERCENT,
  percent
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
});
export const toggleCodeEditor = () => ({
  type: TOGGLE_CODEEDITOR
});
export const setActiveTab = tab => ({
  type: SET_ACTIVE_TAB,
  payload: {
    tab
  }
});

///// NODES /////
export const addNode = props => ({
  type: ADD_NODE,
  payload: props
});
export const deleteNode = node => ({
  type: REMOVE_NODE,
  payload: {
    node
  }
});
export const updateNodePosition = (nodeId, offset) => ({
  type: UPDATE_NODE,
  payload: {
    nodeId,
    newValues: {
      x: offset.x,
      y: offset.y
    }
  }
});
export const addParameterToNode = (parameter, nodeId) => ({
  type: ADD_PARAMETER_TO_NODE,
  payload: {
    parameter,
    nodeId
  }
});

///// LINKS /////
export const addLink = props => ({
  type: ADD_LINK,
  payload: props
});
export const startLink = portId => ({
  type: START_LINK,
  payload: {
    portId
  }
});
export const deleteLink = linkId => ({
  type: REMOVE_LINK,
  payload: {
    linkId
  }
});

///// PORTS /////
export const addParameter = props => ({
  type: ADD_PARAMETER,
  payload: props
});
export const updateParameter = (parameterId, newValues) => ({
  type: UPDATE_PARAMETER,
  payload: {
    parameterId,
    newValues
  }
});
export const deleteParameter = ParameterId => ({
  type: REMOVE_PARAMETER,
  payload: {
    ParameterId
  }
});
export const repositionPorts = node => ({
  type: REPOSITION_PORTS,
  payload: {
    node
  }
});

///// SCENE /////
export const hoverPort = (portId, type) => ({
  type: HOVER_PORT,
  payload: {
    portId,
    type
  }
});
export const clickNode = nodeId => ({
  type: CLICK_NODE,
  payload: {
    nodeId
  }
});
export const clickScene = () => ({
  type: CLICK_SCENE
});
// export const setMouseState = (props) => ({
//   type: SET_MOUSE_STATE,
//   payload: props,
// });

///// SCENE /////
export const setUser = user => ({
  type: SET_USER,
  payload: {
    user
  }
});
export const setRepository = repository => ({
  type: SET_REPOSITORY,
  payload: {
    repository
  }
});
export const setBranch = branch => ({
  type: SET_BRANCH,
  payload: {
    branch
  }
});
export const setCommit = commit => ({
  type: SET_COMMIT,
  payload: {
    commit
  }
});
export const setPorkFile = pork_file => ({
  type: SET_PORK_FILE,
  payload: {
    pork_file
  }
});

///// MODALS /////
export const openModal = item => ({
  type: OPEN_MODAL,
  payload: {
    item
  }
});
export const closeModal = id => ({
  type: CLOSE_MODAL,
  payload: {
    id
  }
});
