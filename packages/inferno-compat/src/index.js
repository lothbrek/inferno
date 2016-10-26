import { render, findDOMNode } from '../../../src/DOM/rendering';
import { NO_OP } from '../../../src/shared';
import infernoCreateElement from '../../../src/factories/createElement';
import isValidElement from '../../../src/factories/isValidElement';
import {
	createVComponent as infernoCreateVComponent,
	createVElement,
	createStaticVElement,
	createOptBlueprint,
	createOptVElement,
	createVFragment,
	createVPlaceholder,
	createVText
} from '../../../src/core/shapes';
import Component from '../../../src/component/es2015';
import createClass from '../../../src/component/createClass';
import renderToString, { renderToStaticMarkup } from '../../../src/server/renderToString';
import PropTypes from 'proptypes';
import cloneVNode from '../../../src/factories/cloneVNode';
import ValueTypes from '../../../src/core/ValueTypes';
import ChildrenTypes from '../../../src/core/ChildrenTypes';
import NodeTypes from '../../../src/core/NodeTypes';

function unmountComponentAtNode(container) {
	render(null, container);
	return true;
}

const ARR = [];

const Children = {
	map(children, fn, ctx) {
		children = Children.toArray(children);
		if (ctx && ctx!==children) fn = fn.bind(ctx);
		return children.map(fn);
	},
	forEach(children, fn, ctx) {
		children = Children.toArray(children);
		if (ctx && ctx!==children) fn = fn.bind(ctx);
		children.forEach(fn);
	},
	count(children) {
		children = Children.toArray(children);
		return children.length;
	},
	only(children) {
		children = Children.toArray(children);
		if (children.length!==1) throw new Error('Children.only() expects only one child.');
		return children[0];
	},
	toArray(children) {
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};

Component.prototype.isReactComponent = {};

const cloneElement = cloneVNode;
const version = '15.3.1';

const createElement = (name, props, ...children) =>
	infernoCreateElement(name, props || {}, ...children);

const createVComponent = (type, props, key, hooks, ref) =>
	infernoCreateVComponent(type, props || {}, key, hooks, ref);

export {
	render,
	isValidElement,
	createElement,
	Component,
	unmountComponentAtNode,
	cloneElement,
	PropTypes,
	createClass,
	findDOMNode,
	renderToString,
	renderToStaticMarkup,
	createVElement,
	createStaticVElement,
	createOptBlueprint,
	createVComponent,
	ValueTypes,
	ChildrenTypes,
	NodeTypes,
	Children,
	createOptVElement,
	createVFragment,
	createVPlaceholder,
	createVText,
	cloneVNode,
	NO_OP,
	version
};

export default {
	render,
	isValidElement,
	createElement,
	Component,
	unmountComponentAtNode,
	cloneElement,
	PropTypes,
	createClass,
	findDOMNode,
	renderToString,
	renderToStaticMarkup,
	createVElement,
	createStaticVElement,
	createOptBlueprint,
	createVComponent,
	ValueTypes,
	ChildrenTypes,
	NodeTypes,
	Children,
	createOptVElement,
	createVFragment,
	createVPlaceholder,
	createVText,
	cloneVNode,
	NO_OP,
	version
};
