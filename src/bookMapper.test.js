const rewire = require("rewire")
const bookMapper = rewire("./bookMapper")
const mapISBN = bookMapper.__get__("mapISBN")
const flatten = bookMapper.__get__("flatten")
// @ponicode
describe("bookMapper.default", () => {
    test("0", () => {
        let object2 = [[12345, "c466a48309794261b64a4f02cfcc3d64", 12345], [12345, "c466a48309794261b64a4f02cfcc3d64", "da7588892"], ["da7588892", 9876, "c466a48309794261b64a4f02cfcc3d64"]]
        let object = [["Edmond", "Anas", "Jean-Philippe"], ["Anas", "Michael", "Pierre Edouard"], ["Anas", "Edmond", "Anas"]]
        let callFunction = () => {
            bookMapper.default({ volumeInfo: { title: "Internal Interactions Strategist", authors: object, categories: object2, publisher: false, industryIdentifiers: "Sei Whale" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object2 = [[9876, "da7588892", 12345], [9876, "da7588892", "da7588892"], ["da7588892", 9876, "bc23a9d531064583ace8f67dad60f6bb"]]
        let object = [["Edmond", "George", "Edmond"], ["Jean-Philippe", "Edmond", "Anas"], ["Anas", "Michael", "Anas"]]
        let callFunction = () => {
            bookMapper.default({ volumeInfo: { title: "Future Interactions Representative", authors: object, categories: object2, publisher: true, industryIdentifiers: "La Plata Dolphin" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object2 = [["bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", 9876], [12345, "c466a48309794261b64a4f02cfcc3d64", 9876], [12345, 12345, "bc23a9d531064583ace8f67dad60f6bb"]]
        let object = [["Michael", "Michael", "Pierre Edouard"], ["Michael", "Edmond", "Michael"], ["Edmond", "Pierre Edouard", "Edmond"]]
        let callFunction = () => {
            bookMapper.default({ volumeInfo: { title: "Internal Interactions Strategist", authors: object, categories: object2, publisher: true, industryIdentifiers: "Amazon River Dolphin" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object2 = [[9876, 12345, 12345], ["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", 12345], ["da7588892", "c466a48309794261b64a4f02cfcc3d64", 9876]]
        let object = [["Michael", "Pierre Edouard", "Jean-Philippe"], ["George", "Jean-Philippe", "Pierre Edouard"], ["Pierre Edouard", "Jean-Philippe", "Anas"]]
        let callFunction = () => {
            bookMapper.default({ volumeInfo: { title: "Dynamic Quality Specialist", authors: object, categories: object2, publisher: false, industryIdentifiers: "False Killer Whale" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object2 = [["c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", 12345], ["bc23a9d531064583ace8f67dad60f6bb", 9876, "c466a48309794261b64a4f02cfcc3d64"], [9876, "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"]]
        let object = [["George", "Pierre Edouard", "George"], ["Jean-Philippe", "Jean-Philippe", "Anas"], ["Jean-Philippe", "Michael", "George"]]
        let callFunction = () => {
            bookMapper.default({ volumeInfo: { title: "International Intranet Coordinator", authors: object, categories: object2, publisher: true, industryIdentifiers: "False Killer Whale" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            bookMapper.default({ volumeInfo: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapISBN", () => {
    test("0", () => {
        let callFunction = () => {
            mapISBN(["Jean-Philippe", "Michael", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapISBN(["Pierre Edouard", "Michael", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapISBN(["George", "George", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapISBN(["Edmond", "Michael", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapISBN(["George", "Anas", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapISBN(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("flatten", () => {
    test("0", () => {
        let callFunction = () => {
            flatten({ join: () => "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            flatten({ join: () => "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            flatten({ join: () => "Edmond" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            flatten({ join: () => "Michael" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            flatten({ join: () => "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            flatten(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
