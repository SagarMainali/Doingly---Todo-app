// this context contains the types that defines all the function to be passed directly to the nested child component

import { createContext } from "react";

type FunctionContextObj = {
     removeTodo: (id: number) => void,
     enterEditMode: (id: number) => void
     saveEditedTodo: (id: number, editedTodo: string) => void,
     changeChecked: (ud: number) => void
}

const FunctionContext = createContext<FunctionContextObj>({
     removeTodo: () => { },
     enterEditMode: () => { },
     saveEditedTodo: () => { },
     changeChecked: () => { }
}
)

export default FunctionContext