import { Directive, ElementRef, HostListener , Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultcolor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input ('pkmnBorderCard') borderColor : string;

  @HostListener('mouseenter')onMouseEnter()
  {
    this.setBorder(this.borderColor || this.defaultcolor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor)
  }
    private setHeight(height: number){
      this.el.nativeElement.style.height = height + 'px';
    }

    private setBorder(color: string){
      let border = 'solid 4px' + color;
      this.el.nativeElement.style.border = border;
    }
}
