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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishedController = void 0;
const common_1 = require("@nestjs/common");
const published_service_1 = require("./published.service");
const create_published_dto_1 = require("./dto/create-published.dto");
const update_published_dto_1 = require("./dto/update-published.dto");
const auth_guard_1 = require("../auth/auth.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const Public = () => (0, common_1.SetMetadata)('isPublic', true);
let PublishedController = class PublishedController {
    constructor(publishedService) {
        this.publishedService = publishedService;
    }
    async findAll() {
        return this.publishedService.findAll();
    }
    async findOne(id) {
        const published = await this.publishedService.findOne(+id);
        if (!published) {
            throw new common_1.HttpException('Published item not found', common_1.HttpStatus.NOT_FOUND);
        }
        return published;
    }
    async create(createPublishedDto, user) {
        console.log('Creating published item for user:', user);
        return this.publishedService.create(createPublishedDto);
    }
    async update(id, updatePublishedDto, user) {
        console.log('Updating published item for user:', user);
        const published = await this.publishedService.update(+id, updatePublishedDto);
        if (!published) {
            throw new common_1.HttpException('Published item not found', common_1.HttpStatus.NOT_FOUND);
        }
        return published;
    }
    async remove(id, user) {
        console.log('Deleting published item for user:', user);
        const deleted = await this.publishedService.remove(+id);
        if (!deleted) {
            throw new common_1.HttpException('Published item not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Published item deleted successfully' };
    }
};
exports.PublishedController = PublishedController;
__decorate([
    (0, common_1.Get)(),
    Public(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublishedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    Public(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublishedController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_published_dto_1.CreatePublishedDto, Object]),
    __metadata("design:returntype", Promise)
], PublishedController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_published_dto_1.UpdatePublishedDto, Object]),
    __metadata("design:returntype", Promise)
], PublishedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PublishedController.prototype, "remove", null);
exports.PublishedController = PublishedController = __decorate([
    (0, common_1.Controller)('published'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [published_service_1.PublishedService])
], PublishedController);
//# sourceMappingURL=published.controller.js.map