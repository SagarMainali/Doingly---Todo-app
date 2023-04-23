export type TodoObj = {
     id: number,
     checked: boolean,
     todo: string,
     onEditMode: boolean,
     dueDate: string
}

export type ShowMessageApp = {
     showTodoDeleted: boolean,
     showTodoEdited: boolean
}

export type ShowMessageHeader = {
     showTodoAdded: boolean,
     onEditMode: boolean
}