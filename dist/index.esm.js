import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

var Button = function () {
    var _a = useState(0), val = _a[0], setVal = _a[1];
    var handleClick = function () {
        setVal(val + 1);
    };
    return (jsxs(Fragment, { children: [jsx("p", { children: val }), jsx("button", { onClick: handleClick, children: "Click Me" })] }));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
