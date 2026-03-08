class ResumeSectionHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title') || '';

    this.innerHTML = `
      <header class="section-hd">
        <div class="section-title-l"></div>
        <h3 class="section-title">${title}</h3>
        <div class="section-title-r"></div>
      </header>
    `;
  }
}

export default ResumeSectionHeader;