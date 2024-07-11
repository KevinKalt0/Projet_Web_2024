"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesModule = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const message_resolver_1 = require("./message.resolver");
const users_module_1 = require("../user/users.module"); // Importer UsersModule
const conversation_module_1 = require("../conversation/conversation.module");
const message_queue_module_1 = require("../message-queue/message-queue.module");
let MessagesModule = class MessagesModule {
};
exports.MessagesModule = MessagesModule;
exports.MessagesModule = MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            conversation_module_1.ConversationsModule,
            (0, common_1.forwardRef)(() => message_queue_module_1.MessageQueueModule),
        ],
        providers: [message_service_1.MessagesService, message_resolver_1.MessagesResolver],
        exports: [message_service_1.MessagesService],
    })
], MessagesModule);
