export const schema = {
    "type": "object",
    "properties": {
        "projects": {
            "type": "array",
            "minItems": 5,
            "maxItems": 20,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 10,
                        "maximum": 10000,
                        "faker": "random.number"
                    },
                    "description": {
                        "type": "string",
                        "faker": "lorem.sentence"
                    },
                    "name": {
                        "type": "string",
                        "faker": "company.companyName"
                    }
                },
                "required": ["name", "description", "id"]
            }
        }
    },
    "required": ["projects"]
};