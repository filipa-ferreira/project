import { configureStore } from '@reduxjs/toolkit';
import hardSkillsSlice from '../features/hardSkills/hardSkillsSlice';
import softSkillsSlice from '../features/softSkills/skillsSlice';
import portfolioSlice from '../features/portfolio/portfolioSlice';


export default configureStore({
  reducer: {
    softSkills: softSkillsSlice,
    hardSkills: hardSkillsSlice,
    portfolio: portfolioSlice,
  }
});
