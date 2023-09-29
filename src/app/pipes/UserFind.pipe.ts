import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class UserFind implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    if(!args){
      return value;
    }

    args = args.toLowerCase();

    return value.filter((item: any) => {
      
      JSON.stringify(item).toLowerCase().includes(args);
    })
  }
  
}