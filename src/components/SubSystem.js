import Button from './Button'

export default function SubSystem({ reset, decrementCountToAdd }) {
  return (
    <div>
      <Button operator="-" handleClick={decrementCountToAdd} />
      <Button operator="reset Counter" handleClick={reset} />
    </div>
  )
}
