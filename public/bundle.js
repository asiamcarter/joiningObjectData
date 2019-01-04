(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cardHTML = _interopRequireDefault(require("./cardHTML"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DOMappend = {
  appendToDOM() {
    _data.default.fetchData().then(parsedData => parsedData.forEach(item => {
      let test = _cardHTML.default.buildHTML(item);
    }));
  }

};
var _default = DOMappend;
exports.default = _default;

},{"./cardHTML":2,"./data":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let cardHTML = {
  buildHTML(value) {
    let outputArticle = document.querySelector(".output");
    let employeeCard = document.createElement("article");
    employeeCard.classList.add("employee");
    outputArticle.appendChild(employeeCard);
    let employeeHeader = document.createElement("header");
    employeeHeader.classList.add("employee__name");
    employeeHeader.innerHTML = `<h1>${value.name}</h1>`;
    employeeCard.appendChild(employeeHeader);
    let employeeSection = document.createElement("section");
    employeeSection.classList.add("employee__department");
    employeeSection.innerHTML = `Works in the ${value.department.name}`;
    employeeCard.appendChild(employeeSection);
    let employeeComputerSection = document.createElement("section");
    employeeComputerSection.classList.add("employee__computer");
    employeeComputerSection.innerHTML = `Currently using a ${value.computer.name}`;
    employeeCard.appendChild(employeeComputerSection);
  }

};
var _default = cardHTML;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const data = {
  fetchData() {
    return fetch("http://localhost:8088/employees?_expand=department&_expand=computer").then(response => response.json());
  }

};
var _default = data;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("./data"));

var _DOMappend = _interopRequireDefault(require("./DOMappend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_DOMappend.default.appendToDOM();

},{"./DOMappend":1,"./data":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0RPTWFwcGVuZC5qcyIsIi4uL3NjcmlwdHMvY2FyZEhUTUwuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFFQSxJQUFJLFNBQVMsR0FBRztBQUNaLEVBQUEsV0FBVyxHQUFJO0FBQ1gsa0JBQUssU0FBTCxHQUNDLElBREQsQ0FDTSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQVgsQ0FBb0IsSUFBSSxJQUFJO0FBQzVDLFVBQUksSUFBSSxHQUFHLGtCQUFTLFNBQVQsQ0FBbUIsSUFBbkIsQ0FBWDtBQUNILEtBRm1CLENBRHBCO0FBSUg7O0FBTlcsQ0FBaEI7ZUFVZSxTOzs7Ozs7Ozs7O0FDWmYsSUFBSSxRQUFRLEdBQUc7QUFDWCxFQUFBLFNBQVMsQ0FBQyxLQUFELEVBQVE7QUFDYixRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLFFBQUksWUFBWSxHQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWxCO0FBQ0EsSUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixVQUEzQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDQSxRQUFJLGNBQWMsR0FBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBLElBQUEsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsR0FBekIsQ0FBNkIsZ0JBQTdCO0FBQ0EsSUFBQSxjQUFjLENBQUMsU0FBZixHQUE0QixPQUFNLEtBQUssQ0FBQyxJQUFLLE9BQTdDO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixjQUF6QjtBQUNBLFFBQUksZUFBZSxHQUFDLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsc0JBQTlCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsR0FBNEIsZ0JBQWUsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsSUFBSyxFQUFqRTtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsZUFBekI7QUFDQSxRQUFJLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQTlCO0FBQ0EsSUFBQSx1QkFBdUIsQ0FBQyxTQUF4QixDQUFrQyxHQUFsQyxDQUFzQyxvQkFBdEM7QUFDQSxJQUFBLHVCQUF1QixDQUFDLFNBQXhCLEdBQXFDLHFCQUFvQixLQUFLLENBQUMsUUFBTixDQUFlLElBQUssRUFBN0U7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLHVCQUF6QjtBQUNIOztBQWxCVSxDQUFmO2VBcUJlLFE7Ozs7Ozs7Ozs7QUN0QmYsTUFBTSxJQUFJLEdBQUc7QUFDVCxFQUFBLFNBQVMsR0FBRztBQUNULFdBQU8sS0FBSyxDQUFDLHFFQUFELENBQUwsQ0FDTCxJQURLLENBQ0EsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFosQ0FBUDtBQUdGOztBQUxRLENBQWI7ZUFRZSxJOzs7Ozs7QUNSZjs7QUFDQTs7OztBQUVBLG1CQUFVLFdBQVYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgY2FyZEhUTUwgZnJvbSBcIi4vY2FyZEhUTUxcIlxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiXG5cbmxldCBET01hcHBlbmQgPSB7XG4gICAgYXBwZW5kVG9ET00gKCkge1xuICAgICAgICBkYXRhLmZldGNoRGF0YSgpXG4gICAgICAgIC50aGVuKHBhcnNlZERhdGEgPT4gcGFyc2VkRGF0YS5mb3JFYWNoIChpdGVtID0+IHtcbiAgICAgICAgICAgIGxldCB0ZXN0ID0gY2FyZEhUTUwuYnVpbGRIVE1MKGl0ZW0pXG4gICAgICAgIH0pKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBET01hcHBlbmQiLCJcbmxldCBjYXJkSFRNTCA9IHtcbiAgICBidWlsZEhUTUwodmFsdWUpIHtcbiAgICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICAgICAgbGV0IGVtcGxveWVlQ2FyZCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgIGVtcGxveWVlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVcIik7XG4gICAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQoZW1wbG95ZWVDYXJkKTtcbiAgICAgICAgbGV0IGVtcGxveWVlSGVhZGVyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgICAgICBlbXBsb3llZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVfX25hbWVcIilcbiAgICAgICAgZW1wbG95ZWVIZWFkZXIuaW5uZXJIVE1MID0gYDxoMT4ke3ZhbHVlLm5hbWV9PC9oMT5gXG4gICAgICAgIGVtcGxveWVlQ2FyZC5hcHBlbmRDaGlsZChlbXBsb3llZUhlYWRlcik7XG4gICAgICAgIGxldCBlbXBsb3llZVNlY3Rpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGVtcGxveWVlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIik7XG4gICAgICAgIGVtcGxveWVlU2VjdGlvbi5pbm5lckhUTUw9IGBXb3JrcyBpbiB0aGUgJHt2YWx1ZS5kZXBhcnRtZW50Lm5hbWV9YFxuICAgICAgICBlbXBsb3llZUNhcmQuYXBwZW5kQ2hpbGQoZW1wbG95ZWVTZWN0aW9uKTtcbiAgICAgICAgbGV0IGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJlbXBsb3llZV9fY29tcHV0ZXJcIik7XG4gICAgICAgIGVtcGxveWVlQ29tcHV0ZXJTZWN0aW9uLmlubmVySFRNTCA9IGBDdXJyZW50bHkgdXNpbmcgYSAke3ZhbHVlLmNvbXB1dGVyLm5hbWV9YFxuICAgICAgICBlbXBsb3llZUNhcmQuYXBwZW5kQ2hpbGQoZW1wbG95ZWVDb21wdXRlclNlY3Rpb24pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FyZEhUTUxcblxuIiwiY29uc3QgZGF0YSA9IHtcbiAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VtcGxveWVlcz9fZXhwYW5kPWRlcGFydG1lbnQmX2V4cGFuZD1jb21wdXRlclwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGEiLCJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCBET01hcHBlbmQgZnJvbSBcIi4vRE9NYXBwZW5kXCJcblxuRE9NYXBwZW5kLmFwcGVuZFRvRE9NKCk7Il19
