export default function Button({ handleClick, operator }) {
  return <button onClick={handleClick}>{operator}</button>
}
