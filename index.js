import Component from './Component.js';

export default {
  Component: (params, children) => new Component(params, children)
}