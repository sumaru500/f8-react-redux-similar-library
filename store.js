import createStore from "./redux/index.js";
import reducer from "./reducer.js";

const {attach, connect, dispatch} = createStore(reducer);


// set dispatch as a global to use every where
window.dispatch = dispatch;

// export attach and connect 

export {
    attach,
    connect
}