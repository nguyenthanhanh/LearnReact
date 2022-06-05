import counterRecuder from '../features/Count/counterSlice';
const {configureStore} = require('@reduxjs/toolkit');

const rootRecudecer = {
    counter: counterRecuder,
};

const store = configureStore({
    reducer: rootRecudecer,
})

export default store;