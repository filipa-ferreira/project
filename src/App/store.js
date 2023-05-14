import { configureStore } from '@reduxjs/toolkit';
import skillsSlice from '../features/skills/skillsSlice';


export default configureStore({
  reducer: {
    list: skillsSlice,
  }
});
