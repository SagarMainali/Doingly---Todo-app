import { createContext } from "react";

type FunctionContextObj = {
     removeTodo: (id: number) => void,
     enterEditMode: (id: number) => void
     saveEditedTodo: (id: number, editedTodo: string) => void,
}

const FunctionContext = createContext<FunctionContextObj>({
     removeTodo: () => { },
     enterEditMode: () => { },
     saveEditedTodo: () => { },
}
)

export default FunctionContext