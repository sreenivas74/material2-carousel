import { ListKeyManagerOption } from '@angular/cdk/a11y';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { MatCarouselSlide } from './carousel-slide';

@Component({
  selector: 'mat-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss']
})
export class MatCarouselSlideComponent
  implements ListKeyManagerOption, MatCarouselSlide, OnInit {
  @Input() public image: string;
  @Input() public overlayColor = '#00000040';
  @Input() public hideOverlay = false;
  @Input() public disabled = false; // implements ListKeyManagerOption

  @ViewChild(TemplateRef) public templateRef: TemplateRef<any>;

  public ngOnInit(): void {
    if (this.image) {
      this.image = `url("${this.image}")`;
    }
  }
}
