'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var solid = require('@heroicons/react/solid');
var outline = require('@heroicons/react/outline');
var react = require('@headlessui/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const pages = [
    { name: 'Supplier List', href: '#', current: false },
    { name: 'Supplier A', href: '#', current: true },
];
function Breadcrumbs() {
    return (React__default["default"].createElement("nav", { className: "flex ml-5", "aria-label": "Breadcrumb" },
        React__default["default"].createElement("ol", { role: "list", className: "flex items-center space-x-4" },
            React__default["default"].createElement("li", null,
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("a", { href: "#", className: "text-gray-300 hover:text-gray-400" },
                        React__default["default"].createElement(solid.HomeIcon, { className: "flex-shrink-0 w-5 h-5", "aria-hidden": "true" }),
                        React__default["default"].createElement("span", { className: "sr-only" }, "Home")))),
            pages.map((page) => (React__default["default"].createElement("li", { key: page.name },
                React__default["default"].createElement("div", { className: "flex items-center" },
                    React__default["default"].createElement(solid.ChevronRightIcon, { className: "flex-shrink-0 w-5 h-5 text-gray-300", "aria-hidden": "true" }),
                    React__default["default"].createElement("a", { href: page.href, className: "ml-4 text-sm font-medium text-gray-400 hover:text-gray-700", "aria-current": page.current ? 'page' : undefined }, page.name))))))));
}

const ContentArea = ({ children }) => {
    return (React__default["default"].createElement("div", { className: "flex items-stretch flex-1 min-h-full overflow-hidden" },
        React__default["default"].createElement("main", { className: "flex-1 overflow-y-auto" },
            React__default["default"].createElement("div", { className: "p-5 max-w-7xl" },
                React__default["default"].createElement("h1", { className: "text-2xl font-semibold text-gray-900" }, "Dashboard")),
            React__default["default"].createElement("section", { className: "flex flex-col flex-1 min-w-0 p-3 mx-5 text-gray-600 bg-white rounded lg:order-last" }, children))));
};

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];
function classNames$3(...classes) {
    return classes.filter(Boolean).join(' ');
}
function TopMenuUserMenu() {
    return (React__default["default"].createElement(react.Menu, { as: "div", className: "relative ml-3" },
        React__default["default"].createElement("div", null,
            React__default["default"].createElement(react.Menu.Button, { className: "flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" },
                React__default["default"].createElement("span", { className: "sr-only" }, "Open user menu"),
                React__default["default"].createElement("img", { className: "w-8 h-8 rounded-full", src: user.imageUrl, alt: "" }))),
        React__default["default"].createElement(react.Transition, { as: React.Fragment, enter: "transition ease-out duration-200", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
            React__default["default"].createElement(react.Menu.Items, { className: "absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, userNavigation.map((item) => (React__default["default"].createElement(react.Menu.Item, { key: item.name }, ({ active }) => (React__default["default"].createElement("a", { href: item.href, className: classNames$3(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, item.name)))))))));
}

function classNames$2(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Navigation({ menus }) {
    var _a, _b;
    const solutions = (_a = menus === null || menus === void 0 ? void 0 : menus.find(m => m.id === 'SOLUTIONS')) === null || _a === void 0 ? void 0 : _a.items;
    const calls = (_b = menus === null || menus === void 0 ? void 0 : menus.find(m => m.id === 'CTAS')) === null || _b === void 0 ? void 0 : _b.items;
    return (React__default["default"].createElement(react.Popover.Group, { as: "nav", className: "flex space-x-10" },
        React__default["default"].createElement(react.Popover, null, ({ open }) => (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(react.Popover.Button, { className: classNames$2(open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium py-2 px-1', 'hover:text-gray-900', 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800') },
                React__default["default"].createElement("span", null, "Supplier Manager"),
                React__default["default"].createElement(solid.ChevronDownIcon, { className: classNames$2(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500'), "aria-hidden": "true" })),
            React__default["default"].createElement(react.Transition, { as: React.Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 -translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 -translate-y-1" },
                React__default["default"].createElement(react.Popover.Panel, { className: "absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-full" },
                    React__default["default"].createElement("div", { className: "grid w-full px-4 py-6 mx-auto gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16" }, solutions === null || solutions === void 0 ? void 0 : solutions.map((item) => (React__default["default"].createElement("a", { key: item.name, href: item.href, className: "flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50" },
                        React__default["default"].createElement("div", { className: "flex md:h-full lg:flex-col" },
                            React__default["default"].createElement("div", { className: "flex-shrink-0" },
                                React__default["default"].createElement("span", { className: "inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12" },
                                    React__default["default"].createElement(item.icon, { className: "w-6 h-6", "aria-hidden": "true" }))),
                            React__default["default"].createElement("div", { className: "ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4" },
                                React__default["default"].createElement("div", null,
                                    React__default["default"].createElement("p", { className: "text-base font-medium text-gray-900" }, item.name),
                                    React__default["default"].createElement("p", { className: "mt-1 text-sm text-gray-500" }, item.description)),
                                React__default["default"].createElement("p", { className: "mt-2 text-sm font-medium text-indigo-600 lg:mt-4" },
                                    "Learn more ",
                                    React__default["default"].createElement("span", { "aria-hidden": "true" }, "\u2192")))))))),
                    React__default["default"].createElement("div", { className: "bg-gray-50" },
                        React__default["default"].createElement("div", { className: "w-full px-4 py-5 mx-auto space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8" }, calls === null || calls === void 0 ? void 0 : calls.map((item) => (React__default["default"].createElement("div", { key: item.name, className: "flow-root" },
                            React__default["default"].createElement("a", { href: item.href, className: "flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100" },
                                React__default["default"].createElement(item.icon, { className: "flex-shrink-0 w-6 h-6 text-gray-400", "aria-hidden": "true" }),
                                React__default["default"].createElement("span", { className: "ml-3" }, item.name))))))))))))));
}

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: outline.ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: outline.CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: outline.ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: outline.ViewGridIcon,
    },
];
function NavigationMobile() {
    return (React__default["default"].createElement("div", { className: "bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50" },
        React__default["default"].createElement("div", { className: "px-5 pt-5 pb-6 sm:pb-8" },
            React__default["default"].createElement("div", { className: "flex items-center justify-between" },
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("img", { className: "w-auto h-8", src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg", alt: "Workflow" })),
                React__default["default"].createElement("div", { className: "-mr-2" },
                    React__default["default"].createElement(react.Popover.Button, { className: "inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" },
                        React__default["default"].createElement("span", { className: "sr-only" }, "Close menu"),
                        React__default["default"].createElement(outline.XIcon, { className: "w-6 h-6", "aria-hidden": "true" })))),
            React__default["default"].createElement("div", { className: "mt-6 sm:mt-8" },
                React__default["default"].createElement("nav", null,
                    React__default["default"].createElement("div", { className: "grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4" }, solutions.map((item) => (React__default["default"].createElement("a", { key: item.name, href: item.href, className: "flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50" },
                        React__default["default"].createElement("div", { className: "flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12" },
                            React__default["default"].createElement(item.icon, { className: "w-6 h-6", "aria-hidden": "true" })),
                        React__default["default"].createElement("div", { className: "ml-4 text-base font-medium text-gray-900" }, item.name))))),
                    React__default["default"].createElement("div", { className: "mt-8 text-base" },
                        React__default["default"].createElement("a", { href: "#", className: "font-medium text-indigo-600 hover:text-indigo-500" },
                            ' ',
                            "View all products ",
                            React__default["default"].createElement("span", { "aria-hidden": "true" }, "\u2192")))))),
        React__default["default"].createElement("div", { className: "px-5 py-6" },
            React__default["default"].createElement("div", { className: "grid grid-cols-2 gap-4" },
                React__default["default"].createElement("a", { href: "#", className: "text-base font-medium text-gray-900 rounded-md hover:text-gray-700" }, "Pricing"),
                React__default["default"].createElement("a", { href: "#", className: "text-base font-medium text-gray-900 rounded-md hover:text-gray-700" }, "Docs"),
                React__default["default"].createElement("a", { href: "#", className: "text-base font-medium text-gray-900 rounded-md hover:text-gray-700" }, "Company"),
                React__default["default"].createElement("a", { href: "#", className: "text-base font-medium text-gray-900 rounded-md hover:text-gray-700" }, "Resources"),
                React__default["default"].createElement("a", { href: "#", className: "text-base font-medium text-gray-900 rounded-md hover:text-gray-700" }, "Blog"),
                React__default["default"].createElement("a", { href: "#", className: "text-base font-medium text-gray-900 rounded-md hover:text-gray-700" }, "Contact Sales")),
            React__default["default"].createElement("div", { className: "mt-6" },
                React__default["default"].createElement("a", { href: "#", className: "flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700" }, "Sign up"),
                React__default["default"].createElement("p", { className: "mt-6 text-base font-medium text-center text-gray-500" },
                    "Existing customer?",
                    ' ',
                    React__default["default"].createElement("a", { href: "#", className: "text-indigo-600 hover:text-indigo-500" }, "Sign in"))))));
}

function TopMenu({ menus }) {
    return (React__default["default"].createElement(react.Popover, { className: "relative bg-white" },
        React__default["default"].createElement("div", { className: "relative z-20" },
            React__default["default"].createElement("div", { className: "absolute inset-0 shadow pointer-events-none", "aria-hidden": "true" }),
            React__default["default"].createElement("div", { className: "flex items-center justify-between w-full px-4 py-5 mx-auto sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10" },
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("a", { href: "#", className: "flex" },
                        React__default["default"].createElement("span", { className: "sr-only" }, "Workflow"),
                        React__default["default"].createElement("img", { className: "w-auto h-8 sm:h-10", src: "https://media-exp1.licdn.com/dms/image/C510BAQHThKCx51J1GQ/company-logo_200_200/0/1519870029475?e=1651104000&v=beta&t=xfUhWsU-_P0O1P0hHo3YV_JXIvZX8wqgmTstBJMp9KM", alt: "" }))),
                React__default["default"].createElement("div", { className: "-my-2 -mr-2 md:hidden" },
                    React__default["default"].createElement(react.Popover.Button, { className: "inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" },
                        React__default["default"].createElement("span", { className: "sr-only" }, "Open menu"),
                        React__default["default"].createElement(outline.MenuIcon, { className: "w-6 h-6", "aria-hidden": "true" }))),
                React__default["default"].createElement("div", { className: "hidden md:flex-1 md:flex md:items-center md:justify-between" },
                    React__default["default"].createElement(Navigation, { menus: menus }),
                    React__default["default"].createElement(TopMenuUserMenu, null)))),
        React__default["default"].createElement(react.Transition, { as: React.Fragment, enter: "duration-200 ease-out", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "duration-100 ease-in", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
            React__default["default"].createElement(react.Popover.Panel, { focus: true, className: "absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden" },
                React__default["default"].createElement(NavigationMobile, null)))));
}

function classNames$1(...classes) {
    return classes.filter(Boolean).join(' ');
}
function SideMenu({ menu }) {
    return (React__default["default"].createElement("div", { className: "hidden overflow-y-auto bg-gray-700 w-28 md:block" },
        React__default["default"].createElement("div", { className: "flex flex-col items-center w-full py-2" },
            React__default["default"].createElement("div", { className: "flex-1 w-full px-2 space-y-1" }, menu === null || menu === void 0 ? void 0 : menu.items.map((item) => (React__default["default"].createElement("a", { key: item.name, href: item.href, className: classNames$1(item.current ? 'bg-gray-800 text-white' : 'text-gray-100 hover:bg-gray-800 hover:text-white', 'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium text-center'), "aria-current": item.current ? 'page' : undefined },
                React__default["default"].createElement(item.icon, { className: classNames$1(item.current ? 'text-white' : 'text-gray-300 group-hover:text-white', 'h-8 w-8', '' ), "aria-hidden": "true" }),
                React__default["default"].createElement("span", { className: "mt-2" }, item.name))))))));
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const sidebarNavigation = [
    { name: 'Supplier List', href: '#', icon: outline.CollectionIcon, current: false },
    { name: 'Customer\nApproved List', href: '#', icon: outline.ViewGridIcon, current: false },
    { name: 'Supplier Approval', href: '#', icon: outline.CheckIcon, current: true },
    { name: 'Compliance', href: '#', icon: outline.CheckCircleIcon, current: false },
    { name: 'Contacts', href: '#', icon: outline.UserGroupIcon, current: false },
    { name: 'Maps', href: '#', icon: outline.MapIcon, current: false },
    { name: 'Activity', href: '#', icon: outline.RssIcon, current: false },
    { name: 'Admin', href: '#', icon: outline.CogIcon, current: false },
];
const SideMenuMobile = ({ isOpen, closeMenu }) => {
    return (React__default["default"].createElement(react.Transition.Root, { show: isOpen, as: React.Fragment },
        React__default["default"].createElement(react.Dialog, { as: "div", className: "md:hidden", onClose: closeMenu },
            React__default["default"].createElement("div", { className: "fixed inset-0 z-40 flex" },
                React__default["default"].createElement(react.Transition.Child, { as: React.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    React__default["default"].createElement(react.Dialog.Overlay, { className: "fixed inset-0 bg-gray-600 bg-opacity-75" })),
                React__default["default"].createElement(react.Transition.Child, { as: React.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full" },
                    React__default["default"].createElement("div", { className: "relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-gray-700" },
                        React__default["default"].createElement(react.Transition.Child, { as: React.Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                            React__default["default"].createElement("div", { className: "absolute right-0 p-1 top-1 -mr-14" },
                                React__default["default"].createElement("button", { type: "button", className: "flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white", onClick: () => closeMenu },
                                    React__default["default"].createElement(outline.XIcon, { className: "w-6 h-6 text-white", "aria-hidden": "true" }),
                                    React__default["default"].createElement("span", { className: "sr-only" }, "Close sidebar")))),
                        React__default["default"].createElement("div", { className: "flex items-center flex-shrink-0 px-4" },
                            React__default["default"].createElement("img", { className: "w-auto h-8", src: "https://tailwindui.com/img/logos/workflow-mark.svg?color=white", alt: "Workflow" })),
                        React__default["default"].createElement("div", { className: "flex-1 h-0 px-2 mt-5 overflow-y-auto" },
                            React__default["default"].createElement("nav", { className: "flex flex-col h-full" },
                                React__default["default"].createElement("div", { className: "space-y-1" }, sidebarNavigation.map((item) => (React__default["default"].createElement("a", { key: item.name, href: item.href, className: classNames(item.current
                                        ? 'bg-gray-800 text-white'
                                        : 'text-gray-100 hover:bg-gray-800 hover:text-white', 'group py-2 px-3 rounded-md flex items-center text-sm font-medium'), "aria-current": item.current ? 'page' : undefined },
                                    React__default["default"].createElement(item.icon, { className: classNames(item.current ? 'text-white' : 'text-gray-300 group-hover:text-white', 'mr-3 h-6 w-6'), "aria-hidden": "true" }),
                                    React__default["default"].createElement("span", null, item.name))))))))),
                React__default["default"].createElement("div", { className: "flex-shrink-0 w-14", "aria-hidden": "true" })))));
};

const FullStack = ({ children, menus, }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const closeMobileSideMenu = () => {
        setMobileMenuOpen(false);
    };
    const sideMenu = menus === null || menus === void 0 ? void 0 : menus.find(m => m.id === 'SIDEMENU');
    return (React__default["default"].createElement(React.Fragment, null,
        React__default["default"].createElement(TopMenu, { menus: menus }),
        React__default["default"].createElement("div", { className: "flex h-full" },
            React__default["default"].createElement(SideMenu, { menu: sideMenu }),
            React__default["default"].createElement(SideMenuMobile, { isOpen: mobileMenuOpen, closeMenu: closeMobileSideMenu }),
            React__default["default"].createElement("div", { className: "flex flex-col flex-1 overflow-hidden" },
                React__default["default"].createElement("header", { className: "w-full" },
                    React__default["default"].createElement("div", { className: "relative z-10 flex flex-shrink-0 h-12 bg-white border-b border-gray-200 shadow-sm" },
                        React__default["default"].createElement("button", { type: "button", className: "px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden", onClick: () => setMobileMenuOpen(true) },
                            React__default["default"].createElement("span", { className: "sr-only" }, "Open sidebar"),
                            React__default["default"].createElement(outline.MenuAlt2Icon, { className: "w-6 h-6", "aria-hidden": "true" })),
                        React__default["default"].createElement(Breadcrumbs, null))),
                React__default["default"].createElement(ContentArea, null, children)))));
};

exports.Breadcrumbs = Breadcrumbs;
exports.ContentArea = ContentArea;
exports.FullStack = FullStack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==