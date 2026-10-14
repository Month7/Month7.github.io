function renderWorkDescItems(items) {
  return items.map(item => {
    if (item && typeof item === 'object') {
      const children = Array.isArray(item.children)
        ? `<ul class="work-desc-children">${item.children.map(child => `<li class="work-desc">${child}</li>`).join('')}</ul>`
        : '';
      return `<li class="work-desc">${item.text || ''}${children}</li>`;
    }
    return `<li class="work-desc">${item}</li>`;
  }).join('');
}

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
    
    // 处理部门信息（description 与公司级条目相同，支持 { text, children }）
    if (departments) {
      const depts = JSON.parse(departments);
      departmentsHtml = depts.map(dept => {
        const deptDesc = dept.description ? renderWorkDescItems(dept.description) : '';
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
    
    // 处理普通描述（字符串为一级条目，{ text, children } 为带缩进子条）
    if (description) {
      try {
        descriptionHtml = renderWorkDescItems(JSON.parse(description));
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
