// for each todo
export type TodoObj = {
     id: number,
     checked: boolean,
     todo: string,
     onEditMode: boolean,
     dueDate: string
}

// for showing messages on user interaction like todo add, remove, edit and so on
export type ShowMessage = {
     showTodoAdded: boolean,
     showTodoDeleted: boolean,
     showTodoEdited: boolean,
     showOnEditMode: boolean
}
