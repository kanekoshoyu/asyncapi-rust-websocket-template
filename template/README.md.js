"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render_readme = render_readme;
const tool_1 = require("./tool");
function content() {
    return `
# WebSocket Client
generated by [async-rust-ws-template](https://github.com/kanekoshoyu/asyncapi-rust-ws-template)
  `;
}
function render_readme() {
    return (0, tool_1.render)("README.md", content());
}
