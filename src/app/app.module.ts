import { AppCounterService } from './services/app-counter.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { IfnotDirective } from './directives/ifnot.directive';
import { MultByPipe } from './pipes/mult-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    FilterPipe,
    SwitchComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [AppCounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
