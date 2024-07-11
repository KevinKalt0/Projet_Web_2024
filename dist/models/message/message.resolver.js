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
exports.MessagesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const message_service_1 = require("../message/message.service");
const message_1 = require("../message/message");
const users_service_1 = require("../user/users.service");
const conversation_service_1 = require("../conversation/conversation.service");
const message_queue_service_1 = require("../message-queue/message-queue.service");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let MessagesResolver = class MessagesResolver {
    constructor(messagesService, usersService, conversationsService, messageQueueService) {
        this.messagesService = messagesService;
        this.usersService = usersService;
        this.conversationsService = conversationsService;
        this.messageQueueService = messageQueueService;
    }
    messages(conversationId) {
        return this.messagesService.findByConversation(conversationId);
    }
    async sendMessage(content, senderId, conversationId) {
        const sender = this.usersService.findOne(senderId);
        if (!sender) {
            throw new Error(`User with ID ${senderId} not found`);
        }
        const conversation = this.conversationsService.findOne(conversationId);
        if (!conversation) {
            throw new Error('Conversation not found');
        }
        const message = {
            id: Date.now().toString(),
            content,
            sender,
            conversation,
            createdAt: new Date(),
        };
        await this.messageQueueService.addMessageToQueue(message);
        return message;
    }
};
exports.MessagesResolver = MessagesResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => [message_1.Message]),
    __param(0, (0, graphql_1.Args)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], MessagesResolver.prototype, "messages", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => message_1.Message),
    __param(0, (0, graphql_1.Args)('content')),
    __param(1, (0, graphql_1.Args)('senderId')),
    __param(2, (0, graphql_1.Args)('conversationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], MessagesResolver.prototype, "sendMessage", null);
exports.MessagesResolver = MessagesResolver = __decorate([
    (0, graphql_1.Resolver)(() => message_1.Message),
    __metadata("design:paramtypes", [message_service_1.MessagesService,
        users_service_1.UsersService,
        conversation_service_1.ConversationsService,
        message_queue_service_1.MessageQueueService])
], MessagesResolver);
