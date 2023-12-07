import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
  styleUrl: './error404-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404PageComponent { }
