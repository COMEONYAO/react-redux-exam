
const ADD_DEVICE = "添加设备"
const REMOVE_DEVICE = "删除设备"

const ADD_GOOD = "添加商品"
const REMOVE_GOOD = "删除商品"

export function counter(state = { device_list: [], good_list: [] }, action) {
  switch (action.type) {
    case ADD_DEVICE:
      state.device_list.push(action.device_name);
      return { device_list: [...state.device_list], good_list: [...state.good_list] };
    case REMOVE_DEVICE:
      state.device_list.pop();
      return { device_list: [...state.device_list], good_list: [...state.good_list] };
    case ADD_GOOD:
      state.good_list.push(action.good_name);
      return { device_list: [...state.device_list], good_list: [...state.good_list] };
    case REMOVE_GOOD:
      state.good_list.pop();
      return { device_list: [...state.device_list], good_list: [...state.good_list] };
    default:
      return state;
  }
}

export function addDevice(device_name) {
  return { type: ADD_DEVICE, device_name: device_name };
}

export function removeDevice() {
  return { type: REMOVE_DEVICE };
}


export function addGood(good_name) {
  return { type: ADD_GOOD, good_name: good_name };
}

export function removeGood() {
  return { type: REMOVE_GOOD };
}

export function addDeviceAsync(device_name) {
  return dispatch => {
    setTimeout(() => {
      dispatch(addDevice(device_name));
    }, 2000);
  }
}


