
export default function Button({ type, onClick, text}) {

    return <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey border-grey hover:bg-grey" type={type} onClick={onClick}>{text}</button>
}