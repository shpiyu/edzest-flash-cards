export class Header {
  leftIconDiv: HTMLElement = document.createElement("div");
  rightIconDiv: HTMLElement = document.createElement("div");
  titleDiv: HTMLElement = document.createElement("div");
  headerContainer: HTMLElement = document.getElementById("headerContainer");

  constructor(leftIcon: HTMLElement, rightIcon: HTMLElement, title: string) {
    this.initializeSections();
    this.setHeader(leftIcon, rightIcon, title);
    this.render();
  }

  setLeftIcon(icon: HTMLElement) {
    this.leftIconDiv.innerHTML = "";
    if (icon != null) {
      this.leftIconDiv.appendChild(icon);
    }
  }

  setRightIcon(icon: HTMLElement) {
    this.rightIconDiv.innerHTML = "";
    if (icon != null) {
      this.rightIconDiv.appendChild(icon);
    }
  }

  setTitle(title: string) {
    if (title != null) {
      const h2 = document.createElement("h2");
      h2.innerHTML = title;
      this.titleDiv.innerHTML = "";
      this.titleDiv.appendChild(h2);
    }
  }

  setHeader(leftIcon: HTMLElement, rightIcon: HTMLElement, title: string) {
    this.setLeftIcon(leftIcon);
    this.setRightIcon(rightIcon);
    this.setTitle(title);
  }

  render() {
    const header: HTMLElement = document.createElement("header");
    header.appendChild(this.leftIconDiv);
    header.appendChild(this.titleDiv);
    header.appendChild(this.rightIconDiv);
    this.headerContainer.innerHTML = "";
    this.headerContainer.appendChild(header);
  }

  initializeSections() {
    this.leftIconDiv.className += "icon-left";
    this.rightIconDiv.className += "icon-right";
    this.titleDiv.className += "title";
  }
}
