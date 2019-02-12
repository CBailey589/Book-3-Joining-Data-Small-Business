(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getEmployeeData() {
  return fetch("http://localhost:8088/employees?_expand=computer&_expand=department").then(response => response.json());
}

var _default = getEmployeeData;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _getEmployeeData = _interopRequireDefault(require("./getEmployeeData"));

var _turnDataToHTMLString = _interopRequireDefault(require("./turnDataToHTMLString"));

var _putHTMLOnDOM = _interopRequireDefault(require("./putHTMLOnDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _getEmployeeData.default)().then(employees => (0, _turnDataToHTMLString.default)(employees)).then(HTMLString => (0, _putHTMLOnDOM.default)(HTMLString));

},{"./getEmployeeData":1,"./putHTMLOnDOM":3,"./turnDataToHTMLString":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function putHTMLOnDOM(HTMLString) {
  document.querySelector("#employeeList").innerHTML = HTMLString;
}

var _default = putHTMLOnDOM;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function turnDataToHTMLString(employees) {
  let HTMLString = employees.map(employee => {
    return `
        <article class="employee">
            <header class="employee__name">
                <h1>${employee.first_name} ${employee.last_name}</h1>
            </header>
            <section class="employee__department">
                Works as the ${employee.job_title} in our ${employee.department.dept_name}
            </section>
            <section class="employee__computer">
                Currently using a ${employee.computer.make} ${employee.computer.model}
            </section>
        </article>
        `;
  });
  return HTMLString.join("");
}

var _default = turnDataToHTMLString;
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2dldEVtcGxveWVlRGF0YS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvcHV0SFRNTE9uRE9NLmpzIiwiLi4vc2NyaXB0cy90dXJuRGF0YVRvSFRNTFN0cmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSxTQUFTLGVBQVQsR0FBMkI7QUFDdkIsU0FBTyxLQUFLLENBQUMscUVBQUQsQ0FBTCxDQUNGLElBREUsQ0FDRyxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEZixDQUFQO0FBRUg7O2VBRWMsZTs7Ozs7O0FDTGY7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxnQ0FDSyxJQURMLENBQ1csU0FBRCxJQUFhLG1DQUFxQixTQUFyQixDQUR2QixFQUVLLElBRkwsQ0FFVyxVQUFELElBQWdCLDJCQUFhLFVBQWIsQ0FGMUI7Ozs7Ozs7Ozs7QUNKQSxTQUFTLFlBQVQsQ0FBc0IsVUFBdEIsRUFBa0M7QUFDOUIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixFQUF3QyxTQUF4QyxHQUFvRCxVQUFwRDtBQUNIOztlQUVjLFk7Ozs7Ozs7Ozs7O0FDSmYsU0FBUyxvQkFBVCxDQUE4QixTQUE5QixFQUF5QztBQUNyQyxNQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBVixDQUFlLFFBQUQsSUFBYztBQUN6QyxXQUFROzs7c0JBR00sUUFBUSxDQUFDLFVBQVcsSUFBRyxRQUFRLENBQUMsU0FBVTs7OytCQUdqQyxRQUFRLENBQUMsU0FBVSxXQUFVLFFBQVEsQ0FBQyxVQUFULENBQW9CLFNBQVU7OztvQ0FHdEQsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsSUFBSyxJQUFHLFFBQVEsQ0FBQyxRQUFULENBQWtCLEtBQU07OztTQVQ5RTtBQWFILEdBZGdCLENBQWpCO0FBZUEsU0FBTyxVQUFVLENBQUMsSUFBWCxDQUFnQixFQUFoQixDQUFQO0FBQ0g7O2VBRWMsb0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBnZXRFbXBsb3llZURhdGEoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZW1wbG95ZWVzP19leHBhbmQ9Y29tcHV0ZXImX2V4cGFuZD1kZXBhcnRtZW50XCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRFbXBsb3llZURhdGEiLCJpbXBvcnQgZ2V0RW1wbG95ZWVEYXRhIGZyb20gXCIuL2dldEVtcGxveWVlRGF0YVwiXHJcbmltcG9ydCB0dXJuRGF0YVRvSFRNTFN0cmluZyBmcm9tIFwiLi90dXJuRGF0YVRvSFRNTFN0cmluZ1wiXHJcbmltcG9ydCBwdXRIVE1MT25ET00gZnJvbSBcIi4vcHV0SFRNTE9uRE9NXCJcclxuXHJcbmdldEVtcGxveWVlRGF0YSgpXHJcbiAgICAudGhlbigoZW1wbG95ZWVzKT0+dHVybkRhdGFUb0hUTUxTdHJpbmcoZW1wbG95ZWVzKSlcclxuICAgIC50aGVuKChIVE1MU3RyaW5nKSA9PiBwdXRIVE1MT25ET00oSFRNTFN0cmluZykpIiwiZnVuY3Rpb24gcHV0SFRNTE9uRE9NKEhUTUxTdHJpbmcpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWVMaXN0XCIpLmlubmVySFRNTCA9IEhUTUxTdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHV0SFRNTE9uRE9NIiwiZnVuY3Rpb24gdHVybkRhdGFUb0hUTUxTdHJpbmcoZW1wbG95ZWVzKSB7XHJcbiAgICBsZXQgSFRNTFN0cmluZyA9IGVtcGxveWVlcy5tYXAoKGVtcGxveWVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImVtcGxveWVlXCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJlbXBsb3llZV9fbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPiR7ZW1wbG95ZWUuZmlyc3RfbmFtZX0gJHtlbXBsb3llZS5sYXN0X25hbWV9PC9oMT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIj5cclxuICAgICAgICAgICAgICAgIFdvcmtzIGFzIHRoZSAke2VtcGxveWVlLmpvYl90aXRsZX0gaW4gb3VyICR7ZW1wbG95ZWUuZGVwYXJ0bWVudC5kZXB0X25hbWV9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9fY29tcHV0ZXJcIj5cclxuICAgICAgICAgICAgICAgIEN1cnJlbnRseSB1c2luZyBhICR7ZW1wbG95ZWUuY29tcHV0ZXIubWFrZX0gJHtlbXBsb3llZS5jb21wdXRlci5tb2RlbH1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICBgXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIEhUTUxTdHJpbmcuam9pbihcIlwiKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0dXJuRGF0YVRvSFRNTFN0cmluZyJdfQ==
