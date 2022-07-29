export class Team {
    constructor() {
        this.members = new Set()
    }

    add(obj) {
        if (this.members.has(obj)) {
            return error
        }
        this.members.add(obj)
    }

    addAll(arr) {
        arr.forEach((el) => {
            this.members.add(el)
        })
    }

    toArray() {
        let result = Array.from(this.members)
        return result
    }

}

export class ErrorRepository {
    constructor() {
        this.errors = new Map()
    }

    translate(code) {
        if(!code.number) {
            return 'Unknown error'
        }
        this.errors.set(code.number, code.text)
    }
}
