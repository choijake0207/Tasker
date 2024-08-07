export const projects = [
    {
        id: 0,
        name: "Example Project",
        tasks: [
            {
                id: 0,
                columnId: "toDo",
                info: "Create API requests",
            },
            {
                id: 1,
                columnId: "inProgress",
                info: "Configure database and ORM"
            },
            {
                id: 2,
                columnId: "completed",
                info: "Create UI prototype"
            }
        ],
        columns: [
            {
                id: "toDo",
                name: "To Do's",
            },
            {
                id: "inProgress",
                name: "In Progress",
            },
            {
                id: "completed",
                name: "Completed",
            }
        ]
    }
]

export const projectTemplate = {
    id: null,
    name: "",
    tasks: [],
    columns: []
}