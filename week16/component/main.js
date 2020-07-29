
import { createElement, Text, Wrapper } from "./createElement"
/* import {Carousel}  from './carousel.view' */
import {Timeline, Animation, ColorAnimation}  from "../animation/animation.js";
 class Carousel {
    constructor(config) {
        this.children = [];
    }

    setAttribute (name, value) { //attribute
        this[name] = value;
    }

    render () {
        let children = this.data.map(url => {
            let element = <img src={url} />;
            element.addEventListener("dragstart", event => event.preventDefault())
            return element;
        });
        let root = <div class="carousel">
            {children}
        </div>;

        let linear = t => t;
        let position = 0;
        let nextPic = () => {
            let nextPosition = (position + 1) % this.data.length;

            let current = children[position];
            let next = children[nextPosition];

            let t1 = new Timeline;

            t1.add(new Animation(current.style, "transform", - 100 * position , -100 - 100 * position, 500, 0, linear, v=>`translateX(${v}%)`))
            t1.add(new Animation(next.style, "transform", 100 - 100 * nextPosition , - 100 * nextPosition, 500, 0, linear, v=>`translateX(${v}%)`))
            t1.start();

       

            position = nextPosition;

            setTimeout(nextPic, 3000);
        }
     
       // setTimeout(nextPic, 3000);

        root.addEventListener('mousedown', () => {
            let startX = event.clientX,
              startY = event.clientY;
              let nextPosition = (position + 1) % this.data.length;
              let lastPosition = (position - 1 + this.data.length) % this.data.length;
  
              let current = children[position];
              let last = children[lastPosition];
              let next = children[nextPosition];
  
              current.style.transition = "ease 0s";
              last.style.transition = "ease 0s";
              next.style.transition = "ease 0s";
  
              current.style.transform = `translateX(${- 500 * position}px)`;
              last.style.transform = `translateX(${-500 -500 * lastPosition}px)`;
              next.style.transform = `translateX(${500 - 500 * nextPosition}px)`;
              
             
            let move = event => {
              let t1 = new Timeline();

              t1.add(new Animation(current.style, "transform", - 500 * position , event.clientX - startX- 500 * position, 500, 0, linear, v=>`translateX(${v}px)`))
              t1.add(new Animation(last.style, "transform", -500 -500 * lastPosition , event.clientX - startX-500 -500 * lastPosition, 500, 0, linear, v=>`translateX(${v}px)`))
              t1.add(new Animation(next.style, "transform", 500 - 500 * nextPosition , event.clientX - startX + 500 - 500 * nextPosition, 500, 0, linear, v=>`translateX(${v}px)`))
              t1.start();

            };
            let up = event => {
              let offset = 0;
              if(event.clientX - startX  > 250){
                offset = 1;
              }else if(event.clientX - startX  < -250){
                offset = -1;
              }
  
              current.style.transition = "";
              last.style.transition =  "";
              next.style.transition =  "";
  

              let t1 = new Timeline();

              t1.add(new Animation(current.style, "transform",  event.clientX - startX- 500 * position,offset * 500 - 500 * position,500, 0, linear, v=>`translateX(${v}px)`))
              t1.add(new Animation(last.style, "transform", event.clientX - startX-500 -500 * lastPosition,offset * 500 -500 -500 * lastPosition, 500, 0, linear, v=>`translateX(${v}px)`))
              t1.add(new Animation(next.style, "transform",  event.clientX - startX + 500 - 500 * nextPosition,offset * 500 + 500 - 500 * nextPosition, 500, 0, linear, v=>`translateX(${v}px)`))
              t1.start();
           
              position = (position - offset + this.data.length) % this.data.length;
  
              document.removeEventListener('mouseup', up);
              document.removeEventListener('mousemove', move);
            }
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
          })
  
        return root;
    }

    mountTo (parent) {
        this.render().mountTo(parent)
        for (let child of this.children) {
            child.mountTo(parent)
        }
    }
} 

let component = <Carousel data={[
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]} />


component.mountTo(document.body);

