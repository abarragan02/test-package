import dotenv from 'dotenv';

dotenv.config();

export default class Component {
  constructor(params, children) {
    this.params = params;
    this.children = children;
    this.envVar = process.env.TEST_VAR
  }
}