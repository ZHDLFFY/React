import { createElement, Component, render } from "./toy.react.js"
class MyComponent extends Component {

    render() {
        return <div> <h1>my component</h1>{this.children}</div>
    }
}


render(<MyComponent id="zhd" class="zhd" >
    <div>456</div>
    <div></div>
    <div></div>
</MyComponent >, document.body);