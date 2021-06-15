import React, { useState } from 'react'


const ctx = React.createContext({
  a: 1,
  b: {
    heihei: '111',
    bb: '222'
  }
})

const B = function (props, context) {
  return (
    <div>
      <ctx.Consumer>
        {
          value => <p>a:{value.a},b:{value.b},d:{value.dd}</p>
        }
      </ctx.Consumer>
      <C />
      <D />
    </div>
  )
}

class C extends React.Component {
  static contextType = ctx;
  render() {
    return (
      <div>
        a:{this.context.a},b:{this.context.b},d:{this.context.dd}
        <button onClick={() => {
          this.context.onClick(this.context.a + 2);
        }}>点击</button>
      </div>
    )
  }
}

class D extends React.Component {
  render() {
    return (
      <div>
        <ctx.Consumer>
          {value => <>
            a:{value.a},b:{value.b},d:{value.dd}
            <button onClick={() => {
              value.onClick(value.a + 2);
            }}>点击</button>
          </>
          }
        </ctx.Consumer>
      </div>
    )
  }
}

export default function NewContext() {
  // const [state, setState] = useState({
  //   a: 0,
  //   dd: 'haha',
  //   onClick: (newA) => {
  //     setState({ a: newA });
  //   }
  // });
  const [a, setA] = useState(0);
  const [b, setB] = useState('aa');
  const onClick = (newA) => {
    setA(newA);
  }
  return (
    <ctx.Provider value={{ a, b, onClick }}>
      <B />
    </ctx.Provider>
  )
}
