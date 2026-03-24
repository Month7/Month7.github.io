class ResumeExperienceItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const time = this.getAttribute('time') || '';
    const type = this.getAttribute('type') || '';
    const description = this.getAttribute('description') || '';
    const departments = this.getAttribute('departments') || '';

    const typeButton = type ? `<a class="btn item-more" href="#">${type}</a>` : '';

    let departmentsHtml = '';
    let descriptionHtml = '';
    
    // 处理部门信息
    if (departments) {
      const depts = JSON.parse(departments);
      departmentsHtml = depts.map(dept => {
        const deptDesc = dept.description ? dept.description.map(desc => `<li class="work-desc">${desc}</li>`).join('') : '';
        return `
          <div class="department-section">
            <div class="department-subtitle">
              <span class="department-name">${dept.name}</span>
              <span class="department-time">${dept.time}</span>
            </div>
            <ul class="department-content">
              ${deptDesc}
            </ul>
          </div>
        `;
      }).join('');
    }
    
    // 处理普通描述
    if (description) {
      try {
        const items = JSON.parse(description);
        descriptionHtml = items.map(item => `<li class="work-desc">${item}</li>`).join('');
      } catch (e) {
        descriptionHtml = description;
      }
    }

    this.innerHTML = `
      <div class="item">
        <header class="item-hd">
          <div class="item-name title company-name">${title}</div>
          <span class="item-time">${time}</span>
          ${typeButton}
        </header>
        <div class="item-bd">
          ${departmentsHtml}
          ${descriptionHtml ? `<ul class="section-content">${descriptionHtml}</ul>` : ''}
        </div>
      </div>
    `;
  }
}

export default ResumeExperienceItem;
