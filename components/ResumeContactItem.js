class ResumeContactItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const type = this.getAttribute('type') || 'github';
    const link = this.getAttribute('link') || '#';
    const text = this.getAttribute('text') || '';

    this.innerHTML = `
      <li>
        <span class="contact-link">${text}</span>
      </li>
    `;
  }
}

export default ResumeContactItem;