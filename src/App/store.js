import { configureStore } from '@reduxjs/toolkit';
import hardSkillsSlice from '../features/hardSkills/hardSkillsSlice';
import skillsSlice from '../features/softSkills/skillsSlice';
import portfolioSlice from '../features/portfolio/portfolioSlice';


export default configureStore({
  reducer: {
    softSkills: skillsSlice,
    hardSkills: hardSkillsSlice,
    portfolio: portfolioSlice,
  }
});
