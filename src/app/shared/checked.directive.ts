import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit{

  constructor(private el:ElementRef,private renderer :Renderer2) { }

  ngOnInit(){
    let li = this.el.nativeElement;
    this.renderer.setStyle(li,'font-weight','600');
    //this.renderer.setStyle(li,'list-style-image','url(/assets/checked_32px.png)'); //Style CSS, i wartość do niego.
    //this.renderer.setStyle(li,'margin','auto');
  }

}
