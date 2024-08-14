export const initialProjects = [
    {
        id: 0,
        name: "Example Project",
        description: "This is an example project meant to display the functionalities of this kanban app",
        columns: [
            {
                id: "toDo",
                name: "To Do's",
                tasks: [
                    {
                        id: 0,
                        columnId: "toDo",
                        info: "Create API requests",
                        category: "",
                        priority: "Medium"
                    }
                ]
            },
            {
                id: "inProgress",
                name: "In Progress",
                tasks: [
                    {
                        id: 1,
                        columnId: "inProgress",
                        info: "Configure database and ORM",
                        category: "",
                        priority: "Low"
                    },
                ]
            },
            {
                id: "completed",
                name: "Completed",
                tasks: [
                    {
                        id: 2,
                        columnId: "completed",
                        info: "Create UI prototype",
                        category: "Design",
                        priority: "High"
                    }
                ],
                
            }
        ]
    }
]

export const projectTemplate = {
    id: null,
    name: "",
    description: "",
    columns: [],
}
export const columnTemplate = {
    id: "",
    name: "",
    tasks: []
}
export const taskTemplate = {
    id: "",
    columnId: "",
    info: "",
    category: "",
    priority: ""
}

export const columnColors = ["rgb(255,68,117)", "rgb(90,194,255)", "rgb(0,233,162)", "rgb(203,159,53", "rgb(200,112,68"]