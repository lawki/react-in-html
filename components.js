'use strict';
//using IIFE to avoid polluting global scope
(() => {
  const { createElement: e, useState } = React;
  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }

    render() {
      if (this.state.liked) {
        return 'You liked this.';
      }

      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
    }
  }

  function Counter(){
    const [count, setCount] = useState(0);
    return (
      <React.Fragment>
        Counter is: {count}
        <br/>
        <button onClick={() => setCount(count+1)}>Increment Count</button>
        {" "}
        <button onClick={() => setCount(count-1)}>Decrement Count</button>
      </React.Fragment>
    )
  }
  window.LikeButton = LikeButton;
  window.Counter = Counter;
})()