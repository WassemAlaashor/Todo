import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TodoInputComponent } from './component/todo-input/todo-input.component';
import{TdoService} from  './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    TdoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
