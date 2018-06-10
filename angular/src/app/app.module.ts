import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AdminService} from './service/admin.service';
import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { AllphotoComponent } from './components/allphoto/allphoto.component';
const appRoutes: Routes = [
 
{ path: '', component: FileuploadComponent},
{ path: 'allphoto', component: AllphotoComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    FileuploadComponent,
    AllphotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FileUploadModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
