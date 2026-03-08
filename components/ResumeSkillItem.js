class ResumeSkillItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';

    let descriptionHtml = '';
    if (description) {
      try {
        const items = JSON.parse(description);
        descriptionHtml = items.map(item => `<li>${item}</li>`).join('');
      } catch (e) {
        descriptionHtml = description;
      }
    }

    this.innerHTML = `
      <div class="item">
        <header class="item-hd">
          <div class="item-name title">${title}</div>
        </header>
        <div class="item-bd">
          <ul class="section-content">
            ${descriptionHtml}
          </ul>
        </div>
      </div>
    `;
  }
}

export default ResumeSkillItem;