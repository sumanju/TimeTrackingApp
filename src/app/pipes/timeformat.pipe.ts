import { Pipe, 
         PipeTransform 
       } from '@angular/core'

@Pipe({
  name: 'timeformat'
})
export class TimeformatPipe implements PipeTransform {

  transform(second : any, ...args: unknown[]): string {
    let d = Number(second);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = (h > 0 ? (h < 10 ? '0' + h : h) : "00") + " : ";
    let mDisplay = (m > 0 ? (m < 10 ? '0' + m : m) : "00") + " : ";
    let sDisplay = s > 0  ? (s < 10 ? '0' + s : s) : "00";
    return hDisplay + mDisplay + sDisplay; 
  }

}
