import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/form/formSlice';

export default configureStore({
  reducer: {
    form: formSlice,
  }
});
