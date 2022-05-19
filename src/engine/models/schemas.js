// JSON Schema

const schemas = {
    test : {
        title: 'Test Model',
        $id: 'https://botchat.xyz/api/v1/models/Test',
        type: 'object',
        properties: {
            id: {
                type: "string"
            },
            test: {
                type: "string",
                pattern: "^[A-Za-z]*$"
            },
            another: {
                type: "integer",
                minimum: 1,
                maximum: 10
            }
        },
        required: ['id', 'test', 'another'],
        additionalProperties: false
    },
    door : {
        title: 'Door Model',
        $id: 'https://botchat.xyz/api/v1/models/Door',
        type: 'object',
        properties: {
            locked: {
                type: "boolean"
            }
        },
        required: ['locked'],
        additionalProperties: false
    },
    book : {
        title: 'Book Model',
        $id: 'https://botchat.xyz/api/v1/models/Book',
        type: 'object',
        properties: {
            id: {
                type: "string"
            },
            title: {
                type: "string"
            },
            author: {
                type: "string"
            },
            genre: {
                type: "string"
            },
            summary: {
                type: "string"
            }
        },
        required: ['id', 'title', 'author'],
        additionalProperties: true
    },
    song : {
        title: 'Song Model',
        $id: 'https://botchat.xyz/api/v1/models/Song',
        type: 'object',
        properties: {
            id: {
                type: "string"
            },
            title: {
                type: "string"
            },
            creator: {
                type: "string"
            },
            genre: {
                type: "string"
            }
        },
        required: ['id', 'title', 'creator'],
        additionalProperties: true
    },
    chatbot : {
        title: 'Chatbot Model',
        $id: 'https://botchat.xyz/api/v1/models/Chatbot',
        type: 'object',
        properties: {
            id: {
                type: "string"
            },
            name: {
                type: "string"
            },
            creator: {
                type: "string"
            },
            role: {
                type: "string"
            }
        },
        required: ['id', 'name', 'creator', 'role'],
        additionalProperties: true
    }
}

module.exports = schemas;