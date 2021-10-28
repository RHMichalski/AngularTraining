import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.paragraphCreated = renderer.createElement('p');
    this.paragraphEnd = renderer.createElement('p');
  }

  @Input()
  public dateEnd !: string | undefined;

  @Input()
  public dateCreated !: string | undefined;

  private paragraphCreated :any;
  private paragraphEnd :any;

  @HostListener('mouseenter')
  mouseenter(e:MouseEvent){
    this.paragraphCreated.innerHTML = 'Dodano ' + this.dateCreated;
    this.renderer.appendChild(this.el.nativeElement,this.paragraphCreated);
    if(this.dateEnd !== undefined || null){
      this.paragraphEnd.innerHTML = 'Zakończono ' + this.dateEnd;
      this.renderer.appendChild(this.el.nativeElement,this.paragraphEnd);
    }
  }

  @HostListener('mouseleave')
  mouseleave(e :MouseEvent){
    this.renderer.removeChild(this.el.nativeElement,this.paragraphCreated);
    if(this.dateEnd !== undefined || null){
    this.renderer.removeChild(this.el.nativeElement,this.paragraphEnd);
    }
  }

}
