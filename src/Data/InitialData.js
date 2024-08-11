export const initialProjects = [
    {
        id: 0,
        name: "Example Project",
        description: "",
        tasks: [
            {
                id: 0,
                columnId: "toDo",
                info: "Create API requests",
                category: "",
                priority: "Medium"
            },
            {
                id: 1,
                columnId: "inProgress",
                info: "Configure database and ORM",
                category: "",
                priority: "Low"
            },
            {
                id: 2,
                columnId: "completed",
                info: "Create UI prototype",
                category: "Design",
                priority: "High"
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
    tasks: [
        {
            id: "",
            columnId: "",
            info: "",
            category: "",
            priority: ""
        }
    ],
    columns: [
        {
            id: "",
            name: ""
        }
    ]
}

export const columnColors = ["purple", "blue", "green"]