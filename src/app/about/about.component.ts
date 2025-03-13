import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private el: ElementRef) {}

  opentab(tabname: string, event: Event): void {
    const tablinks = this.el.nativeElement.getElementsByClassName("tab-links");
    const tabcontents = this.el.nativeElement.getElementsByClassName("tab-contents");

    for (const tablink of Array.from(tablinks)) {
      (tablink as HTMLElement).classList.remove("active-link");
    }

    for (const tabcontent of Array.from(tabcontents)) {
      (tabcontent as HTMLElement).classList.remove("active-tab");
    }

    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.classList.add("active-link");
    }

    const tabElement = document.getElementById(tabname);
    if (tabElement) {
      tabElement.classList.add("active-tab");
    }
  }
}