
import { createElement, Text, Wrapper } from "./createElement"
export class Panel {

  constructor(config) {
    this.children = [];
  }

  setAttribute(name, value) { //attribute
    this[name] = value;
  }

  appendChild(child) {
    this.children.push(child);
  }

  render() {
    return <div class="panel" style="border:solid 1px lightgreen;width:30px">
    {/*   <h1 style="background-color:lightgreen;width:300px;margin:0;">{this.title}</h1> */}
      <div style="width:300px;min-height:300px;">
        {this.children.map(child =>
          <div style="width:300px;min-height:300px;">{child}</div>
        )}
      </div>
    </div>;
  }

  mountTo(parent) {
    this.render().mountTo(parent)
  }
}
