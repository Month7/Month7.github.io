// 生成经历内容
export function generateExperience(resumeData) {
  const container = document.getElementById('experience-container');
  if (!container) return;

  resumeData.experience.forEach(item => {
    const experienceElement = document.createElement('resume-experience-item');
    experienceElement.setAttribute('title', item.title);
    experienceElement.setAttribute('time', item.time);
    if (item.type) {
      experienceElement.setAttribute('type', item.type);
    }
    experienceElement.setAttribute('description', JSON.stringify(item.description));
    container.appendChild(experienceElement);
  });
}

// 生成技能内容
export function generateSkills(resumeData) {
  const container = document.getElementById('skill-container');
  if (!container) return;

  resumeData.skills.forEach(item => {
    const skillElement = document.createElement('resume-skill-item');
    skillElement.setAttribute('title', item.title);
    skillElement.setAttribute('description', JSON.stringify(item.description));
    container.appendChild(skillElement);
  });
}