const models = {
    test : {
        type: 'Test Model',
        payload: { 
            id: "*",
            test: "Aaa",
            another: 2
        }
    },
    door: {
        type: 'Door Model',
        payload: { 
            locked: true
        }
    },
    book : {
        type: 'Book Model',
        payload: { 
            id: "*",
            title: "*",
            author: "*",
            genre: "",
            summary: ""
        }
    },
    blog : {
        type: 'Blog Model',
        payload: { 
            id: "*",
            title: "*",
            author: "*",
            dateCreated: "",
            summary: "",
            conclusion: "",
            idea1: {
                goal: "",
                keyPoint: "",
                intro: "",
                content: "",
                transition:""
            }
        }
    },
    song : {
        type: 'Song Model',
        payload: { 
            id: "*",
            title: "*",
            creator: "*",
            genre: ""
        }
    }, 
    chatbot : {
        type: 'Chatbot Model',
        payload: { 
            id: "*",
            name: "*",
            creator: "*",
            role: "*"
        }
    },
    shoppingList: {
        items: [
            {
                shops: [],
                size: "",
                description: "",
                name: "",
                alternatives: [
                    
                ]
            }
        ]
            
        
    }
}

module.exports = models;