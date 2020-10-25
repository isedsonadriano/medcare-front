import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dr'
})
export class DoutorPipe implements PipeTransform {
    transform(value: string): any {
        return 'Dr. ' + value;
      }
}