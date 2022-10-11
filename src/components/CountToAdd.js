import Button from './Button'

export default function CountToAdd({ countToAdd, incrementCountToAdd }) {
  return (
    <div>
      <p>{countToAdd}</p>
      <Button handleClick={incrementCountToAdd} operator="+" />
    </div>
  )
}
