import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'userFindBox'
})
export class UserFind implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      let rVal = (val.id.toLocaleLowerCase().includes(args)) || (val.name.toLocaleLowerCase().includes(args));
      return rVal;
    })
  }
  
}