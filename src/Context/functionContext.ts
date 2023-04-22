import { createContext } from "react";

type FunctionContextObj = {
     removeTodo: (id: number) => void,
     updateAndSaveTodo: (id: number) => void
}

const FunctionContext = createContext<FunctionContextObj>({
     removeTodo: () => { },
     updateAndSaveTodo: () => { }
}
)

export default FunctionContext