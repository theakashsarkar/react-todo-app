
export default function TodoEditForm({ handleEditFormSubmit, handleEditInputChange, editTodo, setEditing}) {
    return (
        <form onSubmit={handleEditFormSubmit}>
        <div className="flex mt-4">
          <input 
            type="text"
            value={editTodo.text}
            onChange={handleEditInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
            placeholder="Edit Todo" 
          />
          <button
           className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green border-green hover:bg-green" 
           type="submit" 
           disabled={editTodo === ""}
            >
            Update
          </button>
          <button
           className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded  text-green border-green hover:bg-green"
           type="" 
           onClick={() => setEditing(false)}>
            cancle
          </button>
        </div>
      </form>
    );
}