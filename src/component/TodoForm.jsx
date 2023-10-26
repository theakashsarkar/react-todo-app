
export default function TodoForm({ handleFormSubmit, handleInputChange , todo }) {
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="flex mt-4">
                <input type="text" 
                    name="todo"
                    value={todo} 
                    onChange={handleInputChange} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                    placeholder="Add Todo" 
                />
                <button type="submit"
                //  disabled={todo.length === 0}
                 className="flex-no-shrink p-2 border-2 rounded text-teal border-tealhover:bg-teal"
                >
                Add
                </button>
            </div>
        </form>
    )
}