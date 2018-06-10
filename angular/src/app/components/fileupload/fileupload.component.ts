import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { AdminService} from './../../service/admin.service';
import {saveAs} from 'file-saver';
const uri = 'http://localhost:3000/file/upload';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  
    img:any;
  ngOnInit() {
    this.getphoto();
  }
  uploader:FileUploader = new FileUploader({url:uri});
  
      attachmentList:any = [];
  
      constructor(private adminService : AdminService) { 
  console.log(FileUploader)
          this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
            //   console.log(this.attachmentList)
              this.attachmentList.push(JSON.parse(response));
              this.getphoto();
          }
         
      }
  
      download(index){
          
          var filename = this.attachmentList[index].uploadname;
  
          this.adminService.downloadFile(filename)
          .subscribe(
              data => saveAs(data, filename),
              error => console.error(error)
              
          );
        
      }

      getphoto(){
        this.adminService.getAllphoto().subscribe(data=>{
            
            this.img = data;
            console.log(this.img)
            // this.selected=data[0].id;
           });
      }
}


