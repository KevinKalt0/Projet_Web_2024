"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsService = void 0;
const common_1 = require("@nestjs/common");
let ConversationsService = class ConversationsService {
    constructor() {
        this.conversations = [];
    }
    findByUser(userId) {
        return this.conversations.filter(conversation => conversation.participants.some(user => user.id === userId));
    }
    findOne(id) {
        const conversation = this.conversations.find(conversation => conversation.id === id);
        if (!conversation) {
            return null;
        }
        return conversation;
    }
    create(participants) {
        const conversation = {
            id: Date.now().toString(),
            participants,
            createdAt: new Date(),
        };
        this.conversations.push(conversation);
        return conversation;
    }
};
exports.ConversationsService = ConversationsService;
exports.ConversationsService = ConversationsService = __decorate([
    (0, common_1.Injectable)()
], ConversationsService);
