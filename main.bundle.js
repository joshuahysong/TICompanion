webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_player_player_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__players_player_stats_player_stats_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__players_player_technology_player_technology_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/players/1/stats', pathMatch: 'full' },
    { path: 'players/:id', component: __WEBPACK_IMPORTED_MODULE_2__players_player_player_component__["a" /* PlayerComponent */],
        children: [
            { path: '', redirectTo: 'stats', pathMatch: 'full' },
            { path: 'stats', component: __WEBPACK_IMPORTED_MODULE_3__players_player_stats_player_stats_component__["a" /* PlayerStatsComponent */] },
            { path: 'technology', component: __WEBPACK_IMPORTED_MODULE_4__players_player_technology_player_technology_component__["a" /* PlayerTechnologyComponent */] }
        ]
    },
    { path: '**', redirectTo: '/players/1/stats', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    var urlProduction = null;
    urlProduction = '/TICompanion';
}
var AppComponent = (function () {
    function AppComponent() {
        this.url = urlProduction; // {{url}} in the template.
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(175),
        styles: [__webpack_require__(166)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__players_player_player_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__players_shared_player_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__races_race_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_units_unit_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_technologies_technology_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__players_player_stats_player_stats_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__players_player_technology_player_technology_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__players_player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__players_player_stats_player_stats_component__["a" /* PlayerStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__players_player_technology_player_technology_component__["a" /* PlayerTechnologyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__players_shared_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_9__races_race_service__["a" /* RaceService */],
            __WEBPACK_IMPORTED_MODULE_10_app_units_unit_service__["a" /* UnitService */],
            __WEBPACK_IMPORTED_MODULE_11_app_technologies_technology_service__["a" /* TechnologyService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_shared_player_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(playerService, router, route) {
        this.playerService = playerService;
        this.router = router;
        this.route = route;
        this.isIn = false; // collapsed state
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    NavigationComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavigationComponent.prototype.onSelect = function (player) {
        if (this.isIn) {
            this.toggleState();
        }
    };
    NavigationComponent.prototype.getPlayers = function () {
        this.players = this.playerService.getAll();
    };
    NavigationComponent.prototype.resetData = function () {
        localStorage.removeItem('players');
        localStorage.clear();
        location.reload();
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__(176),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__players_shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__players_shared_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], NavigationComponent);

var _a, _b, _c;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player(id, name) {
        this.id = id;
        this.name = name;
    }
    return Player;
}());

//# sourceMappingURL=player.model.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.selected a,\r\nli.selected a:hover,\r\nli.selected a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 767px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin-top: 6px;\r\n        margin-bottom: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 2px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".checkbox {\r\n  margin-top: 1px;\r\n  margin-bottom: 1px;\r\n\r\n}\r\n\r\nlabel {\r\n  font-weight: normal;\r\n  min-height: 20px;\r\n    padding-left: 20px;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n    cursor: normal;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  position: absolute;\r\n  margin-top: 4px \\9;\r\n  margin-left: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".form-inline {\r\n  padding: 10px;\r\n}\r\n.form-inline > * {\r\n  margin: 15px 5px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <app-navigation></app-navigation>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\"\r\n          class=\"navbar-toggle collapsed\"\r\n          (click)=\"toggleState()\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\">TI Companion</a>\r\n      </div>\r\n\r\n      <div class=\"collapse navbar-collapse\"\r\n        [ngClass]=\"{ 'in': isIn }\">\r\n\r\n        <ul class=\"nav navbar-nav\">\r\n\r\n          <li *ngFor=\"let player of players\"\r\n            [class.selected]=\"player === playerService.currentPlayer\"\r\n            (click)=\"onSelect(player)\">\r\n            <a [routerLink]=\"['/players/', player.id]\">\r\n\r\n              <img *ngIf=\"player.race; else noRace\"\r\n                src=\"{{url}}/assets/img/{{player.race.iconPath}}\"\r\n                style=\"width:20px; height:20px;\"\r\n                class='glyphicon'>\r\n\r\n                <ng-template #noRace>\r\n                  <span class='glyphicon glyphicon-user'\r\n                    style=\"width:20px; height:20px;\"></span>\r\n                </ng-template>\r\n\r\n              <span>{{player.name}}</span>\r\n            </a>\r\n          </li>\r\n          \r\n          <li (click)=\"resetData()\">\r\n            <a [routerLink]=\"['/players/1']\">\r\n              <span class='glyphicon glyphicon-refresh'></span>\r\n              Reset (Debugging)\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"units\">\r\n  <table class=\"table table-bordered table-striped table-responsive\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Move</th>\r\n        <th>Attack</th>\r\n        <th>HP</th>\r\n        <th>Carry</th>\r\n        <th>Cost</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let unit of player.units\">\r\n        <td>{{unit.name}}</td>\r\n        <td><span *ngIf=\"unit.move != 0\">{{unit.move}}</span></td>\r\n        <td><span *ngIf=\"unit.attack != 0\">{{unit.attack}}</span>\r\n          <span *ngIf=\"unit.attacks > 1\">x {{unit.attacks}}</span>\r\n        </td>\r\n        <td><span *ngIf=\"unit.hp != 0\">{{unit.hp}}</span></td>\r\n        <td><span *ngIf=\"unit.carry != 0\">{{unit.carry}}</span></td>\r\n        <td><div *ngIf=\"unit.cost != 0\">\r\n            <span *ngIf=\"unit.cost == .5; else cost\">1 x 2</span>\r\n            <ng-template #cost>{{unit.cost}}</ng-template>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"player\" \r\n  class=\"table table-bordered table-hover table-responsive table-condensed\">\r\n  <tr *ngFor=\"let technology of player.technologies\">\r\n\r\n    <td class=\"{{ technology.type === 'Red' ? 'danger' : \r\n      technology.type === 'Blue' ? 'info' :\r\n      technology.type === 'Yellow' ? 'warning' :\r\n      technology.type === 'Green' ? 'success' : 'active'}}\"\r\n        (click)=\"researchTechnology(technology.id)\">\r\n\r\n        <input type=\"checkbox\"\r\n          [checked]=\"technology.researched\">\r\n        <label>\r\n          {{technology.name}}\r\n        </label>\r\n\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"player\">\r\n\r\n  <form class=\"form-inline\" role=\"form\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"playerName\">Name</label>\r\n        <input type=\"text\"\r\n          [(ngModel)]=\"player.name\"\r\n          class=\"form-control\"\r\n          id=\"playerName\"\r\n          name=\"playerName\"\r\n          placeholder=\"Player Name\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"race\">Race</label>\r\n      <select\r\n        [ngModel]=\"player?.race?.id\"\r\n        (ngModelChange)=\"raceOnChange($event)\"\r\n        class=\"form-control\"\r\n        name=\"race\" id=\"race\">\r\n        <option value=\"null\" disabled>Select the race</option>\r\n        <option *ngFor=\"let race of races\"\r\n          [ngValue]=\"race.id\">{{race.name}}</option>\r\n      </select>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <ul class=\"nav nav-tabs\">\r\n    <li role=\"presentation\"\r\n      [class.active]=\"activeTab == 1\"\r\n      (click)=\"onTabSelect(1)\">\r\n      <a data-toggle=\"tab\" [routerLink]=\"['/players', player.id, 'stats']\">Stats</a>\r\n    </li>\r\n\r\n    <li role=\"presentation\"\r\n      [class.active]=\"activeTab == 2\"\r\n      (click)=\"onTabSelect(2)\">\r\n      <a data-toggle=\"tab\" [routerLink]=\"['/players', player.id, 'technology']\">Technology</a>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_model__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_storage_sync__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_storage_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_storage_sync__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerService = (function () {
    function PlayerService() {
        this.players = [];
        this.maxPlayers = 6; // TODO Needs to be a user setting eventually
        this.savedPlayers = [];
    }
    PlayerService.prototype.getAll = function () {
        this.players = this.savedPlayers.map(function (x) { return Object.assign({}, x); });
        if (this.players.length != this.maxPlayers) {
            this.players = [];
            for (var i = 1; i <= this.maxPlayers; i++) {
                this.addPlayer(i);
            }
        }
        return this.players;
    };
    PlayerService.prototype.getPlayer = function (id) {
        var playerIndex = this.players.findIndex(function (x) { return x.id == id; });
        this.savePlayersData();
        this.currentPlayer = this.players[playerIndex];
        return this.currentPlayer;
    };
    PlayerService.prototype.addPlayer = function (id) {
        var player = new __WEBPACK_IMPORTED_MODULE_1__player_model__["a" /* Player */](id, 'Player ' + id);
        this.currentPlayer = player;
        this.players.push(player);
        this.savePlayersData();
        return player;
    };
    PlayerService.prototype.deletePlayer = function (id) {
        var playerIndex = this.players.findIndex(function (x) { return x.id === id; });
        if (playerIndex > -1) {
            this.players.splice(playerIndex, 1);
            this.savePlayersData();
        }
        // Find id of prev player if any or next if first and return
        if (this.players[playerIndex - 1]) {
            return this.players[playerIndex - 1].id;
        }
        else if (this.players[playerIndex]) {
            return this.players[playerIndex].id;
        }
        else {
            return null;
        }
    };
    // This is a terrible way of making sure localstorage data is synced....
    // Not sure what else to do just yet. 
    PlayerService.prototype.savePlayersData = function () {
        this.savedPlayers = this.players.map(function (x) { return Object.assign({}, x); });
    };
    return PlayerService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_storage_sync__["StorageSync"])('players'),
    __metadata("design:type", Array)
], PlayerService.prototype, "savedPlayers", void 0);
PlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnitService = (function () {
    function UnitService(http) {
        this.http = http;
        this.unitsUrl = 'assets/units.json';
    }
    UnitService.prototype.getAll = function () {
        return this.http.get(this.unitsUrl)
            .map(function (res) { return res.json(); });
    };
    return UnitService;
}());
UnitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UnitService);

var _a;
//# sourceMappingURL=unit.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_player_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_units_unit_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerStatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerStatsComponent = (function () {
    function PlayerStatsComponent(playerService, unitService, route, router) {
        this.playerService = playerService;
        this.unitService = unitService;
        this.route = route;
        this.router = router;
    }
    PlayerStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.unitService.getAll().subscribe(function (units) {
                _this.units = units;
                _this.player = _this.playerService.getPlayer(id);
            });
        });
    };
    PlayerStatsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return PlayerStatsComponent;
}());
PlayerStatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-player-stats',
        template: __webpack_require__(177),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_units_unit_service__["a" /* UnitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_units_unit_service__["a" /* UnitService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], PlayerStatsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=player-stats.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_player_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_technologies_technology_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerTechnologyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerTechnologyComponent = (function () {
    function PlayerTechnologyComponent(playerService, technologyService, route, router) {
        this.playerService = playerService;
        this.technologyService = technologyService;
        this.route = route;
        this.router = router;
    }
    PlayerTechnologyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.technologyService.getAll().subscribe(function (technologies) {
                _this.player = _this.playerService.getPlayer(id);
                // Load starting technology list for this player
                if (!_this.player.technologies) {
                    _this.player.technologies = technologies.map(function (x) { return Object.assign({}, x); });
                }
            });
        });
    };
    PlayerTechnologyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlayerTechnologyComponent.prototype.researchTechnology = function (id) {
        console.log(1);
        var selectedTech = this.player.technologies.find(function (e) { return e.id === id; });
        if (selectedTech) {
            selectedTech.researched = !selectedTech.researched;
            this.playerService.savePlayersData();
        }
        event.stopPropagation();
    };
    return PlayerTechnologyComponent;
}());
PlayerTechnologyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-player-technology',
        template: __webpack_require__(178),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_technologies_technology_service__["a" /* TechnologyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_technologies_technology_service__["a" /* TechnologyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], PlayerTechnologyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=player-technology.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_races_race_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_player_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_units_unit_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlayerComponent = (function () {
    function PlayerComponent(playerService, raceService, unitService, route, router, location) {
        this.playerService = playerService;
        this.raceService = raceService;
        this.unitService = unitService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.activeTab = 1;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.raceService.getAll().subscribe(function (races) {
                _this.races = races;
                _this.unitService.getAll().subscribe(function (units) {
                    _this.units = units;
                    _this.player = _this.playerService.getPlayer(id);
                    _this.player.units = _this.units.map(function (x) { return Object.assign({}, x); });
                    _this.adjustUnitsByRace();
                    if (location.pathname.endsWith('technology')) {
                        _this.activeTab = 2;
                    }
                    else {
                        _this.activeTab = 1;
                    }
                });
            });
        });
    };
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlayerComponent.prototype.raceOnChange = function (newValue) {
        var _this = this;
        this.raceService.getByID(newValue).subscribe(function (race) {
            _this.player.race = race;
            _this.playerService.savePlayersData();
            _this.adjustUnitsByRace();
        });
    };
    PlayerComponent.prototype.adjustUnitsByRace = function () {
        if (this.player.race && this.player.units) {
            for (var i = 0; i < this.player.units.length; i++) {
                var playerUnit = this.player.units[i];
                var defaultUnit = this.units[i];
                playerUnit.move = defaultUnit.move;
                playerUnit.attack = defaultUnit.attack;
                playerUnit.attacks = defaultUnit.attacks;
                playerUnit.hp = defaultUnit.hp;
                playerUnit.carry = defaultUnit.carry;
                playerUnit.cost = defaultUnit.cost;
                for (var a = 0; a < this.player.race.unitAdjustment.length; a++) {
                    var raceUnit = this.player.race.unitAdjustment[a];
                    if (playerUnit.name === raceUnit.name) {
                        playerUnit.move = defaultUnit.move + raceUnit.move;
                        playerUnit.attack = defaultUnit.attack - raceUnit.attack;
                        playerUnit.attacks = defaultUnit.attacks + raceUnit.attacks;
                        playerUnit.hp = defaultUnit.hp + raceUnit.hp;
                        playerUnit.carry = defaultUnit.carry + raceUnit.carry;
                        playerUnit.cost = defaultUnit.cost + raceUnit.cost;
                    }
                }
            }
        }
    };
    PlayerComponent.prototype.onTabSelect = function (tabIndex) {
        this.activeTab = tabIndex;
    };
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__(179),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_races_race_service__["a" /* RaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_races_race_service__["a" /* RaceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_units_unit_service__["a" /* UnitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_units_unit_service__["a" /* UnitService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _f || Object])
], PlayerComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaceService = (function () {
    function RaceService(http) {
        this.http = http;
        this.racesUrl = 'assets/races.json';
    }
    RaceService.prototype.getAll = function () {
        return this.http.get(this.racesUrl)
            .map(function (res) { return res.json(); });
    };
    RaceService.prototype.getByID = function (id) {
        return this.getAll().map(function (all) {
            return all.find(function (e) { return e.id === id; });
        });
    };
    return RaceService;
}());
RaceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RaceService);

var _a;
//# sourceMappingURL=race.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TechnologyService = (function () {
    function TechnologyService(http) {
        this.http = http;
        this.technologiesUrl = 'assets/technologies.json';
    }
    TechnologyService.prototype.getAll = function () {
        return this.http.get(this.technologiesUrl)
            .map(function (res) { return res.json(); });
    };
    TechnologyService.prototype.getByID = function (id) {
        return this.getAll().map(function (all) {
            return all.find(function (e) { return e.id === id; });
        });
    };
    return TechnologyService;
}());
TechnologyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TechnologyService);

var _a;
//# sourceMappingURL=technology.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(69);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.bundle.js.map