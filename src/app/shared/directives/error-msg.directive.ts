import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private htmlElement : ElementRef<HTMLElement>;
  @Input() public color: string = 'red'; 
  @Input() public mensaje: string = 'Este campo es requerido directiva';
  @Input() public valido: boolean = false;

  constructor( private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setMensaje();
    this.setColor();
    this.setValido();
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setValido();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setValido(){
    if(!this.valido){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

}
