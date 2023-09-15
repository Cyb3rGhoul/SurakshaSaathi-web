"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const secure_1 = __importDefault(require("../controllers/secure"));
router.post("/secure", secure_1.default);
exports.default = secure_1.default;
