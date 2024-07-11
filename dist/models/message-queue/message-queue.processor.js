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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageQueueProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const message_service_1 = require("../message/message.service");
let MessageQueueProcessor = class MessageQueueProcessor {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async handleSendMessage(job) {
        const message = job.data;
        console.log('Processing job:', message);
        this.messagesService.create(message.content, message.sender, message.conversation);
    }
};
exports.MessageQueueProcessor = MessageQueueProcessor;
__decorate([
    (0, bull_1.Process)('sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageQueueProcessor.prototype, "handleSendMessage", null);
exports.MessageQueueProcessor = MessageQueueProcessor = __decorate([
    (0, bull_1.Processor)('message-queue'),
    __metadata("design:paramtypes", [message_service_1.MessagesService])
], MessageQueueProcessor);
