
export default function Button({ type, onClick, text}) {
    const tailwindClass = "flex-no-shrink p-2 border-2 rounded text-teal border-tealhover:bg-teal";

    return <button className={tailwindClass} type={type} onClick={onClick}>{text}</button>
}