import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component { // class component
    constructor(props) {
        super(props);
        console.log("hello");
    }

    // state 는 Object
    // 변경되거나 바꾸고 싶은 데이터를 넣는 것
    state = {
        count: 0
    };

    add = () => {
        // state를 변경하기 위해서는 setState를 사용해야 한다. setState()할때마다 render function 을 다시 실행한다.
        // current는 현재의 state상태를 가져온다. this.state와 같다.
        this.setState(current => ({count: current.count + 1}))
    };
    minus = () => {
        this.setState(current => ({count: current.count - 1}))
    };
    // component 가 그려질때 동작
    componentDidMount() {
        console.log("component rendered");
    }
    // component 가 update 될 때 동작
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I just updated");
    }
    // component 가 사라질때 동작
    componentWillUnmount() {
        console.log("GoodBye, crewel world");
    }

    render() {
        console.log("I'm Rendering");
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
