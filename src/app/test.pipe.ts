import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==='M')
      return 'Mr.'+value;
    if(args==='F')
      return 'Miss.'+value;
    return value ;
  }

}
