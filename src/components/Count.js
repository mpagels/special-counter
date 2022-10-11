import Button from './Button'
import NumberInput from './NumberInput'

export default function Count({
  count,
  countToAdd,
  decrementCount,
  incrementCount,
  handleNumberInput,
}) {
  return (
    <div
      style={{
        display: 'flex',
        width: '500px',
        justifyContent: 'space-evenly',
      }}
    >
      <NumberInput value={countToAdd} handleNumberInput={handleNumberInput} />
      <div>
        <div>{count}</div>
        <Button operator="+" handleClick={incrementCount} />
        <Button operator="-" handleClick={decrementCount} />
      </div>
    </div>
  )
}
