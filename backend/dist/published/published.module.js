"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishedModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cache_manager_1 = require("@nestjs/cache-manager");
const published_controller_1 = require("./published.controller");
const published_service_1 = require("./published.service");
const published_entity_1 = require("./entities/published.entity");
let PublishedModule = class PublishedModule {
};
exports.PublishedModule = PublishedModule;
exports.PublishedModule = PublishedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([published_entity_1.PublishedEntity]),
            cache_manager_1.CacheModule.register(),
        ],
        controllers: [published_controller_1.PublishedController],
        providers: [published_service_1.PublishedService],
        exports: [published_service_1.PublishedService],
    })
], PublishedModule);
//# sourceMappingURL=published.module.js.map