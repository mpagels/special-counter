export default function NumberInput({ value, handleNumberInput }) {
  function handleInput(event) {
    handleNumberInput(Number(event.target.value))
  }
  return <input onChange={handleInput} type="number" value={value} />
}
