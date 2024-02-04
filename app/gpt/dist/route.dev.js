"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = POST;
exports.dynamic = void 0;

var _server = require("next/server");

var _openai = _interopRequireDefault(require("openai"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var openai = new _openai["default"]({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true
});
var dynamic = "force-dynamic";
exports.dynamic = dynamic;

function POST(req) {
  var _ref, prompt, response;

  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          _ref = _context.sent;
          prompt = _ref.prompt;
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
              role: "user",
              content: prompt
            }]
          }));

        case 7:
          response = _context.sent;
          return _context.abrupt("return", _server.NextResponse.json({
            choices: response.choices
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          return _context.abrupt("return", _server.NextResponse.json({
            message: "Something went wrong",
            error: _context.t0
          }, {
            status: 400
          }));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11]]);
}