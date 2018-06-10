(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fileupload/fileupload.component */ "./src/app/components/fileupload/fileupload.component.ts");
/* harmony import */ var _components_allphoto_allphoto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/allphoto/allphoto.component */ "./src/app/components/allphoto/allphoto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: _components_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_7__["FileuploadComponent"] },
    { path: 'allphoto', component: _components_allphoto_allphoto_component__WEBPACK_IMPORTED_MODULE_8__["AllphotoComponent"] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_7__["FileuploadComponent"],
                _components_allphoto_allphoto_component__WEBPACK_IMPORTED_MODULE_8__["AllphotoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]
            ],
            providers: [_service_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/allphoto/allphoto.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/allphoto/allphoto.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/allphoto/allphoto.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/allphoto/allphoto.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/\"><i class=\"fa fa-pencil-square-o\"></i> download photos</a>\n<div class=\"row\" *ngFor=\"let item of img; let i = index\">\n    <img width=\"50px\" src=\"../assets/upload/{{item.filename}}\">\n<a href=\"../assets/upload/{{item.filename}}\" target=\"_blank\">open window</a>\n<a href=\"../assets/upload/{{item.filename}}\" download>download</a></div>"

/***/ }),

/***/ "./src/app/components/allphoto/allphoto.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/allphoto/allphoto.component.ts ***!
  \***********************************************************/
/*! exports provided: AllphotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllphotoComponent", function() { return AllphotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as socketIo from 'socket.io-client';
var AllphotoComponent = (function () {
    function AllphotoComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        // private socket: any;
        this.path = 'http://localhost:3000';
        //  this.socket = socketIo(this.path) 
    }
    AllphotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.socket.on('photosocket', () => {
        //   this. getphoto();
        // });
        this.adminService.getAllphoto().subscribe(function (data) {
            _this.img = data;
            console.log(_this.img);
            // this.selected=data[0].id;
        });
        this.getphoto();
    };
    AllphotoComponent.prototype.getphoto = function () {
        var _this = this;
        this.adminService.getAllphoto().subscribe(function (data) {
            _this.img = data;
            console.log(_this.img);
            // this.selected=data[0].id;
        });
    };
    AllphotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allphoto',
            template: __webpack_require__(/*! ./allphoto.component.html */ "./src/app/components/allphoto/allphoto.component.html"),
            styles: [__webpack_require__(/*! ./allphoto.component.css */ "./src/app/components/allphoto/allphoto.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllphotoComponent);
    return AllphotoComponent;
}());



/***/ }),

/***/ "./src/app/components/fileupload/fileupload.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/fileupload/fileupload.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.card{\r\n    background-color: white;\r\n    box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/components/fileupload/fileupload.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/fileupload/fileupload.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <img  src=\"../assets/upload/1528036054211.Sunflower.jpeg\"> -->\n<div class=\"container-fluid\">\n    <div class=\"row header-section\">\n        <span>Angular 4/5 Nodejs File Upload Download Sample</span>\n    </div>\n    <a routerLink=\"/allphoto\"><i class=\"fa fa-pencil-square-o\"></i> view photos</a>\n    \n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"row card\">\n                <div class=\"col-sm-12\">\n                    <h4>Upload Section</h4>\n                    <div id=\"fileSelector\">\n                        <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\n                        multiple ng2FileSelect [uploader]=\"uploader\">\n                    </div>\n                    <div>\n                        <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\n                            <div class=\"col-sm-4\">{{item.file.name}}</div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar bg-success\" \n                                    [ngStyle]=\"{'width':item.progress+'%'}\"></div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                    <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\n                            </div>\n                        </div>                        \n                    </div>\n                    <div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>\n                    </div>\n                 \n                </div>                \n            </div>\n  \n           \n            <div class=\"row card\">\n                <h4>Download Section</h4>\n\n                <div class=\"row\" *ngFor=\"let item of attachmentList; let i = index\"\n                style=\"margin:10px;padding:5px;background-color:rgb(231, 229, 229); border-radius:5px; line-height:40px;\">\n                <div class=\"col-sm-7\">{{item.originalname}}{{item.uploadname}}</div> \n                    <div class=\"col-sm-5\" style=\"text-align:center;\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"download(i)\">Download</button></div>\n                </div>\n            </div>\n            <hr>\n    \n        </div>\n        <div class=\"col-md-2\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/fileupload/fileupload.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/fileupload/fileupload.component.ts ***!
  \***************************************************************/
/*! exports provided: FileuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadComponent", function() { return FileuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "../node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var uri = 'http://localhost:3000/file/upload';
var FileuploadComponent = (function () {
    function FileuploadComponent(adminService) {
        var _this = this;
        this.adminService = adminService;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: uri });
        this.attachmentList = [];
        console.log(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]);
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            //   console.log(this.attachmentList)
            _this.attachmentList.push(JSON.parse(response));
            _this.getphoto();
        };
    }
    FileuploadComponent.prototype.ngOnInit = function () {
        this.getphoto();
    };
    FileuploadComponent.prototype.download = function (index) {
        var filename = this.attachmentList[index].uploadname;
        this.adminService.downloadFile(filename)
            .subscribe(function (data) { return Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(data, filename); }, function (error) { return console.error(error); });
    };
    FileuploadComponent.prototype.getphoto = function () {
        var _this = this;
        this.adminService.getAllphoto().subscribe(function (data) {
            _this.img = data;
            console.log(_this.img);
            // this.selected=data[0].id;
        });
    };
    FileuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fileupload',
            template: __webpack_require__(/*! ./fileupload.component.html */ "./src/app/components/fileupload/fileupload.component.html"),
            styles: [__webpack_require__(/*! ./fileupload.component.css */ "./src/app/components/fileupload/fileupload.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], FileuploadComponent);
    return FileuploadComponent;
}());



/***/ }),

/***/ "./src/app/service/admin.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/admin.service.ts ***!
  \******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = (function () {
    function AdminService(_http) {
        this._http = _http;
    }
    AdminService.prototype.downloadFile = function (file) {
        var body = { filename: file };
        return this._http.post('http://localhost:3000/file/download', body, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    AdminService.prototype.getAllphoto = function () {
        // var body = {filename:file};
        return this._http.get('http://localhost:3000/file/allphoto', {
            // responseType : 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project\fileupload\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map