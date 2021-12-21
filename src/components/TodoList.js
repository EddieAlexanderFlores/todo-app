import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
    const [isAddingItem, setIsAddingItem] = useState(false);
    const [itemData, setItemData] = useState([]);

    function addItem() {
        setIsAddingItem(true);
    }

    function addItemHandler(data) {
        const newData = [...itemData, data]
        setItemData(newData);
        setIsAddingItem(false);
    }

    return (
        <div>
            <h2>My List</h2>
            <button onClick={addItem}>Add Item</button>
            {isAddingItem && <TodoForm onAddItem={addItemHandler}/>}
            <ul>
                {(itemData.map((item, i) => (<TodoItem key={i} text={item.text} />)))}
            </ul>
        </div>
    );
}

export default TodoList;