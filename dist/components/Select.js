"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./Select.css");
const Select = ({ multiple, value, onChange, options, avatars, divider, className, }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [highlightedIndex, setHighlightedIndex] = (0, react_1.useState)(0);
    const containerRef = (0, react_1.useRef)(null);
    function clearOptions() {
        multiple ? onChange([]) : onChange(undefined);
    }
    function selectOption(option) {
        if (multiple === true) {
            if (value.includes(option)) {
                onChange(value.filter((o) => o !== option));
            }
            else {
                onChange([...value, option]);
            }
        }
        else {
            if (option !== value)
                onChange(option);
        }
    }
    function isOptionSelected(option) {
        return multiple ? value.includes(option) : option === value;
    }
    (0, react_1.useEffect)(() => {
        if (isOpen)
            setHighlightedIndex(0);
    }, [isOpen]);
    (0, react_1.useEffect)(() => {
        const handler = (e) => {
            if (e.target != containerRef.current)
                return;
            switch (e.code) {
                case 'Enter':
                case 'Space':
                    setIsOpen((prev) => !prev);
                    if (isOpen)
                        selectOption(options[highlightedIndex]);
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }
                    const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue);
                    }
                    break;
                case 'Escape':
                    setIsOpen(false);
                    break;
            }
        };
        const container = containerRef.current;
        if (!container) {
            return;
        }
        container.addEventListener('keydown', handler);
        return () => {
            container.removeEventListener('keydown', handler);
        };
    }, [isOpen, highlightedIndex, options]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: containerRef, onBlur: () => setIsOpen(false), onClick: () => setIsOpen((prev) => !prev), tabIndex: 0, className: `container ${className}` }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'value' }, { children: multiple
                    ? value.map((v) => ((0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: (e) => {
                            e.stopPropagation();
                            selectOption(v);
                        }, className: 'option-badge' }, { children: [avatars && v.avatar && ((0, jsx_runtime_1.jsx)("img", { src: v.avatar, alt: `${v.label} avatar`, className: 'badge-avatar' })), v.label, (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'remove-btn' }, { children: "\u00D7" }))] }), v.id ? v.id : v.value)))
                    : value === null || value === void 0 ? void 0 : value.label })), divider && (0, jsx_runtime_1.jsx)("div", { className: 'divider' }), (0, jsx_runtime_1.jsx)("svg", Object.assign({ width: "14", height: "8", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: 'caret' }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.66406 1.5L6.9974 6.83333L12.3307 1.5", stroke: "#222222", "stroke-width": "1.77778", "stroke-linecap": "round", "stroke-linejoin": "round", className: 'caret-path' }) })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: `options ${isOpen ? 'show' : ''}` }, { children: options.map((option, index) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: (e) => {
                        e.stopPropagation();
                        selectOption(option);
                        setIsOpen(false);
                    }, onMouseEnter: () => setHighlightedIndex(index), className: `option 
     ${isOptionSelected(option) ? 'selected' : ''} ${index === highlightedIndex ? 'highlighted' : ''}` }, { children: [avatars && option.avatar && ((0, jsx_runtime_1.jsx)("img", { src: option.avatar, alt: `${option.label} avatar`, className: 'avatar', style: {
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%',
                                marginRight: '10px',
                            } })), option.label] }), option.value))) }))] })));
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map