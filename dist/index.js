'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

var Button = function () {
    var _a = react.useState(0), val = _a[0], setVal = _a[1];
    var handleClick = function () {
        setVal(val + 1);
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("p", { children: val }), jsxRuntime.jsx("button", { onClick: handleClick, children: "Click Me" })] }));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
