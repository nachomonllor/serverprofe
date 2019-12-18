(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--\n<app-login>\n\n</app-login>\n<br>\n<br>\n<app-formulario> \n</app-formulario>\n<br>\n<br>\n\n-->\n<!--\n<app-login>\n</app-login>\n-->\n\n<!--\n<app-formcarga-vehiculo> \n</app-formcarga-vehiculo>\n-->\n\n<!-- <app-form-mostrar>\n</app-form-mostrar>\n\n\n<app-formcarga-vehiculo>\n\n</app-formcarga-vehiculo> -->\n\n\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detallevehiculo/detallevehiculo.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detallevehiculo/detallevehiculo.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>detallevehiculo works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-mostrar/form-mostrar.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-mostrar/form-mostrar.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!--\n   marca:string; \n   modelo:string; \n   an:string; \n   kilometros:number;\n   tipo:Tipo;\n   foto:string \n-->\n<h2>Estadistica vehiculos</h2>\n<ul>    \n     \n  <table id=\"contentToConvert\" mdbTable striped=\"true\" bordered=\"true\" >\n    <!--\n    <thead>\n        <tr>\n          <th *ngFor=\"let head of headElements\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n    -->\n    <tbody>\n    <tr *ngFor =\"let item of autos\">\n        <th scope=\"row\" > {{item.marca}} </th>\n        <td> {{item.modelo}}</td>\n        <td> {{item.an}}</td>\n        <td> {{item.kilometros}}</td>\n        <td> {{item.tipo}} </td>\n        <td> {{item.localidad}}</td>\n        <td>  {{item.concesionaria}}</td>\n        <!-- {{item.foto}}-->\n    </tbody>\n</table>\n\n</ul>\n\n<br>\n<br>\n\n<div>  \n  <input type=\"button\" value=\"descargar PDF\" (click)=\"captureScreen()\"/>  \n</div> \n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formcarga-vehiculo/formcarga-vehiculo.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formcarga-vehiculo/formcarga-vehiculo.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Cargar Vehiculo:</h2>\n<br>\n<form #formcargaVehiculo = \"ngForm\">\n\n    Tipo: \n    \n    <br>\n       \n    <select class=\"browser-default custom-select\" [(ngModel)]= 'unAuto.tipo'   name =\"tipo\" (change) =\"elegirVehiculo($event.target.value)\">\n        <option *ngFor=\"let t of tipos\" [value]=\"t\">{{t}}</option>\n    </select>\n    <br>\n\n    Marca:\n    <br>\n    <!--\n     <input type = \"marca\" name = \"marca\" [(ngModel)] = \"vehi.marca\" #marca = \"ngModel\" marca required/>\n    -->\n\n    <select class=\"browser-default custom-select\" [(ngModel)]= 'unAuto.marca' name = \"marca\" (change) = \"elegirModelo($event.target.value)\" >\n        <option *ngFor=\"let m of marcas\" [value]=\"m.value\">{{m.display}}</option>\n    </select>\n\n        <br>\n    Modelo:\n    <br>\n\n    <select class=\"browser-default custom-select\" [(ngModel)]= 'unAuto.modelo'   name =\"modelo\" >\n        <option *ngFor=\"let m of modelos\" [value]=\"m\">{{m}}</option>\n    </select>\n     \n\n     <br>\n\n     Año:\n     <br>\n     <!--\n     <input type = \"an\" name = \"an\" [(ngModel)] = \"vehi.an\" #an = \"ngModel\" />\n     -->\n     \n     <select class=\"browser-default custom-select\" [(ngModel)]= 'unAuto.an'   name =\"an\" >\n        <option *ngFor=\"let a of anios\" [ngValue]=\"a\">{{a}}</option>\n      </select>\n    \n\n      <br>\n\n      Kilometros:\n      <br>\n      \n      <input type = \"text\" name = \"kilometros\" [(ngModel)] = \"unAuto.kilometros\"  />\n      \n       <br>\n\n       \n\n        Localidad:\n        <select class=\"browser-default custom-select\" [(ngModel)]= 'unAuto.localidad'   name =\"localidad\" >\n            <option *ngFor=\"let l of localidades\" [ngValue]=\"l\">{{l}}</option>\n        </select>\n        <br>\n\n        Concesionaria:\n        <select class=\"browser-default custom-select\" [(ngModel)]= 'unAuto.concesionaria'   name =\"concesionaria\" >\n            <option *ngFor=\"let c of concesionarias\" [ngValue]=\"c\">{{c}}</option>\n        </select>\n        <br>\n\n        Foto:\n        <br>\n        <!--\n        <input type = \"text\" name = \"foto\" [(ngModel)] = \"auto.foto\"   />\n        -->\n\n         <br>\n\n    <br>\n    <button type=\"submit\" name =\"submit\" class=\"btn btn-success\" (click) = \"cargarAuto()\"   >cargar vehiculo</button>\n\n    <button type=\"mostrarvehiculos\" style=\"margin-left:30px;\"  name =\"mostrar\" class=\"btn btn-success\" (click) = \"mostrar()\"  > mostrar vehiculos</button>\n\n\n\n</form>\n\n<br>\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formfiltrar/formfiltrar.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formfiltrar/formfiltrar.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("Razon social: {{razonSocial}}\n\n\n<!--\n<button type=\"submit\" name =\"submit\" class=\"btn btn-success\" (click) = \"validar()\"   >cargar vehiculo</button>\n<button type=\"button\" name =\"mostrar\" class=\"btn btn-success\" (click) = \"mostrar()\"  > mostrar vehiculos</button>\n-->\n\n\n\n<table>\n<td>\nFiltrado por tipo:\n<br>\n<select class=\"browser-default custom-select\" [(ngModel)]= 'tipoSeleccionado' (change)=\"filtrarPorTipo($event)\" >\n    <option *ngFor=\"let t of tipos\" [ngValue]=\"t\">{{t}}</option>\n  </select>\n</td>\n\n<td>\n  Filtrado por localidad: \n  <br>\n  <select class=\"browser-default custom-select\" [(ngModel)]= 'localidadSeleccionada' (change)=\"filtrarPorLocalidad($event)\" >\n    <option *ngFor=\"let l of localidades\" [ngValue]=\"l\">{{l}}</option>\n  </select>\n</td>\n\n<td>\n  Filtrado por concesionaria:\n  <br>\n  <select class=\"browser-default custom-select\" [(ngModel)]= 'concesionariaSeleccionada' (change)=\"filtrarPorConcesionaria($event)\" >\n    <option *ngFor=\"let c of concesionarias\" [ngValue]=\"c\">{{c}}</option>\n  </select>\n</td>\n\n<br>\n</table>\n  \n <!-- {{selectedValue + \" \" +  mostrar}} -->\n\n  <!-- {{mostrar}} -->\n  <h2>Estadistica vehiculos</h2>\n    \n     \n<table id=\"contentToConvert\" mdbTable striped=\"true\" bordered=\"true\" >\n    \n  <thead class=\"grey lighten-1 black-text\">\n    <tr>\n      <th *ngFor=\"let head of headElements\" scope=\"col\">{{head}} </th>\n    </tr>\n  </thead>\n\n\n    <tbody>\n    <tr *ngFor =\"let item of autos\">\n        <th scope=\"row\" > {{item.marca}} </th>\n        <td> {{item.modelo}}</td>\n        <td> {{item.an}}</td>\n        <td> {{item.kilometros}}</td>\n        <td> {{item.tipo}} </td>\n        <td> {{item.localidad}}</td>\n        <td>  {{item.concesionaria}}</td>\n        <!-- {{item.foto}}-->\n    </tbody>\n</table>\n\n<br>\n\n<div class=\"wrapper\" >  \n  <button type=\"submit\" name =\"submit\" class=\"btn btn-success\" value=\"descargar PDF\" (click)=\"captureScreen()\" >  descargar PDF</button>\n  \n  <button type=\"submit\"  style=\"margin-left:30px;\"  name =\"submit\" class=\"btn btn-success\" value=\"cargar vehiculo\" (click)=\"cargarVehiculo()\">   cargar vehiculo</button>\n</div>\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/formulario.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/formulario.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<form #consecionariaForm=\"ngForm\">\n\n    Email:<br>\n    <input type=\"email\" name = \"email\" [(ngModel)]=\"conces.email\" #email=\"ngModel\" email required />\n    <div *ngIf = 'email.invalid && (email.dirty || email.touched)' >   el email es requerido </div>\n    <br>\n    Razon social:<br>\n    <input type=\"text\" name = \"razon_social\" [(ngModel)]=\"conces.razon_social\" #razon_social=\"ngModel\" razon_social required />\n       <div>  la razon social es requerida </div>\n    <br>\n\n    <!--\n    Telefono:<br>\n    <input type=\"text\" name = \"telefono\" [(ngModel)]=\"conces.telefono\" #telefono=\"ngModel\" telefono required />\n       <div >  el telefono es requerido </div>\n    <br>\n    -->\n    \n    Telefono (Solo numeros):<br>\n    <input (keypress)=\"numberOnly($event)\" type=\"text\" name = \"telefono2\">\n    \n\n    <br>\n    Localidad: <br>\n    <select class=\"browser-default custom-select\" [(ngModel)]= 'localidadSeleccionada' name =\"localidad\" >\n        <option *ngFor=\"let l of localidades\" [ngValue]=\"l\">{{l}}</option>\n      </select>\n    <br>\n\n    Password:<br>\n    <input type =\"password\" name = \"password\" [(ngModel)] = \"conces.pass\" #pass = \"ngModel\" password  required minlength=\"3\"  />\n    <div *ngIf = 'pass.invalid && (pass.dirty || pass.touched)'  >  \n        <div *ngIf = 'pass.errors.required'>\n                la clave es requerida\n        </div>\n        <div *ngIf = 'pass.errors.minlength'>\n            al menos debe tener la clave 6 caracteres\n        </div>\n    </div>\n    <br>\n    Nombre de usuario:<br>\n    <input type=\"user\" name = \"user\" [(ngModel)]=\"conces.user\" #user=\"ngModel\" user required />\n    <div *ngIf = 'user.invalid && (user.dirty || user.touched)' >   el usuario es requerido </div>\n\n    <br>\n\n    <!-- [disabled]=\"!consecionariaForm.form.valid\" -->\n    <button type=\"submit\" name =\"submit\" class=\"btn btn-success\" (click) = \"validar()\" [disabled]=\"!consecionariaForm.form.valid\"  >Enviar</button>\n\n    <!--<button type=\"submit\" name =\"submit\" class=\"btn btn-success\" (click) = \"redirigirAlHome()\"   > Loguearse </button>-->\n\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #loginForm=\"ngForm\">\n\n    <input type = \"text\" name = \"nombre\" [(ngModel)] = \"us.nombre\" #nombre = \"ngModel\" nombre required/>\n    <div *ngIf = 'nombre.invalid && (nombre.dirty || nombre.touched)'  >\n        <div *ngIf = 'nombre.errors.required'>\n           El nombre es requerido\n        </div>\n\n    </div>\n   \n\n    <input type =\"password\" name = \"password\" [(ngModel)] = \"us.clave\" #clave = \"ngModel\" password  required minlength=\"3\"  />\n    <div *ngIf = 'clave.invalid && (clave.dirty || clave.touched)'  >  \n        <div *ngIf = 'clave.errors.required'>\n            la clave es requerida\n        </div>\n        <div *ngIf = 'clave.errors.minlength'>\n           la clave debe tener al menos 3 caracteres\n        </div>\n    </div>\n    <br>\n    <!-- -->\n\n    <button type=\"submit\" name =\"submit\" class=\"btn btn-success\" (click) = \"validar()\"   [disabled]=\"!loginForm.form.valid\" >ingresar</button>\n\n<p *ngIf=\"esValido\" style=\"color: red;\"> \n    El usuario o la contraseña es incorrecto.\n</p>\n\n\n<a routerLink=\"/formulario\"> Registrarse </a>\n\n\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navvar/navvar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navvar/navvar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>navvar works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _formcarga_vehiculo_formcarga_vehiculo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formcarga-vehiculo/formcarga-vehiculo.component */ "./src/app/formcarga-vehiculo/formcarga-vehiculo.component.ts");
            /* harmony import */ var _form_mostrar_form_mostrar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-mostrar/form-mostrar.component */ "./src/app/form-mostrar/form-mostrar.component.ts");
            /* harmony import */ var _formfiltrar_formfiltrar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formfiltrar/formfiltrar.component */ "./src/app/formfiltrar/formfiltrar.component.ts");
            var routes = [
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'formulario', component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"] },
                { path: 'cargaVehiculo', component: _formcarga_vehiculo_formcarga_vehiculo_component__WEBPACK_IMPORTED_MODULE_6__["FormcargaVehiculoComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'mostrarVehiculos', component: _form_mostrar_form_mostrar_component__WEBPACK_IMPORTED_MODULE_7__["FormMostrarComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'filtrarVehiculos', component: _formfiltrar_formfiltrar_component__WEBPACK_IMPORTED_MODULE_8__["FormfiltrarComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/authservicio.service */ "./src/app/auth/authservicio.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(auth) {
                    this.auth = auth;
                    this.title = 'segparc2511';
                }
                AppComponent.prototype.ngOnInit = function () {
                    //this.auth.borrarToken();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_2__["AuthservicioService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _formcarga_vehiculo_formcarga_vehiculo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formcarga-vehiculo/formcarga-vehiculo.component */ "./src/app/formcarga-vehiculo/formcarga-vehiculo.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _form_mostrar_form_mostrar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-mostrar/form-mostrar.component */ "./src/app/form-mostrar/form-mostrar.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _formfiltrar_formfiltrar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formfiltrar/formfiltrar.component */ "./src/app/formfiltrar/formfiltrar.component.ts");
            /* harmony import */ var _detallevehiculo_detallevehiculo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detallevehiculo/detallevehiculo.component */ "./src/app/detallevehiculo/detallevehiculo.component.ts");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _navvar_navvar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navvar/navvar.component */ "./src/app/navvar/navvar.component.ts");
            //import {MatSelectModule} from '@angular/material/select';
            //import { ConversorpdfComponent } from './conversorpdf/conversorpdf.component';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["FormularioComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _formcarga_vehiculo_formcarga_vehiculo_component__WEBPACK_IMPORTED_MODULE_8__["FormcargaVehiculoComponent"],
                        _form_mostrar_form_mostrar_component__WEBPACK_IMPORTED_MODULE_10__["FormMostrarComponent"],
                        _formfiltrar_formfiltrar_component__WEBPACK_IMPORTED_MODULE_12__["FormfiltrarComponent"],
                        _detallevehiculo_detallevehiculo_component__WEBPACK_IMPORTED_MODULE_13__["DetallevehiculoComponent"],
                        _navvar_navvar_component__WEBPACK_IMPORTED_MODULE_16__["NavvarComponent"],
                    ],
                    imports: [
                        // BrowserModule,
                        //AppRoutingModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        //HttpClientModule,
                        //BrowserAnimationsModule,
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["TableModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _authservicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authservicio.service */ "./src/app/auth/authservicio.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(serv, router) {
                    this.serv = serv;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (this.serv.estaAutorizado()) {
                        return true;
                    }
                    else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                    //return this.serv.estaAutorizado();
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _authservicio_service__WEBPACK_IMPORTED_MODULE_3__["AuthservicioService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth/authservicio.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/auth/authservicio.service.ts ***!
          \**********************************************/
        /*! exports provided: AuthservicioService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthservicioService", function () { return AuthservicioService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _modelos_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modelos/variables */ "./src/app/modelos/variables.ts");
            var AuthservicioService = /** @class */ (function () {
                function AuthservicioService(http) {
                    this.http = http;
                    this.variableUrl = new _modelos_variables__WEBPACK_IMPORTED_MODULE_4__["variables"]();
                    this.urllogin = this.variableUrl.urlBase + "login";
                    ////private urllogin = "http://localhost:3003/login";
                    this.isLoggedIn = false;
                }
                AuthservicioService.prototype.postlogin = function (_cli) {
                    var _this = this;
                    var cliente = { cliente: _cli };
                    //console.log(_cli);
                    return this.http.post(this.urllogin, cliente)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
                        if (token && token.token) {
                            //aca guardamos en el local storage
                            var tokenSinComillas = token.token;
                            /*
                            //esto no saca las comillas, saca el primer y ultimo caracter
                            tokenSinComillas = tokenSinComillas.substring(1, tokenSinComillas.length - 2);
                            console.log(token.token);
                            console.log('\n');
                            console.log( tokenSinComillas);
                            //Hacer algo con el string tokenSinComillas
                            console.log(tokenSinComillas);
                            */
                            localStorage.setItem('token', JSON.stringify(tokenSinComillas));
                            _this.isLoggedIn = true;
                            return true;
                            //console.log("token desde el service" + token.token);
                        }
                        //this.isLoggedIn = false;
                        return false;
                        //.pipe(map((response) => token.json()))
                    }));
                };
                AuthservicioService.prototype.logout = function () {
                    this.isLoggedIn = false;
                    localStorage.setItem('token', null);
                };
                //Vamos a tener que usar este metodo para inyectar
                //el token en las cabeceras
                AuthservicioService.prototype.devolverToken = function () {
                    return JSON.parse(localStorage.getItem('token'));
                };
                AuthservicioService.prototype.borrarToken = function () {
                    localStorage.setItem('token', null);
                };
                AuthservicioService.prototype.estaAutorizado = function () {
                    this.token = JSON.parse(localStorage.getItem('token'));
                    if (this.token != null) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return AuthservicioService;
            }());
            AuthservicioService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthservicioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
                //encargado del logueo y de almacenar el token en el localstorage
                //metodo para identificar si el usuario esta logueado
            ], AuthservicioService);
            /***/ 
        }),
        /***/ "./src/app/detallevehiculo/detallevehiculo.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/detallevehiculo/detallevehiculo.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGV2ZWhpY3Vsby9kZXRhbGxldmVoaWN1bG8uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/detallevehiculo/detallevehiculo.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/detallevehiculo/detallevehiculo.component.ts ***!
          \**************************************************************/
        /*! exports provided: DetallevehiculoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallevehiculoComponent", function () { return DetallevehiculoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DetallevehiculoComponent = /** @class */ (function () {
                function DetallevehiculoComponent() {
                }
                DetallevehiculoComponent.prototype.ngOnInit = function () {
                };
                return DetallevehiculoComponent;
            }());
            DetallevehiculoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detallevehiculo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detallevehiculo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detallevehiculo/detallevehiculo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detallevehiculo.component.css */ "./src/app/detallevehiculo/detallevehiculo.component.css")).default]
                })
            ], DetallevehiculoComponent);
            /***/ 
        }),
        /***/ "./src/app/form-mostrar/form-mostrar.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/form-mostrar/form-mostrar.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9zdHJhci9mb3JtLW1vc3RyYXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/form-mostrar/form-mostrar.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/form-mostrar/form-mostrar.component.ts ***!
          \********************************************************/
        /*! exports provided: FormMostrarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMostrarComponent", function () { return FormMostrarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _modelos_vehiculo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modelos/vehiculo */ "./src/app/modelos/vehiculo.ts");
            /* harmony import */ var _servicios_traerautos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/traerautos.service */ "./src/app/servicios/traerautos.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
            /* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
            //import { Tipo } from '../modelos/tipo';
            var FormMostrarComponent = /** @class */ (function () {
                // tipos = new Array<string>();
                //listaFiltradoTipo:Array<auto>;
                //selectedValue = "vacio";
                //selectedValue = Tipo.vacio;
                function FormMostrarComponent(ts) {
                    this.ts = ts;
                    this.headElements = ['marca', 'modelo', 'año',
                        'kilometros', 'tipo', 'foto'];
                    //this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
                    this.vehi = new _modelos_vehiculo__WEBPACK_IMPORTED_MODULE_1__["vehiculo"]("", "", "", 0, "auto", "");
                    this.autos = new Array();
                    //this.tipos.push("Auto");
                    //this.tipos.push("Camioneta");
                    //this.tipos.push("Camion");
                    // this.listaFiltradoTipo = new Array<auto>();
                    //this.traerdatos();
                }
                FormMostrarComponent.prototype.ngOnInit = function () {
                    this.autos = this.traerdatos();
                    console.log("len: " + this.autos.length);
                };
                FormMostrarComponent.prototype.traerdatos = function () {
                    var aux = new Array();
                    this.ts.getautos().subscribe(function (_autos) {
                        _autos.rta.forEach(function (element) {
                            //this.autos.push(element);
                            aux.push(element);
                        });
                        /*   console.log(_autos);
                          console.log(_autos.length);
                          this.autos = _autos */
                    });
                    return aux;
                };
                FormMostrarComponent.prototype.captureScreen = function () {
                    var data = document.getElementById('contentToConvert');
                    html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(data).then(function (canvas) {
                        // Few necessary setting options  
                        var imgWidth = 80;
                        var pageHeight = 380;
                        var imgHeight = canvas.height * imgWidth / canvas.width;
                        var heightLeft = imgHeight;
                        var contentDataURL = canvas.toDataURL('image/png');
                        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__('p', 'mm', 'a4'); // A4 size page of PDF  
                        var position = 0;
                        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                        pdf.save('MYPdf.pdf'); // Generated PDF   
                    });
                };
                return FormMostrarComponent;
            }());
            FormMostrarComponent.ctorParameters = function () { return [
                { type: _servicios_traerautos_service__WEBPACK_IMPORTED_MODULE_2__["TraerautosService"] }
            ]; };
            FormMostrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-form-mostrar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-mostrar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-mostrar/form-mostrar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-mostrar.component.css */ "./src/app/form-mostrar/form-mostrar.component.css")).default]
                })
            ], FormMostrarComponent);
            /***/ 
        }),
        /***/ "./src/app/formcarga-vehiculo/formcarga-vehiculo.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/formcarga-vehiculo/formcarga-vehiculo.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1jYXJnYS12ZWhpY3Vsby9mb3JtY2FyZ2EtdmVoaWN1bG8uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/formcarga-vehiculo/formcarga-vehiculo.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/formcarga-vehiculo/formcarga-vehiculo.component.ts ***!
          \********************************************************************/
        /*! exports provided: FormcargaVehiculoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormcargaVehiculoComponent", function () { return FormcargaVehiculoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _modelos_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modelos/auto */ "./src/app/modelos/auto.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _servicios_auto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/auto.service */ "./src/app/servicios/auto.service.ts");
            /* harmony import */ var _servicios_traerautos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/traerautos.service */ "./src/app/servicios/traerautos.service.ts");
            //import { Tipo } from '../modelos/tipo';
            var FormcargaVehiculoComponent = /** @class */ (function () {
                function FormcargaVehiculoComponent(http, as, ta, router) {
                    //this.lista = new Array<vehiculo>();
                    //this.vehi = new vehiculo("","","",0, "auto"  ,"");
                    this.http = http;
                    this.as = as;
                    this.ta = ta;
                    this.router = router;
                    this.anios = new Array();
                    this.tipos = new Array();
                    this.localidades = new Array();
                    this.concesionarias = new Array();
                    this.kilometros = 0;
                    // lista:Array<vehiculo>;
                    //tipo:Tipo;
                    this.listaautos = new Array();
                    this.marcas = [
                        { value: 'Alfa Romeo', display: 'Alfa Romeo' },
                        { value: 'Audi', display: 'Audi' },
                        { value: 'BMW', display: 'BMW' },
                    ];
                    this.modelos = new Array();
                    for (var i = 1950; i <= 2019; i++) {
                        this.anios.push(i);
                    }
                    this.tipos.push("auto");
                    this.tipos.push("camioneta");
                    this.tipos.push("camion");
                    this.localidades.push("avellaneda");
                    this.localidades.push("ezpeleta");
                    this.localidades.push("quilmes");
                    this.localidades.push("wilde");
                    this.localidades.push("sarandi");
                    this.concesionarias.push("concesionaria A");
                    this.concesionarias.push("concesionaria B");
                    this.concesionarias.push("concesionaria C");
                    this.concesionarias.push("concesionaria D");
                    this.concesionarias.push("concesionaria E");
                    this.concesionarias.push("concesionaria F");
                    this.unAuto = new _modelos_auto__WEBPACK_IMPORTED_MODULE_3__["auto"](this.marca, this.modelo, this.an, this.kilometros, this.tipo, this.foto, this.localidad, this.concesionaria);
                    //this.unAuto = new auto( "", "", "",0,
                    //"", "", "", "");
                }
                // marcasAutos = new Array<string>();
                //marcasCamionetas = [];
                // modelosCamiones = new Array<string>();
                FormcargaVehiculoComponent.prototype.elegirVehiculo = function (selected) {
                    this.modelos = new Array();
                    if (selected == "auto") {
                        //  this.marcasAutos = new Array<string>();
                        //  this.marcasAutos.push("Alfa Romeo");
                        // this.marcasAutos.push("Audi");
                        // this.marcasAutos.push("BMW");
                        this.marcas = [
                            { value: 'Alfa Romeo', display: 'Alfa Romeo' },
                            { value: 'Audi', display: 'Audi' },
                            { value: 'BMW', display: 'BMW' },
                        ];
                    }
                    else if (selected == "camioneta") {
                        //this.modelosCamionetas.push("Ford F-150");
                        //this.modelosCamionetas.push("Honda Ridgeline");
                        this.marcas = [
                            { value: 'Ford F-150', display: 'Ford F-150' },
                            { value: 'Honda Ridgeline', display: 'Honda Ridgeline' },
                            { value: 'Toyota Tundra', display: 'Toyota Tundra' }
                        ];
                    }
                    else {
                        //marcas camiones
                        this.marcas = [
                            { value: 'Scania', display: 'Scania' },
                            { value: 'Mercedes', display: 'Mercedes' },
                            { value: 'Mack Trucks', display: 'Mack Trucks' }
                        ];
                    }
                };
                //modelosCamiones = new Array<string>();
                // modelosCamionetas = new Array<string>();
                FormcargaVehiculoComponent.prototype.elegirModelo = function (selected) {
                    if (selected == "Alfa Romeo") {
                        this.modelos = new Array();
                        this.modelos.push("Alfa Romeo 1");
                        this.modelos.push("Alfa Romeo 2");
                        this.modelos.push("Alfa Romeo 3");
                    }
                    else if (selected == "Audi") {
                        this.modelos = new Array();
                        this.modelos.push("Audi 1");
                        this.modelos.push("Audi 2");
                        this.modelos.push("Audi 3");
                    }
                    else if (selected == "BMW") {
                        this.modelos = new Array();
                        this.modelos.push("BMW 1");
                        this.modelos.push("BMW 2");
                        this.modelos.push("BMW 3");
                    }
                    else if (selected == 'Ford F-150') {
                        this.modelos = new Array();
                        this.modelos.push("Ford F-150 1");
                        this.modelos.push("Ford F-150 2");
                        this.modelos.push("Ford F-150 3");
                    }
                    else if (selected == 'Honda Ridgeline') {
                        this.modelos = new Array();
                        this.modelos.push("Honda Ridgeline 1");
                        this.modelos.push("Honda Ridgeline 2");
                        this.modelos.push("Honda Ridgeline 3");
                    }
                    else if (selected == 'Toyota Tundra') {
                        this.modelos = new Array();
                        this.modelos.push("Toyota Tundra 1");
                        this.modelos.push("Toyota Tundra 2");
                        this.modelos.push("Toyota Tundra 3");
                    }
                    else if (selected == 'Scania') {
                        this.modelos = new Array();
                        this.modelos.push("Scania 1");
                        this.modelos.push("Scania 2");
                        this.modelos.push("Scania 3");
                        this.modelos.push("Scania 4");
                    }
                    else if (selected == 'Mercedes') {
                        this.modelos = new Array();
                        this.modelos.push("Mercedes 1");
                        this.modelos.push("Mercedes 2");
                        this.modelos.push("Mercedes 3");
                        this.modelos.push("Mercedes 4");
                    }
                    else if (selected == 'Mack Trucks') {
                        this.modelos = new Array();
                        this.modelos.push("Mack Trucks 1");
                        this.modelos.push("Mack Trucks 2");
                    }
                };
                /*
               conces: concesionaria;
               constructor(private _concesServ : ConcesionariaService)
               {
                   this.conces = new concesionaria("", "","","","","");
                }
              */
                FormcargaVehiculoComponent.prototype.ngOnInit = function () {
                    //this.ta. getautos();
                };
                FormcargaVehiculoComponent.prototype.mostrar = function () {
                    this.router.navigate(['/filtrarVehiculos']);
                };
                FormcargaVehiculoComponent.prototype.cargarAuto = function () {
                    var _this = this;
                    console.log(this.unAuto);
                    this.as.post(this.unAuto)
                        //.subscribe(token => { console.log("token desde login"+token) });
                        .subscribe(function (a) { return _this.listaautos.push(_this.unAuto); });
                };
                return FormcargaVehiculoComponent;
            }());
            FormcargaVehiculoComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _servicios_auto_service__WEBPACK_IMPORTED_MODULE_5__["AutoService"] },
                { type: _servicios_traerautos_service__WEBPACK_IMPORTED_MODULE_6__["TraerautosService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            FormcargaVehiculoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-formcarga-vehiculo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formcarga-vehiculo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formcarga-vehiculo/formcarga-vehiculo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formcarga-vehiculo.component.css */ "./src/app/formcarga-vehiculo/formcarga-vehiculo.component.css")).default]
                })
            ], FormcargaVehiculoComponent);
            /***/ 
        }),
        /***/ "./src/app/formfiltrar/formfiltrar.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/formfiltrar/formfiltrar.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".divider{\r\n    width:5px;\r\n    height:auto;\r\n    display:inline-block;\r\n}\r\n\r\n.wrapper {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybWZpbHRyYXIvZm9ybWZpbHRyYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9ybWZpbHRyYXIvZm9ybWZpbHRyYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVye1xyXG4gICAgd2lkdGg6NXB4O1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/formfiltrar/formfiltrar.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/formfiltrar/formfiltrar.component.ts ***!
          \******************************************************/
        /*! exports provided: FormfiltrarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormfiltrarComponent", function () { return FormfiltrarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _servicios_traerautos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/traerautos.service */ "./src/app/servicios/traerautos.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
            /* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
            /* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            //import { Tipo } from '../modelos/tipo';
            var FormfiltrarComponent = /** @class */ (function () {
                // tipos = new Array<string>();
                //listaFiltradoTipo:Array<auto>;
                //selectedValue = "vacio";
                //selectedValue = Tipo.vacio;
                function FormfiltrarComponent(ts, router) {
                    this.ts = ts;
                    this.router = router;
                    this.razonSocial = '';
                    this.tipos = new Array();
                    this.localidades = new Array();
                    this.concesionarias = new Array();
                    this.tipoSeleccionado = "auto";
                    this.localidadSeleccionada = "avellaneda";
                    this.concesionariaSeleccionada = "concesionaria tito";
                    this.mostrar = "";
                    this.headElements = ['marca', 'modelo', 'año',
                        'kilometros', 'tipo', 'localidad', 'concesionaria'];
                    //this.vehi.push (JSON.parse(localStorage.getItem('vehiculo')));
                    //this.vehi = new vehiculo("","","",0, Tipo.vacio ,"");  
                    this.autos = new Array();
                    this.tipos.push("auto");
                    this.tipos.push("camioneta");
                    this.tipos.push("camion");
                    this.localidades.push("avellaneda");
                    this.localidades.push("ezpeleta");
                    this.localidades.push("quilmes");
                    this.localidades.push("wilde");
                    this.localidades.push("sarandi");
                    this.concesionarias.push("concesionaria A");
                    this.concesionarias.push("concesionaria B");
                    this.concesionarias.push("concesionaria C");
                    this.concesionarias.push("concesionaria D");
                    this.concesionarias.push("concesionaria E");
                    this.concesionarias.push("concesionaria F");
                    this.listaOriginal = new Array();
                    console.log("entro al constructor");
                    //this.traerdatos();
                }
                FormfiltrarComponent.prototype.ngOnInit = function () {
                    this.traerdatos(); //Se eejcuta y pueden x segundos
                    this._concesionaria = JSON.parse(localStorage.getItem('concesionaria'));
                    console.log(this._concesionaria.razon_social);
                    this.razonSocial = this._concesionaria.razon_social;
                };
                FormfiltrarComponent.prototype.traerdatos = function () {
                    var _this = this;
                    //let aux = new Array<auto>();
                    this.ts.getautos().subscribe(function (_autos) {
                        _autos.rta.forEach(function (element) {
                            //this.autos.push(element);
                            _this.autos.push(element);
                        });
                        _this.listaOriginal = _this.autos;
                        console.log(_this.autos);
                    });
                };
                FormfiltrarComponent.prototype.filtrarPorTipo = function () {
                    // this.autos =  await this.traerdatos(); //peticion asincronica
                    console.log("len: " + this.autos.length);
                    this.autos = new Array();
                    console.log(this.tipoSeleccionado);
                    //this.autos= this.listaOriginal.filter(item => item.tipo==this.selectedValue); 
                    console.log(this.autos);
                    for (var i = 0; i < this.listaOriginal.length; i++) {
                        if (this.tipoSeleccionado == this.listaOriginal[i].tipo) {
                            this.autos.push(this.listaOriginal[i]);
                        }
                    }
                };
                FormfiltrarComponent.prototype.filtrarPorLocalidad = function () {
                    //console.log("len: "  + this.autos.length);
                    this.autos = new Array();
                    console.log(this.localidadSeleccionada);
                    //this.autos= this.listaOriginal.filter(item => item.tipo==this.selectedValue); 
                    console.log(this.autos);
                    for (var i = 0; i < this.listaOriginal.length; i++) {
                        if (this.localidadSeleccionada == this.listaOriginal[i].localidad) {
                            this.autos.push(this.listaOriginal[i]);
                        }
                    }
                };
                FormfiltrarComponent.prototype.filtrarPorConcesionaria = function () {
                    //console.log("len: "  + this.autos.length);
                    this.autos = new Array();
                    console.log(this.localidadSeleccionada);
                    //this.autos= this.listaOriginal.filter(item => item.tipo==this.selectedValue); 
                    console.log(this.autos);
                    for (var i = 0; i < this.listaOriginal.length; i++) {
                        if (this.concesionariaSeleccionada == this.listaOriginal[i].concesionaria) {
                            this.autos.push(this.listaOriginal[i]);
                        }
                    }
                };
                //descargar PDF
                FormfiltrarComponent.prototype.captureScreen = function () {
                    var data = document.getElementById('contentToConvert');
                    html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(data).then(function (canvas) {
                        // Few necessary setting options  
                        var imgWidth = 80;
                        var pageHeight = 380;
                        var imgHeight = canvas.height * imgWidth / canvas.width;
                        var heightLeft = imgHeight;
                        var contentDataURL = canvas.toDataURL('image/png');
                        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__('p', 'mm', 'a4'); // A4 size page of PDF  
                        var position = 0;
                        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                        pdf.save('MYPdf.pdf'); // Generated PDF   
                    });
                };
                FormfiltrarComponent.prototype.cargarVehiculo = function () {
                    this.router.navigate(['/cargaVehiculo']);
                };
                return FormfiltrarComponent;
            }());
            FormfiltrarComponent.ctorParameters = function () { return [
                { type: _servicios_traerautos_service__WEBPACK_IMPORTED_MODULE_1__["TraerautosService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            FormfiltrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-formfiltrar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formfiltrar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formfiltrar/formfiltrar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formfiltrar.component.css */ "./src/app/formfiltrar/formfiltrar.component.css")).default]
                })
            ], FormfiltrarComponent);
            /***/ 
        }),
        /***/ "./src/app/formulario/formulario.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/formulario/formulario.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/formulario/formulario.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/formulario/formulario.component.ts ***!
          \****************************************************/
        /*! exports provided: FormularioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function () { return FormularioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _servicios_concesionaria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/concesionaria.service */ "./src/app/servicios/concesionaria.service.ts");
            /* harmony import */ var _modelos_concesionaria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modelos/concesionaria */ "./src/app/modelos/concesionaria.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            //import { consecionaria } from '../modelos/concesionaria';
            var FormularioComponent = /** @class */ (function () {
                /*
                  Mobile = new FormControl('', [
                   Validators.required,
                   Validators.pattern("^[0-9]*$"),
                   Validators.minLength(4),
                 ]);
                 */
                function FormularioComponent(_concesServ, router) {
                    this._concesServ = _concesServ;
                    this.router = router;
                    this.localidades = new Array();
                    this.conces = new _modelos_concesionaria__WEBPACK_IMPORTED_MODULE_3__["Concesionaria"]("", "", "", "", "", "");
                    this.localidades.push("avellaneda");
                    this.localidades.push("ezpeleta");
                    this.localidades.push("quilmes");
                    this.localidades.push("wilde");
                    this.localidades.push("sarandi");
                }
                FormularioComponent.prototype.numberOnly = function (event) {
                    var charCode = (event.which) ? event.which : event.keyCode;
                    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                        return false;
                    }
                    return true;
                };
                FormularioComponent.prototype.ngOnInit = function () {
                };
                FormularioComponent.prototype.validar = function () {
                    //console.log("hola");
                    console.log(this.conces.email + " " + this.conces.pass);
                    this._concesServ.post(this.conces)
                        .subscribe(function (token) { console.log("token desde login" + token); });
                    this.router.navigate(['/login']);
                };
                return FormularioComponent;
            }());
            FormularioComponent.ctorParameters = function () { return [
                { type: _servicios_concesionaria_service__WEBPACK_IMPORTED_MODULE_2__["ConcesionariaService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            FormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-formulario',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formulario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulario/formulario.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formulario.component.css */ "./src/app/formulario/formulario.component.css")).default]
                })
            ], FormularioComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _modelos_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modelos/usuario */ "./src/app/modelos/usuario.ts");
            /* harmony import */ var _modelos_cliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modelos/cliente */ "./src/app/modelos/cliente.ts");
            /* harmony import */ var _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/authservicio.service */ "./src/app/auth/authservicio.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _servicios_concesionaria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/concesionaria.service */ "./src/app/servicios/concesionaria.service.ts");
            //import { LoginService } from '../login.service';
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(ls, router, concesionaria) {
                    this.ls = ls;
                    this.router = router;
                    this.concesionaria = concesionaria;
                    this.esValido = false;
                    this.us = new _modelos_usuario__WEBPACK_IMPORTED_MODULE_2__["usuario"]("", "");
                    this.cli = new _modelos_cliente__WEBPACK_IMPORTED_MODULE_3__["cliente"]("", "");
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.validar = function () {
                    var _this = this;
                    this.cli.user = this.us.nombre;
                    this.cli.pass = this.us.clave;
                    this.ls.postlogin(this.cli)
                        .subscribe(function (resultado) {
                        if (resultado) {
                            _this.router.navigate(['/filtrarVehiculos']);
                        }
                        else {
                            _this.esValido = true;
                            //Mostrar mensaje en pantalla 
                            //que el usuario y contrasenia es incorrecto
                        }
                    });
                    this.concesionaria.getConcesionaria(this.cli).
                        subscribe(function (resp) {
                        resp.rta.forEach(function (element) {
                            if (element.user == _this.cli.user && element.pass == _this.cli.pass) {
                                localStorage.setItem('concesionaria', JSON.stringify(element));
                            }
                        });
                    });
                    ;
                    // console.log(this.us.nombre + " " + this.us.clave);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_4__["AuthservicioService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _servicios_concesionaria_service__WEBPACK_IMPORTED_MODULE_6__["ConcesionariaService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/modelos/auto.ts": 
        /*!*********************************!*\
          !*** ./src/app/modelos/auto.ts ***!
          \*********************************/
        /*! exports provided: auto */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function () { return auto; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            //import { Tipo } from './tipo';
            var auto = /** @class */ (function () {
                /*
                constructor(_marca:string, _modelo:string) {
                    this.marca = _marca;
                    this.modelo = _modelo;
                }*/
                function auto(_marca, _modelo, _an, _kilometros, _tipo, _foto, _localidad, _concesionaria) {
                    this.marca = _marca;
                    this.modelo = _modelo;
                    this.an = _an;
                    this.kilometros = _kilometros;
                    this.tipo = _tipo;
                    this.foto = _foto;
                    this.localidad = _localidad;
                    this.concesionaria = _concesionaria;
                }
                return auto;
            }());
            /***/ 
        }),
        /***/ "./src/app/modelos/cliente.ts": 
        /*!************************************!*\
          !*** ./src/app/modelos/cliente.ts ***!
          \************************************/
        /*! exports provided: cliente */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cliente", function () { return cliente; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var cliente = /** @class */ (function () {
                function cliente(_user, _pass) {
                    this.user = _user;
                    this.pass = _pass;
                }
                return cliente;
            }());
            /***/ 
        }),
        /***/ "./src/app/modelos/concesionaria.ts": 
        /*!******************************************!*\
          !*** ./src/app/modelos/concesionaria.ts ***!
          \******************************************/
        /*! exports provided: Concesionaria */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concesionaria", function () { return Concesionaria; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Concesionaria = /** @class */ (function () {
                function Concesionaria(_user, _pass, _email, razon_social, _telefono, _localidad) {
                    this.user = _user;
                    this.pass = _pass;
                    this.email = _email;
                    this.razon_social = razon_social;
                    this.telefono = _telefono;
                    this.localidad = _localidad;
                }
                return Concesionaria;
            }());
            /***/ 
        }),
        /***/ "./src/app/modelos/usuario.ts": 
        /*!************************************!*\
          !*** ./src/app/modelos/usuario.ts ***!
          \************************************/
        /*! exports provided: usuario */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuario", function () { return usuario; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var usuario = /** @class */ (function () {
                function usuario(nombre, clave) {
                    this.nombre = nombre;
                    this.clave = clave;
                }
                return usuario;
            }());
            /***/ 
        }),
        /***/ "./src/app/modelos/variables.ts": 
        /*!**************************************!*\
          !*** ./src/app/modelos/variables.ts ***!
          \**************************************/
        /*! exports provided: variables */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variables", function () { return variables; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var variables = /** @class */ (function () {
                function variables() {
                    this.urlBase = 'http://localhost:3003/';
                    if (window.location.href.toString().includes('localhost')) {
                        this.urlBase = 'http://localhost:3003/';
                    }
                    else {
                        this.urlBase = 'https://intense-shelf-02357.herokuapp.com/';
                    }
                    // this.urlBase = 'http://qwaugusto-001-site5.htempurl.com/api/';
                    if (window['__entorno'] != null) {
                        this.urlBase = window['__entorno'];
                    }
                    window['__entorno'] = this.urlBase;
                }
                return variables;
            }());
            /***/ 
        }),
        /***/ "./src/app/modelos/vehiculo.ts": 
        /*!*************************************!*\
          !*** ./src/app/modelos/vehiculo.ts ***!
          \*************************************/
        /*! exports provided: vehiculo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehiculo", function () { return vehiculo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            //import { Tipo } from './tipo';
            var vehiculo = /** @class */ (function () {
                function vehiculo(marca, modelo, an, kilometros, tipo, foto) {
                    this.marca = marca;
                    this.modelo = modelo;
                    this.an = an;
                    this.kilometros = kilometros;
                    this.tipo = tipo;
                    this.foto = foto;
                }
                return vehiculo;
            }());
            /***/ 
        }),
        /***/ "./src/app/navvar/navvar.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/navvar/navvar.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdnZhci9uYXZ2YXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/navvar/navvar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navvar/navvar.component.ts ***!
          \********************************************/
        /*! exports provided: NavvarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavvarComponent", function () { return NavvarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavvarComponent = /** @class */ (function () {
                function NavvarComponent() {
                }
                NavvarComponent.prototype.ngOnInit = function () {
                };
                return NavvarComponent;
            }());
            NavvarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navvar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navvar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navvar/navvar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navvar.component.css */ "./src/app/navvar/navvar.component.css")).default]
                })
            ], NavvarComponent);
            /***/ 
        }),
        /***/ "./src/app/servicios/auto.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/servicios/auto.service.ts ***!
          \*******************************************/
        /*! exports provided: AutoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoService", function () { return AutoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/authservicio.service */ "./src/app/auth/authservicio.service.ts");
            /* harmony import */ var _modelos_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modelos/variables */ "./src/app/modelos/variables.ts");
            var AutoService = /** @class */ (function () {
                //variableUrl:variables = new variables();
                function AutoService(http, auth) {
                    this.http = http;
                    this.auth = auth;
                    this.v = new _modelos_variables__WEBPACK_IMPORTED_MODULE_4__["variables"]();
                    this.urlauto = this.v.urlBase + "auto"; //"http://localhost:3003/auto";
                    this.v = new _modelos_variables__WEBPACK_IMPORTED_MODULE_4__["variables"]();
                }
                /*  return this.http.get<any>(this.url,{
                   headers: new HttpHeaders().set('token',token ),
                 }); */
                AutoService.prototype.post = function (_auto) {
                    var token = this.auth.devolverToken();
                    var a = { auto: _auto };
                    console.log(JSON.stringify(_auto));
                    /*return this.http.post<any>(this.urlauto, a,{
                      headers: new HttpHeaders().set('token',token ),
                    })
                    */
                    return this.http.post(this.v.urlBase + "auto", a, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('token', token),
                    });
                };
                return AutoService;
            }());
            AutoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_3__["AuthservicioService"] }
            ]; };
            AutoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AutoService);
            /***/ 
        }),
        /***/ "./src/app/servicios/concesionaria.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/servicios/concesionaria.service.ts ***!
          \****************************************************/
        /*! exports provided: ConcesionariaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcesionariaService", function () { return ConcesionariaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _modelos_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modelos/variables */ "./src/app/modelos/variables.ts");
            var ConcesionariaService = /** @class */ (function () {
                function ConcesionariaService(http) {
                    this.http = http;
                    this.variableUrl = new _modelos_variables__WEBPACK_IMPORTED_MODULE_3__["variables"]();
                    this.urllogin = this.variableUrl.urlBase + "clientes";
                }
                ConcesionariaService.prototype.post = function (_conces) {
                    var concesionaria = { cliente: _conces };
                    console.log(_conces);
                    return this.http.post(this.urllogin, concesionaria);
                };
                ConcesionariaService.prototype.getConcesionaria = function (_cli) {
                    return this.http.get(this.urllogin);
                };
                return ConcesionariaService;
            }());
            ConcesionariaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ConcesionariaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ConcesionariaService);
            /***/ 
        }),
        /***/ "./src/app/servicios/traerautos.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/servicios/traerautos.service.ts ***!
          \*************************************************/
        /*! exports provided: TraerautosService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraerautosService", function () { return TraerautosService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/authservicio.service */ "./src/app/auth/authservicio.service.ts");
            /* harmony import */ var _modelos_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modelos/variables */ "./src/app/modelos/variables.ts");
            var TraerautosService = /** @class */ (function () {
                function TraerautosService(http, auth) {
                    this.http = http;
                    this.auth = auth;
                    this.variablesUrl = new _modelos_variables__WEBPACK_IMPORTED_MODULE_4__["variables"]();
                    this.url = this.variablesUrl.urlBase + "auto"; //"http://localhost:3003/auto";
                }
                /*
                  postlogin(_cli:cliente):Observable<any> {
                    
                    let cliente ={ cliente:_cli }
                    console.log(_cli);
                    return this.http.post<any>(this.urllogin, cliente)
                    
                    .pipe( map(token => {
                      
                      if(token && token.token){
                         //aca guardamos en el local storage
                         console.log("token desde el service" + token.token);
                      }
                      return token;
                   //.pipe(map((response) => token.json()))
                
                  }));
                  */
                TraerautosService.prototype.getautos = function () {
                    var token = this.auth.devolverToken();
                    console.log(token);
                    return this.http.get(this.url, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('token', token),
                    });
                    /*
                    .pipe( map(token => {
                      
                      if(token && token.token){
                         //aca guardamos en el local storage
                         console.log("token desde el service" + token.token);
                      }
                      return token; */
                };
                return TraerautosService;
            }());
            TraerautosService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _auth_authservicio_service__WEBPACK_IMPORTED_MODULE_3__["AuthservicioService"] }
            ]; };
            TraerautosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TraerautosService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                url: 'http://localhost:3003'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\segparc2511\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map