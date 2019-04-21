import React from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import '../../node_modules/highlight.js/styles/github.css';
hljs.registerLanguage('javascript', javascript);

const jsText = `function hello() {
  console.log('hello world');
}
const test = () => {
  hello();
}
test();`;

export class JSDemo extends React.PureComponent {

  componentDidMount(){
    hljs.highlightBlock(this.node);
  }

  render() {
    return (
      <pre
        ref={(node) => this.node = node}
      >
        <code className="javascript">
          { jsText }
        </code>
      </pre>
    )
  }
}

export default JSDemo;
