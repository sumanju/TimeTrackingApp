import { Component, 
         OnInit 
       }                from '@angular/core'
import { TimerService } from '../service/timer.service'

export enum ACTION {
  SAVE    = 'SAVE',
  CANCEL  = 'CANCEL'
}

interface Timer  {
  taskName  : string,
  startTs   : number,
  endTs     : number,
  timeDiff  : number
} 

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  timer       : Timer[] = []

  timeFmt     : string  = '00 : 00 : 00'
  timeWatchId : any     

  task        : Timer   = null
  taskName    : string  = null    

  searchKey   : string  = ''
  editingInd  : number  
  editedValue : string  = ''

  errorDlg    : boolean = false

  constructor(private stateStore  : TimerService) { 
    this.task = {
      taskName  : null,
      startTs   : null,
      endTs     : null,
      timeDiff  : null
    }
  }

  ngOnInit(): void {

  }

  getTimeFormat(second  : number) : string {
    let sec = Number(second);
    let h = Math.floor(sec / 3600)
    let m = Math.floor(sec % 3600 / 60)
    let s = Math.floor(sec % 3600 % 60)

    let hDisplay = (h > 0 ? (h < 10 ? '0' + h : h) : "00") + " : "
    let mDisplay = (m > 0 ? (m < 10 ? '0' + m : m) : "00") + " : "
    let sDisplay = s > 0  ? (s < 10 ? '0' + s : s) : "00"
    return hDisplay + mDisplay + sDisplay 
  }

  setStopWatch()  {
    this.timeWatchId  = setInterval(()  =>  {
      const time  = (new Date()).getTime()  - this.task.startTs
      this.timeFmt  = this.getTimeFormat(time/1000)
    },  1000)
  }

  clearStopWatch()  {
    clearInterval(this.timeWatchId)
  }

  startTimer() {
    if (!this.taskName) {
      this.errorDlg = true
      setTimeout(() =>  {
       this.errorDlg  = false 
      }, 2000)
      return
    }
    this.task.startTs = Date.now()
    this.timeFmt      = '00 : 00 : 00'
    this.task.endTs   = null
    this.setStopWatch()
  }

  endTimer()  {
    this.task.endTs = Date.now()
    this.clearStopWatch()
    this.timeFmt  = this.getTimeFormat((this.task.endTs - this.task.startTs) / 1000)
    this.timer.push({
      taskName  : this.taskName,
      startTs   : this.task.startTs,
      endTs     : this.task.endTs,
      timeDiff  : (this.task.endTs -  this.task.startTs)/1000
    })
    this.task.startTs  = null
    this.task.endTs    = null
  }

  setTaskName(event)  {
    this.taskName = event.target.value
  }

  search(event)  {
    this.searchKey  = event.target.value
  }

  delete(index) {
    if (index > -1) {
      this.timer.splice(index, 1)
    }
  }

  editIdx(index) {
    this.editingInd = index
  }

  edit(event) {
    this.editedValue = event.target.value
  }

  saveCancel(ACTION)  {
    switch (ACTION ) {
      case 'ACTION.SAVE':
        this.timer[this.editingInd].taskName  = this.editedValue
        this.editingInd = null
        break;

      case 'ACTION.CANCEL' :  
        this.editingInd = null
        break;
    
      default:
        break;
    }
  }
}
