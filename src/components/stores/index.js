import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../stores/player';

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
