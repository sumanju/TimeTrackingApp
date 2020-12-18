import { BrowserModule }          from '@angular/platform-browser'
import { NgModule, 
         NO_ERRORS_SCHEMA 
       }                          from '@angular/core'
import { BrowserAnimationsModule 
       }                          from '@angular/platform-browser/animations'
import { AppRoutingModule }       from './app-routing.module'
import { AppComponent }           from './app.component'
import { FormsModule, 
         ReactiveFormsModule 
       }                          from '@angular/forms'
import { MaterialModule }         from './material/material.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { TimeformatPipe }         from './pipes/timeformat.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    TimeformatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers   : [],
  schemas     : [NO_ERRORS_SCHEMA],
  bootstrap   : [AppComponent]
})
export class AppModule { }
