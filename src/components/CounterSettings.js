import Button from './Button'
import CountToAdd from './CountToAdd'
import SubSystem from './SubSystem'

export default function CounterSettings({
  incrementCountToAdd,
  decrementCountToAdd,
  countToAdd,
  reset,
}) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        border: 'solid 1px black',
        alignItems: 'center',
      }}
    >
      <CountToAdd
        countToAdd={countToAdd}
        incrementCountToAdd={incrementCountToAdd}
      />
      <SubSystem reset={reset} decrementCountToAdd={decrementCountToAdd} />
    </div>
  )
}
