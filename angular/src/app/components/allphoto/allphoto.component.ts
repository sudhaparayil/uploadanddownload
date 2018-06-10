import { Component, OnInit } from '@angular/core';
import { AdminService} from './../../service/admin.service';
import {Router} from '@angular/router';
// import * as socketIo from 'socket.io-client';
@Component({
  selector: 'app-allphoto',
  templateUrl: './allphoto.component.html',
  styleUrls: ['./allphoto.component.css']
})
export class AllphotoComponent implements OnInit {
  img:any;
  // private socket: any;
  path='http://localhost:3000';
  constructor(private adminService : AdminService, private router: Router) {
    //  this.socket = socketIo(this.path) 
    }

  ngOnInit() {
    // this.socket.on('photosocket', () => {
    //   this. getphoto();
    // });
    this.adminService.getAllphoto().subscribe(data=>{
      
      this.img = data;
      console.log(this.img)
      // this.selected=data[0].id;
     });
    this. getphoto();
  }
  getphoto(){
    this.adminService.getAllphoto().subscribe(data=>{
        
        this.img = data;
        console.log(this.img)
        // this.selected=data[0].id;
       });
  }
}
