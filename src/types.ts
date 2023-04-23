export type TodoObj = {
     id: number,
     checked: boolean,
     todo: string,
     editMode: boolean,
     dueDate: string
}

export type ShowMessage = {
     showTodoDeleted: boolean,
     showTodoEdited: boolean
}