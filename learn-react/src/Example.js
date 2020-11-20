import React, { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `点击了${count}次`
  })
  return (
    <div>
      <p>点击了{count}</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}
