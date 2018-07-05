"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var trans_service_1 = require("../../shared/service/trans.service");
var user_service_1 = require("../../shared/service/user.service");
var pager_service_component_1 = require("../../shared/service/pager.service.component");
var Neworderlistmanager = (function () {
    function Neworderlistmanager(pagerService, transservice, userService) {
        this.pagerService = pagerService;
        this.transservice = transservice;
        this.userService = userService;
        // pager object
        this.pager = {};
    }
    Neworderlistmanager.prototype.ngOnInit = function () {
        var _this = this;
        this.transservice.getAllAvaliableForWork().subscribe(function (data) {
            _this.translist = data;
            console.log(_this.translist);
            _this.setPage(1);
        });
    };
    Neworderlistmanager.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.translist.length, page);
        // get current page of items
        this.pagedItems = this.translist.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return Neworderlistmanager;
}());
Neworderlistmanager = __decorate([
    core_1.Component({
        selector: 'get-new-order',
        templateUrl: './app/components/get-new-order/get-new-order.html',
        styles: ['']
    }),
    __metadata("design:paramtypes", [pager_service_component_1.PagerService, trans_service_1.TransService, user_service_1.UserService])
], Neworderlistmanager);
exports.Neworderlistmanager = Neworderlistmanager;
//# sourceMappingURL=get-new-order.component.js.map