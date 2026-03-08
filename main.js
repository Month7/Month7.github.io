import { resumeData } from './data/resumeData.js';
import ResumeIcon from './components/ResumeIcon.js';
import ResumeContactItem from './components/ResumeContactItem.js';
import ResumeExperienceItem from './components/ResumeExperienceItem.js';
import ResumeSkillItem from './components/ResumeSkillItem.js';
import ResumeSectionHeader from './components/ResumeSectionHeader.js';
import { generateExperience, generateSkills } from './utils/generator.js';

// 注册所有 Web Components
customElements.define('resume-icon', ResumeIcon);
customElements.define('resume-contact-item', ResumeContactItem);
customElements.define('resume-experience-item', ResumeExperienceItem);
customElements.define('resume-skill-item', ResumeSkillItem);
customElements.define('resume-section-header', ResumeSectionHeader);

// 页面加载完成后生成内容
document.addEventListener('DOMContentLoaded', function() {
  // 生成内容
  generateExperience(resumeData);
  generateSkills(resumeData);
});