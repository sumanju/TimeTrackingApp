import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class TimerService {

  constructor() { }

  // readState()  : Promise<any>  {
  //   return new Promise((resolve, reject)  =>  {
  //     fs.readFile("temp.txt", "utf-8", function(err, buf) {
  //       if (err)  {
  //         reject('file not found')
  //       }
  //       resolve(JSON.parse(buf))
  //     })    
  //   })
  // }

  // writeState(data : any)  : Promise<any>  {
  //   return new Promise((resolve, reject)  =>  {
  //     fs.writeFile("temp.txt", JSON.stringify(data), (err) => {
  //       if (err) reject(err)
  //       resolve(true)
  //     })
  //   })
  // }

  // saveTask(params : any)  : Promise<any> {
  //   return this.writeState(params)
  // }

  // readTask()  {
  //   return  this.readState()
  // }

}
