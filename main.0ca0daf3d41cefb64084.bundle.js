webpackJsonp([1,4],{"/fcW":function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="/fcW"},1:function(l,n,u){l.exports=u("x35b")},"1A80":function(l,n,u){"use strict";function t(l){return r._25(0,[(l()(),r._26(0,null,null,16,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),r._27(null,["\n    "])),(l()(),r._26(0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),r._27(null,["\n        "])),(l()(),r._26(0,null,null,4,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),r._27(null,["\n            "])),(l()(),r._26(0,null,null,1,"app-navigation",[],null,null,null,a.a,a.b)),r._28(114688,null,0,o.a,[c.a,s.c,s.a],null,null),(l()(),r._27(null,["\n        "])),(l()(),r._27(null,["\n        "])),(l()(),r._26(0,null,null,4,"div",[["class","col-sm-9 body-content"]],null,null,null,null,null)),(l()(),r._27(null,["\n            "])),(l()(),r._26(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(212992,null,0,s.y,[s.q,r.W,r.e,[8,null],r.T],null,null),(l()(),r._27(null,["\n        "])),(l()(),r._27(null,["\n    "])),(l()(),r._27(null,["\n"]))],function(l,n){l(n,7,0),l(n,13,0)},null)}function e(l){return r._25(0,[(l()(),r._26(0,null,null,1,"app-root",[],null,null,null,t,f)),r._28(49152,null,0,_.a,[],null,null)],null,null)}var i=u("Ni5f"),r=u("3j3K"),a=u("3+R3"),o=u("uvQH"),c=u("JehK"),s=u("5oXY"),_=u("YWx4");u.d(n,"a",function(){return d});var p=[i.a],f=r._24({encapsulation:0,styles:p,data:{}}),d=r._29("app-root",_.a,e,{},{},[])},"2lQI":function(l,n,u){"use strict";var t=u("Fzro"),e=u("Gvdl"),i=(u.n(e),u("+pb+"));u.n(i);u.d(n,"a",function(){return r});var r=function(){function l(l){this.http=l,this.technologiesUrl="assets/technologies.json"}return l.prototype.getAll=function(){var l=this;return this.technologies?e.Observable.of(this.technologies):this.http.get(this.technologiesUrl).map(function(l){return l.json()}).do(function(n){l.technologies=n})},l.prototype.getByID=function(l){return this.technologies?e.Observable.of(this.technologies.find(function(n){return n.id===l})):this.getAll().map(function(n){return n.find(function(n){return n.id===l})})},l.ctorParameters=function(){return[{type:t.i}]},l}()},"3+R3":function(l,n,u){"use strict";function t(l){return c._25(0,[(l()(),c._26(0,null,null,0,"img",[["class","glyphicon"],["style","width:20px; height:20px;"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){var u=n.component;l(n,0,0,c._30(2,"",u.baseURL,"/assets/img/",n.parent.context.$implicit.race.iconPath,""))})}function e(l){return c._25(0,[(l()(),c._27(null,["\n                  "])),(l()(),c._26(0,null,null,0,"span",[["class","glyphicon glyphicon-user"],["style","width:20px; height:20px;"]],null,null,null,null,null)),(l()(),c._27(null,["\n                "]))],null,null)}function i(l){return c._25(0,[(l()(),c._26(0,null,null,14,"li",[],[[2,"selected",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.onSelect(l.context.$implicit)&&t}return t},null,null)),(l()(),c._27(null,["\n            "])),(l()(),c._26(0,null,null,11,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==c._31(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),c._28(671744,null,0,s.z,[s.c,s.a,_.d],{routerLink:[0,"routerLink"]},null),c._32(2),(l()(),c._27(null,["\n\n              "])),(l()(),c._33(16777216,null,null,1,null,t)),c._28(16384,null,0,_.l,[c.W,c._7],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),c._27(null,["\n\n                "])),(l()(),c._33(0,[["noRace",2]],null,0,null,e)),(l()(),c._27(null,["\n\n              "])),(l()(),c._26(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),c._27(null,["",""])),(l()(),c._27(null,["\n            "])),(l()(),c._27(null,["\n          "]))],function(l,n){l(n,3,0,l(n,4,0,"/players/",n.context.$implicit.id)),l(n,7,0,n.context.$implicit.race,c._31(n,9))},function(l,n){var u=n.component;l(n,0,0,n.context.$implicit.id===u.currentIndex),l(n,2,0,c._31(n,3).target,c._31(n,3).href),l(n,12,0,n.context.$implicit.name)})}function r(l){return c._25(0,[(l()(),c._26(0,null,null,48,"div",[["class","main-nav"]],null,null,null,null,null)),(l()(),c._27(null,["\n  "])),(l()(),c._26(0,null,null,45,"nav",[["class","navbar navbar-inverse"]],null,null,null,null,null)),(l()(),c._27(null,["\n    "])),(l()(),c._26(0,null,null,42,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),c._27(null,["\n\n      "])),(l()(),c._26(0,null,null,18,"div",[["class","navbar-header"]],null,null,null,null,null)),(l()(),c._27(null,["\n        "])),(l()(),c._26(0,null,null,10,"button",[["class","navbar-toggle collapsed"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.toggleState()&&t}return t},null,null)),(l()(),c._27(null,["\n          "])),(l()(),c._26(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),c._27(null,["Toggle navigation"])),(l()(),c._27(null,["\n          "])),(l()(),c._26(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),c._27(null,["\n          "])),(l()(),c._26(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),c._27(null,["\n          "])),(l()(),c._26(0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),c._27(null,["\n        "])),(l()(),c._27(null,["\n        "])),(l()(),c._26(0,null,null,3,"a",[["class","navbar-brand"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==c._31(l,21).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),c._28(671744,null,0,s.z,[s.c,s.a,_.d],{routerLink:[0,"routerLink"]},null),c._32(1),(l()(),c._27(null,["TI Companion"])),(l()(),c._27(null,["\n      "])),(l()(),c._27(null,["\n\n      "])),(l()(),c._26(0,null,null,19,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),c._28(278528,null,0,_.m,[c.l,c.n,c.P,c.O],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),c._34(["in"]),(l()(),c._27(null,["\n\n        "])),(l()(),c._26(0,null,null,14,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(l()(),c._27(null,["\n\n          "])),(l()(),c._33(16777216,null,null,1,null,i)),c._28(802816,null,0,_.n,[c.W,c._7,c.l],{ngForOf:[0,"ngForOf"]},null),(l()(),c._27(null,["\n          \n          "])),(l()(),c._26(0,null,null,8,"li",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.resetData()&&t}return t},null,null)),(l()(),c._27(null,["\n            "])),(l()(),c._26(0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==c._31(l,38).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),c._28(671744,null,0,s.z,[s.c,s.a,_.d],{routerLink:[0,"routerLink"]},null),c._32(1),(l()(),c._27(null,["\n              "])),(l()(),c._26(0,null,null,0,"span",[["class","glyphicon glyphicon-refresh"]],null,null,null,null,null)),(l()(),c._27(null,["\n              Reset (Debugging)\n            "])),(l()(),c._27(null,["\n          "])),(l()(),c._27(null,["\n\n        "])),(l()(),c._27(null,["\n      "])),(l()(),c._27(null,["\n\n    "])),(l()(),c._27(null,["\n  "])),(l()(),c._27(null,["\n"])),(l()(),c._27(null,["\n"]))],function(l,n){var u=n.component;l(n,21,0,l(n,22,0,"/")),l(n,27,0,"collapse navbar-collapse",l(n,28,0,u.isIn)),l(n,33,0,u.players),l(n,38,0,l(n,39,0,"/players/1"))},function(l,n){l(n,20,0,c._31(n,21).target,c._31(n,21).href),l(n,37,0,c._31(n,38).target,c._31(n,38).href)})}function a(l){return c._25(0,[(l()(),c._26(0,null,null,1,"app-navigation",[],null,null,null,r,g)),c._28(114688,null,0,p.a,[f.a,s.c,s.a],null,null)],function(l,n){l(n,1,0)},null)}var o=u("XfLH"),c=u("3j3K"),s=u("5oXY"),_=u("2Je8"),p=u("uvQH"),f=u("JehK");u.d(n,"b",function(){return g}),n.a=r;var d=[o.a],g=c._24({encapsulation:0,styles:d,data:{}});c._29("app-navigation",p.a,a,{},{},[])},Cd9f:function(l,n,u){"use strict";var t=u("kqxW"),e=u("Y7qD"),i=u("W7Dj");u.d(n,"a",function(){return r});var r=(t.a,e.a,i.a,function(){function l(){}return l}())},DJBj:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(l,n){this.id=l,this.name=n}return l}()},Iksp:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},JehK:function(l,n,u){"use strict";var t=u("Gvdl"),e=(u.n(t),u("+pb+")),i=(u.n(e),u("DJBj")),r=u("s4i5"),a=u("gkbx");u.d(n,"a",function(){return o});var o=function(){function l(l,n){this.raceService=l,this.unitService=n,this.maxPlayers=6}return l.prototype.getAll=function(){var l=this;return this.players?t.Observable.of(this.players):this.units?(this.players=this.getAllPlayers(),t.Observable.of(this.players)):this.unitService.getAll().map(function(n){return l.units=n,l.players=l.getAllPlayers(),l.players})},l.prototype.getAllPlayers=function(){for(var l=[],n=1;n<=this.maxPlayers;n++){var u=localStorage["Player"+n];u?l.push(JSON.parse(u)):l.push(this.addPlayer(n))}return l},l.prototype.getPlayer=function(l){return this.players?t.Observable.of(this.players.find(function(n){return n.id===l})):this.getAll().map(function(n){return n.find(function(n){return n.id===l})})},l.prototype.addPlayer=function(l){var n=new i.a(l,"Player "+l);return n.units=this.units,localStorage["Player"+l]=JSON.stringify(n),n},l.prototype.savePlayersData=function(){for(var l=1;l<=this.maxPlayers;l++){var n=this.players[l-1];localStorage["Player"+l]=JSON.stringify(n)}},l.ctorParameters=function(){return[{type:r.a},{type:a.a}]},l}()},KPb6:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".form-inline[_ngcontent-%COMP%]{padding:10px}.form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:15px 5px!important}"]},Ni5f:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["@media (max-width:767px){.body-content[_ngcontent-%COMP%]{padding-top:50px}}"]},QrGW:function(l,n,u){"use strict";function t(l){return h._25(0,[(l()(),h._26(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),h._27(null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.move)})}function e(l){return h._25(0,[(l()(),h._26(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),h._27(null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.attack)})}function i(l){return h._25(0,[(l()(),h._26(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),h._27(null,["x ",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.attacks)})}function r(l){return h._25(0,[(l()(),h._26(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),h._27(null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.hp)})}function a(l){return h._25(0,[(l()(),h._26(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),h._27(null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.carry)})}function o(l){return h._25(0,[(l()(),h._26(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),h._27(null,["1 x 2"]))],null,null)}function c(l){return h._25(0,[(l()(),h._27(null,["",""]))],null,function(l,n){l(n,0,0,n.parent.parent.context.$implicit.cost)})}function s(l){return h._25(0,[(l()(),h._26(0,null,null,6,"div",[],null,null,null,null,null)),(l()(),h._27(null,["\n            "])),(l()(),h._33(16777216,null,null,1,null,o)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),h._27(null,["\n            "])),(l()(),h._33(0,[["cost",2]],null,0,null,c)),(l()(),h._27(null,["\n          "]))],function(l,n){l(n,3,0,.5==n.parent.context.$implicit.cost,h._31(n,5))},null)}function _(l){return h._25(0,[(l()(),h._26(0,null,null,29,"tr",[],null,null,null,null,null)),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),h._27(null,["",""])),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),h._33(16777216,null,null,1,null,t)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"]},null),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,6,"td",[],null,null,null,null,null)),(l()(),h._33(16777216,null,null,1,null,e)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"]},null),(l()(),h._27(null,["\n          "])),(l()(),h._33(16777216,null,null,1,null,i)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"]},null),(l()(),h._27(null,["\n        "])),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),h._33(16777216,null,null,1,null,r)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"]},null),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,2,"td",[],null,null,null,null,null)),(l()(),h._33(16777216,null,null,1,null,a)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"]},null),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,3,"td",[],null,null,null,null,null)),(l()(),h._33(16777216,null,null,1,null,s)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"]},null),(l()(),h._27(null,["\n        "])),(l()(),h._27(null,["\n      "]))],function(l,n){l(n,7,0,0!=n.context.$implicit.move),l(n,11,0,0!=n.context.$implicit.attack),l(n,14,0,n.context.$implicit.attacks>1),l(n,19,0,0!=n.context.$implicit.hp),l(n,23,0,0!=n.context.$implicit.carry),l(n,27,0,0!=n.context.$implicit.cost)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function p(l){return h._25(0,[(l()(),h._26(0,null,null,34,"div",[],null,null,null,null,null)),(l()(),h._27(null,["\n  "])),(l()(),h._26(0,null,null,31,"table",[["class","table table-bordered table-striped table-responsive"]],null,null,null,null,null)),(l()(),h._27(null,["\n    "])),(l()(),h._26(0,null,null,22,"thead",[],null,null,null,null,null)),(l()(),h._27(null,["\n      "])),(l()(),h._26(0,null,null,19,"tr",[],null,null,null,null,null)),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),h._27(null,["Name"])),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),h._27(null,["Move"])),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),h._27(null,["Attack"])),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),h._27(null,["HP"])),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),h._27(null,["Carry"])),(l()(),h._27(null,["\n        "])),(l()(),h._26(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),h._27(null,["Cost"])),(l()(),h._27(null,["\n      "])),(l()(),h._27(null,["\n    "])),(l()(),h._27(null,["\n    "])),(l()(),h._26(0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),h._27(null,["\n      "])),(l()(),h._33(16777216,null,null,1,null,_)),h._28(802816,null,0,v.n,[h.W,h._7,h.l],{ngForOf:[0,"ngForOf"]},null),(l()(),h._27(null,["\n    "])),(l()(),h._27(null,["\n  "])),(l()(),h._27(null,["\n"]))],function(l,n){l(n,31,0,n.component.player.units)},null)}function f(l){return h._25(0,[(l()(),h._33(16777216,null,null,1,null,p)),h._28(16384,null,0,v.l,[h.W,h._7],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.units)},null)}function d(l){return h._25(0,[(l()(),h._26(0,null,null,1,"app-player-stats",[],null,null,null,f,P)),h._28(245760,null,0,y.a,[m.a,b.a,x.a,x.c],null,null)],function(l,n){l(n,1,0)},null)}var g=u("X5TH"),h=u("3j3K"),v=u("2Je8"),y=u("Y7qD"),m=u("JehK"),b=u("gkbx"),x=u("5oXY");u.d(n,"a",function(){return C});var k=[g.a],P=h._24({encapsulation:0,styles:k,data:{}}),C=h._29("app-player-stats",y.a,d,{},{},[])},W7Dj:function(l,n,u){"use strict";var t=u("5oXY"),e=u("JehK"),i=u("2lQI");u.d(n,"a",function(){return r});var r=function(){function l(l,n,u,t){this.playerService=l,this.technologyService=n,this.route=u,this.router=t}return l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.parent.params.subscribe(function(n){var u=+n.id;l.technologyService.getAll().subscribe(function(n){l.playerService.getPlayer(u).subscribe(function(u){l.player=u,l.player.technologies||(l.player.technologies=n.map(function(l){return Object.assign({},l)})),l.adjustTechnologyAvailability()})})})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l.prototype.researchTechnology=function(l){var n=this.player.technologies.find(function(n){return n.id===l});n&&(n.isResearched=!n.isResearched,this.playerService.savePlayersData()),this.adjustTechnologyAvailability(),event.stopPropagation()},l.prototype.adjustTechnologyAvailability=function(){for(var l=function(){var l=n.player.technologies[u];if(l.isAvailable=!1,l.prerequisites.length>0)for(var t=l.prerequisites,e=function(u){var e=t[u].length,i=0;if(e>0)for(var r=function(l){var e=n.player.technologies.find(function(n){return n.name===t[u][l]});e&&e.isResearched&&i++},a=0;a<e;a++)r(a);if(i===e)return l.isAvailable=!0,"continue"},i=0;i<t.length;i++)e(i);else l.isAvailable=!0},n=this,u=0;u<this.player.technologies.length;u++)l()},l.ctorParameters=function(){return[{type:e.a},{type:i.a},{type:t.a},{type:t.c}]},l}()},X5TH:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},XfLH:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["li[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{margin-right:10px}li.selected[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], li.selected[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, li.selected[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#4189c7;color:#fff}.main-nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:1}@media (min-width:767px){.main-nav[_ngcontent-%COMP%]{height:100%;width:calc(25% - 20px)}.navbar[_ngcontent-%COMP%]{border-radius:0;border-width:0;height:100%}.navbar-header[_ngcontent-%COMP%]{float:none}.navbar-collapse[_ngcontent-%COMP%]{border-top:1px solid #444;padding:0}.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{float:none}.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:none;font-size:15px;margin-top:6px;margin-bottom:6px}.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 16px;border-radius:2px}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}"]},Y7qD:function(l,n,u){"use strict";var t=u("5oXY"),e=u("JehK"),i=u("gkbx");u.d(n,"a",function(){return r});var r=function(){function l(l,n,u,t){this.playerService=l,this.unitService=n,this.route=u,this.router=t}return l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.parent.params.subscribe(function(n){var u=+n.id;l.unitService.getAll().subscribe(function(n){l.units=n,l.playerService.getPlayer(u).subscribe(function(n){l.player=n})})})},l.prototype.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},l.ctorParameters=function(){return[{type:e.a},{type:i.a},{type:t.a},{type:t.c}]},l}()},YWx4:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},aGId:function(l,n,u){"use strict";function t(l){return o._25(0,[(l()(),o._26(0,null,null,3,"option",[],null,null,null,null,null)),o._28(147456,null,0,c.d,[o.P,o.O,[2,c.e]],{ngValue:[0,"ngValue"]},null),o._28(147456,null,0,c.f,[o.P,o.O,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),o._27(null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit.name)})}function e(l){return o._25(0,[(l()(),o._26(0,null,null,62,"div",[],null,null,null,null,null)),(l()(),o._27(null,["\n\n  "])),(l()(),o._26(0,null,null,40,"form",[["class","form-inline"],["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;if("submit"===n){t=!1!==o._31(l,4).onSubmit(u)&&t}if("reset"===n){t=!1!==o._31(l,4).onReset()&&t}return t},null,null)),o._28(16384,null,0,c.g,[],null,null),o._28(16384,null,0,c.h,[[8,null],[8,null]],null,null),o._35(2048,null,c.i,null,[c.h]),o._28(16384,null,0,c.j,[c.i],null,null),(l()(),o._27(null,["\n\n    "])),(l()(),o._26(0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o._27(null,["\n      "])),(l()(),o._26(0,null,null,1,"label",[["for","playerName"]],null,null,null,null,null)),(l()(),o._27(null,["Name"])),(l()(),o._27(null,["\n        "])),(l()(),o._26(0,null,null,5,"input",[["class","form-control"],["id","playerName"],["name","playerName"],["placeholder","Player Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==o._31(l,14)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==o._31(l,14).onTouched()&&t}if("compositionstart"===n){t=!1!==o._31(l,14)._compositionStart()&&t}if("compositionend"===n){t=!1!==o._31(l,14)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.player.name=u)&&t}return t},null,null)),o._28(16384,null,0,c.k,[o.O,o.P,[2,c.l]],null,null),o._35(1024,null,c.m,function(l){return[l]},[c.k]),o._28(671744,null,0,c.n,[[2,c.i],[8,null],[8,null],[2,c.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o._35(2048,null,c.o,null,[c.n]),o._28(16384,null,0,c.p,[c.o],null,null),(l()(),o._27(null,["\n    "])),(l()(),o._27(null,["\n\n    "])),(l()(),o._26(0,null,null,20,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o._27(null,["\n      "])),(l()(),o._26(0,null,null,1,"label",[["for","race"]],null,null,null,null,null)),(l()(),o._27(null,["Race"])),(l()(),o._27(null,["\n      "])),(l()(),o._26(0,null,null,14,"select",[["class","form-control"],["id","race"],["name","race"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,e=l.component;if("change"===n){t=!1!==o._31(l,27).onChange(u.target.value)&&t}if("blur"===n){t=!1!==o._31(l,27).onTouched()&&t}if("ngModelChange"===n){t=!1!==e.raceOnChange(u)&&t}return t},null,null)),o._28(16384,null,0,c.e,[o.O,o.P],null,null),o._35(1024,null,c.m,function(l){return[l]},[c.e]),o._28(671744,null,0,c.n,[[2,c.i],[8,null],[8,null],[2,c.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o._35(2048,null,c.o,null,[c.n]),o._28(16384,null,0,c.p,[c.o],null,null),(l()(),o._27(null,["\n        "])),(l()(),o._26(0,null,null,3,"option",[["disabled",""],["value","null"]],null,null,null,null,null)),o._28(147456,null,0,c.d,[o.P,o.O,[2,c.e]],{value:[0,"value"]},null),o._28(147456,null,0,c.f,[o.P,o.O,[8,null]],{value:[0,"value"]},null),(l()(),o._27(null,["Select the race"])),(l()(),o._27(null,["\n        "])),(l()(),o._33(16777216,null,null,1,null,t)),o._28(802816,null,0,s.n,[o.W,o._7,o.l],{ngForOf:[0,"ngForOf"]},null),(l()(),o._27(null,["\n      "])),(l()(),o._27(null,["\n    "])),(l()(),o._27(null,["\n\n  "])),(l()(),o._27(null,["\n\n  "])),(l()(),o._26(0,null,null,17,"ul",[["class","nav nav-tabs"]],null,null,null,null,null)),(l()(),o._27(null,["\n    "])),(l()(),o._26(0,null,null,6,"li",[["role","presentation"]],[[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.onTabSelect(1)&&t}return t},null,null)),(l()(),o._27(null,["\n      "])),(l()(),o._26(0,null,null,3,"a",[["data-toggle","tab"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._31(l,49).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),o._28(671744,null,0,_.z,[_.c,_.a,s.d],{routerLink:[0,"routerLink"]},null),o._32(3),(l()(),o._27(null,["Stats"])),(l()(),o._27(null,["\n    "])),(l()(),o._27(null,["\n\n    "])),(l()(),o._26(0,null,null,6,"li",[["role","presentation"]],[[2,"active",null]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.onTabSelect(2)&&t}return t},null,null)),(l()(),o._27(null,["\n      "])),(l()(),o._26(0,null,null,3,"a",[["data-toggle","tab"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._31(l,57).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),o._28(671744,null,0,_.z,[_.c,_.a,s.d],{routerLink:[0,"routerLink"]},null),o._32(3),(l()(),o._27(null,["Technology"])),(l()(),o._27(null,["\n    "])),(l()(),o._27(null,["\n  "])),(l()(),o._27(null,["\n\n"]))],function(l,n){var u=n.component;l(n,16,0,"playerName",u.player.name),l(n,29,0,"race",null==u.player?null:null==u.player.race?null:u.player.race.id),l(n,34,0,"null"),l(n,35,0,"null"),l(n,39,0,u.races),l(n,49,0,l(n,50,0,"/players",u.player.id,"stats")),l(n,57,0,l(n,58,0,"/players",u.player.id,"technology"))},function(l,n){var u=n.component;l(n,2,0,o._31(n,6).ngClassUntouched,o._31(n,6).ngClassTouched,o._31(n,6).ngClassPristine,o._31(n,6).ngClassDirty,o._31(n,6).ngClassValid,o._31(n,6).ngClassInvalid,o._31(n,6).ngClassPending),l(n,13,0,o._31(n,18).ngClassUntouched,o._31(n,18).ngClassTouched,o._31(n,18).ngClassPristine,o._31(n,18).ngClassDirty,o._31(n,18).ngClassValid,o._31(n,18).ngClassInvalid,o._31(n,18).ngClassPending),l(n,26,0,o._31(n,31).ngClassUntouched,o._31(n,31).ngClassTouched,o._31(n,31).ngClassPristine,o._31(n,31).ngClassDirty,o._31(n,31).ngClassValid,o._31(n,31).ngClassInvalid,o._31(n,31).ngClassPending),l(n,46,0,1==u.activeTab),l(n,48,0,o._31(n,49).target,o._31(n,49).href),l(n,54,0,2==u.activeTab),l(n,56,0,o._31(n,57).target,o._31(n,57).href)})}function i(l){return o._25(0,[(l()(),o._33(16777216,null,null,1,null,e)),o._28(16384,null,0,s.l,[o.W,o._7],{ngIf:[0,"ngIf"]},null),(l()(),o._27(null,["\n\n"])),(l()(),o._26(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o._28(212992,null,0,_.y,[_.q,o.W,o.e,[8,null],o.T],null,null),(l()(),o._27(null,["\n"]))],function(l,n){l(n,1,0,n.component.player),l(n,4,0)},null)}function r(l){return o._25(0,[(l()(),o._26(0,null,null,1,"app-player",[],null,null,null,i,v)),o._28(245760,null,0,p.a,[f.a,d.a,g.a,_.a,_.c,s.g],null,null)],function(l,n){l(n,1,0)},null)}var a=u("KPb6"),o=u("3j3K"),c=u("NVOs"),s=u("2Je8"),_=u("5oXY"),p=u("kqxW"),f=u("JehK"),d=u("s4i5"),g=u("gkbx");u.d(n,"a",function(){return y});var h=[a.a],v=o._24({encapsulation:0,styles:h,data:{}}),y=o._29("app-player",p.a,r,{},{},[])},gNck:function(l,n,u){"use strict";function t(l){return o._25(0,[(l()(),o._26(0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),o._27(null,["\n\n    "])),(l()(),o._26(0,null,null,6,"td",[],[[8,"className",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.researchTechnology(l.context.$implicit.id)&&t}return t},null,null)),(l()(),o._27(null,["\n\n        "])),(l()(),o._26(0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],null,null,null,null)),(l()(),o._27(null,["\n        "])),(l()(),o._26(0,null,null,1,"label",[],[[2,"available",null]],null,null,null,null)),(l()(),o._27(null,["\n          ","\n        "])),(l()(),o._27(null,["\n\n    "])),(l()(),o._27(null,["\n  "]))],null,function(l,n){l(n,2,0,o._30(1,"","Red"===n.context.$implicit.type?"danger":"Blue"===n.context.$implicit.type?"info":"Yellow"===n.context.$implicit.type?"warning":"Green"===n.context.$implicit.type?"success":"active","")),l(n,4,0,n.context.$implicit.isResearched),l(n,6,0,n.context.$implicit.isAvailable),l(n,7,0,n.context.$implicit.name)})}function e(l){return o._25(0,[(l()(),o._26(0,null,null,5,"table",[["class","table table-bordered table-hover table-responsive table-condensed"]],null,null,null,null,null)),(l()(),o._27(null,["\n  "])),(l()(),o._26(0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),o._33(16777216,null,null,1,null,t)),o._28(802816,null,0,c.n,[o.W,o._7,o.l],{ngForOf:[0,"ngForOf"]},null),(l()(),o._27(null,["\n"]))],function(l,n){l(n,4,0,n.component.player.technologies)},null)}function i(l){return o._25(0,[(l()(),o._33(16777216,null,null,1,null,e)),o._28(16384,null,0,c.l,[o.W,o._7],{ngIf:[0,"ngIf"]},null),(l()(),o._27(null,["\n"]))],function(l,n){l(n,1,0,n.component.player)},null)}function r(l){return o._25(0,[(l()(),o._26(0,null,null,1,"app-player-technology",[],null,null,null,i,g)),o._28(245760,null,0,s.a,[_.a,p.a,f.a,f.c],null,null)],function(l,n){l(n,1,0)},null)}var a=u("nB2l"),o=u("3j3K"),c=u("2Je8"),s=u("W7Dj"),_=u("JehK"),p=u("2lQI"),f=u("5oXY");u.d(n,"a",function(){return h});var d=[a.a],g=o._24({encapsulation:0,styles:d,data:{}}),h=o._29("app-player-technology",s.a,r,{},{},[])},gkbx:function(l,n,u){"use strict";var t=u("Fzro"),e=u("Gvdl"),i=(u.n(e),u("+pb+"));u.n(i);u.d(n,"a",function(){return r});var r=function(){function l(l){this.http=l,this.unitsUrl="assets/units.json"}return l.prototype.getAll=function(){var l=this;return this.units?e.Observable.of(this.units):this.http.get(this.unitsUrl).map(function(l){return l.json()}).do(function(n){l.units=n})},l.ctorParameters=function(){return[{type:t.i}]},l}()},kZql:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0,envName:"prod"}},kke6:function(l,n,u){"use strict";var t=u("3j3K"),e=u("Iksp"),i=u("YWx4"),r=u("aGId"),a=u("QrGW"),o=u("gNck"),c=u("1A80"),s=u("2Je8"),_=u("Qbdm"),p=u("NVOs"),f=u("Fzro"),d=u("5oXY"),g=u("s4i5"),h=u("gkbx"),v=u("JehK"),y=u("2lQI"),m=u("kqxW"),b=u("Y7qD"),x=u("W7Dj"),k=u("Cd9f");u.d(n,"a",function(){return P});var P=t.b(e.a,[i.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[r.a,a.a,o.a,c.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,s.a,s.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,_.b,_.c,[_.d]),t.d(6144,t.p,null,[_.b]),t.d(4608,_.e,_.f,[]),t.d(5120,_.g,function(l,n,u,t){return[new _.h(l),new _.i(n),new _.j(u,t)]},[_.d,_.d,_.d,_.e]),t.d(4608,_.k,_.k,[_.g,t.q]),t.d(135680,_.l,_.l,[_.d]),t.d(4608,_.m,_.m,[_.k,_.l]),t.d(6144,t.r,null,[_.m]),t.d(6144,_.n,null,[_.l]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,_.o,_.o,[_.d]),t.d(4608,_.p,_.p,[_.d]),t.d(4608,p.a,p.a,[]),t.d(4608,f.a,f.a,[]),t.d(4608,f.b,f.c,[]),t.d(5120,f.d,f.e,[]),t.d(4608,f.f,f.f,[f.a,f.b,f.d]),t.d(4608,f.g,f.h,[]),t.d(5120,f.i,f.j,[f.f,f.g]),t.d(5120,d.a,d.b,[d.c]),t.d(4608,d.d,d.d,[]),t.d(6144,d.e,null,[d.d]),t.d(135680,d.f,d.f,[d.c,t.t,t.u,t.v,d.e]),t.d(4608,d.g,d.g,[]),t.d(5120,d.h,d.i,[d.j]),t.d(5120,t.w,function(l){return[l]},[d.h]),t.d(4608,g.a,g.a,[f.i]),t.d(4608,h.a,h.a,[f.i]),t.d(4608,v.a,v.a,[g.a,h.a]),t.d(4608,y.a,y.a,[f.i]),t.d(512,s.c,s.c,[]),t.d(1024,t.x,_.q,[]),t.d(1024,t.y,function(){return[d.k()]},[]),t.d(512,d.j,d.j,[t.v]),t.d(1024,t.z,function(l,n,u){return[_.r(l,n),d.l(u)]},[[2,_.s],[2,t.y],d.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,_.t,_.t,[[3,_.t]]),t.d(512,p.b,p.b,[]),t.d(512,p.c,p.c,[]),t.d(512,f.k,f.k,[]),t.d(1024,d.m,d.n,[[3,d.c]]),t.d(512,d.o,d.p,[]),t.d(512,d.q,d.q,[]),t.d(256,d.r,{},[]),t.d(1024,s.d,d.s,[s.e,[2,s.f],d.r]),t.d(512,s.g,s.g,[s.d]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,d.t,function(){return[[{path:"",redirectTo:"/players/1/stats",pathMatch:"full"},{path:"players/:id",component:m.a,children:[{path:"",redirectTo:"stats",pathMatch:"full"},{path:"stats",component:b.a},{path:"technology",component:x.a}]},{path:"**",redirectTo:"/players/1/stats",pathMatch:"full"}]]},[]),t.d(1024,d.c,d.u,[t.D,d.o,d.q,s.g,t.v,t.t,t.u,d.t,d.r,[2,d.v],[2,d.w]]),t.d(512,d.x,d.x,[[2,d.m],[2,d.c]]),t.d(512,k.a,k.a,[]),t.d(512,e.a,e.a,[])])})},kqxW:function(l,n,u){"use strict";var t=u("2Je8"),e=u("5oXY"),i=u("s4i5"),r=u("JehK"),a=u("gkbx");u.d(n,"a",function(){return o});var o=function(){function l(l,n,u,t,e,i){this.playerService=l,this.raceService=n,this.unitService=u,this.route=t,this.router=e,this.location=i,this.activeTab=1}return l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.params.subscribe(function(n){var u=+n.id;l.raceService.getAll().subscribe(function(n){l.races=n,l.unitService.getAll().subscribe(function(n){l.units=n,l.playerService.getPlayer(u).subscribe(function(n){l.player=n,l.player.units=l.units.map(function(l){return Object.assign({},l)}),l.adjustUnitsByRace(),2===l.activeTab?l.router.navigate(["/players",u,"technology"]):l.router.navigate(["/players",u,"stats"])})})})})},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l.prototype.raceOnChange=function(l){var n=this;this.raceService.getByID(l).subscribe(function(l){n.player.race=l,n.playerService.savePlayersData(),n.adjustUnitsByRace()})},l.prototype.adjustUnitsByRace=function(){if(this.player.race&&this.player.units)for(var l=0;l<this.player.units.length;l++){var n=this.player.units[l],u=this.units[l];n.move=u.move,n.attack=u.attack,n.attacks=u.attacks,n.hp=u.hp,n.carry=u.carry,n.cost=u.cost;for(var t=0;t<this.player.race.unitAdjustment.length;t++){var e=this.player.race.unitAdjustment[t];n.name===e.name&&(n.move=u.move+e.move,n.attack=u.attack-e.attack,n.attacks=u.attacks+e.attacks,n.hp=u.hp+e.hp,n.carry=u.carry+e.carry,n.cost=u.cost+e.cost)}}},l.prototype.onTabSelect=function(l){this.activeTab=l},l.ctorParameters=function(){return[{type:r.a},{type:i.a},{type:a.a},{type:e.a},{type:e.c},{type:t.g}]},l}()},nB2l:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".checkbox[_ngcontent-%COMP%]{margin-top:1px;margin-bottom:1px}label[_ngcontent-%COMP%]{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:normal;text-decoration:line-through}input[type=checkbox][_ngcontent-%COMP%]{position:absolute;margin-top:4px\\9;margin-left:0}.available[_ngcontent-%COMP%]{text-decoration:none}"]},s4i5:function(l,n,u){"use strict";var t=u("Fzro"),e=u("Gvdl"),i=(u.n(e),u("+pb+"));u.n(i);u.d(n,"a",function(){return r});var r=function(){function l(l){this.http=l,this.racesUrl="assets/races.json"}return l.prototype.getAll=function(){var l=this;return this.races?e.Observable.of(this.races):this.http.get(this.racesUrl).map(function(l){return l.json()}).do(function(n){l.races=n})},l.prototype.getByID=function(l){return this.races?e.Observable.of(this.races.find(function(n){return n.id===l})):this.getAll().map(function(n){return n.find(function(n){return n.id===l})})},l.ctorParameters=function(){return[{type:t.i}]},l}()},uvQH:function(l,n,u){"use strict";var t=u("5oXY"),e=u("kZql"),i=u("JehK");u.d(n,"a",function(){return r});var r=function(){function l(l,n,u){this.playerService=l,this.router=n,this.route=u,this.isIn=!1,this.baseURL="",this.currentIndex=1}return l.prototype.ngOnInit=function(){var l=this;e.a.production&&(this.baseURL="/TICompanion"),this.playerService.getAll().subscribe(function(n){l.players=n})},l.prototype.toggleState=function(){var l=this.isIn;this.isIn=!1===l},l.prototype.onSelect=function(l){this.isIn&&this.toggleState(),this.currentIndex=l.id},l.prototype.resetData=function(){localStorage.removeItem("players"),localStorage.clear(),location.reload()},l.ctorParameters=function(){return[{type:i.a},{type:t.c},{type:t.a}]},l}()},x35b:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("3j3K"),e=u("kZql"),i=u("Qbdm"),r=u("kke6");e.a.production&&u.i(t.a)(),u.i(i.a)().bootstrapModuleFactory(r.a)}},[1]);