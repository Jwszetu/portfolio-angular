import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-angular';
  pageTitle: string = '';

  sceneChange(el?: HTMLElement): void {
    var menuItems = Array.from(document.getElementsByClassName("menu-item"));
    menuItems.map(element => element.removeAttribute('hidden'))
    this.pageTitle = <string> el?.innerText;
  }

}
