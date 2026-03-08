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
        <a href="${link}">
          <span class="contact-link">${text}</span>
          <span class="iconfont">
            <resume-icon type="${type}"></resume-icon>
          </span>
        </a>
      </li>
    `;
  }
}

export default ResumeContactItem;