import { useRef } from "react";

function TodoForm(props) {
    const inputTextRef = useRef();
    const itemData = {
        text: ''
    };

    function submitHandler(event) {
        event.preventDefault();

        const enteredText = inputTextRef.current.value;

        itemData.text = enteredText;

        props.onAddItem(itemData);
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Enter Text:</label>
            <input id="text" required rows='1' ref={inputTextRef} />
            <button>Submit</button>
        </form>
    );
}

export default TodoForm;