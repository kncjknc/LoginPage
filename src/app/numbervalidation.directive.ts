import { Directive, ElementRef, HostListener } from '@angular/core';

 const expectNumber = /^[0-9]{10}$/;

@Directive({
  selector: '[appNumbervalidation]'
})

export class NumbervalidationDirective {

  constructor(private el: ElementRef ) {}

   isValid=false;

  @HostListener('input',['$event']) 
  validate(event:Event):void{
    console.log("directive");
    const element = this.el.nativeElement as HTMLInputElement;
    const value = element.value;

    if(!expectNumber.test(value)){
      element.classList.add("invalid");
      this.isValid=true;
    }
    else{
      element.classList.remove("invalid");
      this.isValid=false
    }

   }


}
