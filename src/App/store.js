import { configureStore } from '@reduxjs/toolkit';
import hardSkillsSlice from '../features/hardSkills/hardSkillsSlice';
import skillsSlice from '../features/softSkills/skillsSlice';


export default configureStore({
  reducer: {
    softSkills: skillsSlice,
    hardSkills: hardSkillsSlice,
  }
});
