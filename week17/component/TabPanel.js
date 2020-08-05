import { createElement, Text, Wrapper } from "./createElement"

export class TabPanel{

  constructor(config) {
    this.children = [];
    this.attributes = new Map();
    this.properties = new Map();
    this.state = Object.create(null);
  }

  setAttribute (name, value) { //attribute
    this[name] = value;
  }

  getAttribute (name) { //attribute
    return this[name];
  }

  appendChild(child){
      this.children.push(child);
  }

  select(i){
    for(let view of this.childViews){
        view.style.display = "none";
    }
    this.childViews[i].style.display = "";

    for(let view of this.titleViews){
        view.classList.remove('selected');
    }
    this.childViews[i].style.display = "";
    this.titleViews[i].classList.add('selected');
  }

  render () {
    console.log(this.children)
    this.childViews = this.children.map(child =>
        <div style="width:400px;min-height:300px;">{child}</div>
    );

    this.titleViews =  this.children.map((child, i) => <span onClick={() => this.select(i)} 
      style="width:100px;height:40px;line-height:40px;text-align:center;display:inline-block;font-size:12px;">{child.getAttribute('title') || " "}</span>);

    setTimeout(()=> this.select(0), 16);

    return <div class="tab-panel" style="border:solid 1px lightgreen;width:400px;">
               <h1 style="background-color:lightgreen;width:400px;margin:0;">{this.titleViews}</h1>
                <div style="width:400px;min-height:360px;margin:20px;">
                   {this.childViews}
                </div>
            </div>;
  }

  mountTo (parent) {
    this.render().mountTo(parent)

  }
}
