import Count from './Count'

export default function TheRealCounter({
  count,
  countToAdd,
  incrementCount,
  decrementCount,
  handleNumberInput,
}) {
  return (
    <div style={{ border: 'solid 1px black', width: '100%' }}>
      <Count
        count={count}
        countToAdd={countToAdd}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        handleNumberInput={handleNumberInput}
      />
    </div>
  )
}
