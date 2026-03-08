class ResumeExperienceItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const time = this.getAttribute('time') || '';
    const type = this.getAttribute('type') || '';
    const description = this.getAttribute('description') || '';

    const typeButton = type ? `<a class="btn item-more" href="#">${type}</a>` : '';

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
          <span class="item-time">${time}</span>
          ${typeButton}
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

export default ResumeExperienceItem;