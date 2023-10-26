
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
          <button type="submit">
            Update
          </button>
          <button type="" onClick={() => setEditing(false)}>
            cancle
          </button>
        </div>
      </form>
    );
}