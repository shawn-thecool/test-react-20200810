import React from 'react'
import { useObserver } from 'mobx-react'
import useStore from '../../hooks/useStore'

const Counter = () => {
  // hooks
  const { counter } = useStore()

  // events
  const increase = (e) => {
    counter.increase()
  }
  const decrease = (e) => {
    counter.decrease()
  }

  // render
  return useObserver(() => (
    <div>
      <strong>{counter.number}</strong>
      <button type="button" onClick={increase}>
        +1
      </button>
      <button type="button" onClick={decrease}>
        -1
      </button>
    </div>
  ))
}

export default Counter
