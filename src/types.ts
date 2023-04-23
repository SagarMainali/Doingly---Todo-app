export type TodoObj = {
     id: number,
     checked: boolean,
     todo: string,
     onEditMode: boolean,
     dueDate: string
}

export type ShowMessage = {
     showTodoAdded: boolean,
     showTodoDeleted: boolean,
     showTodoEdited: boolean,
     showOnEditMode: boolean
}
