class Developer {
    constructor(name) {
        this.name = name;
    }
    startWork() {
        return `${this.name} start work...`
    }
    endWork() {
        return `${this.name} end work...`
    }
}

class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }
    buildWebSite() {
        return `${this.name} start build website ${this.websiteName}`
    }
}

class Backend extends Developer {
    constructor(name) {
        super(name);
    }
    buildServer() {
        return `${this.name} start build server`
    }
}

const frontend = new Frontend('Danik', 'Trello');
console.log(frontend.startWork())
console.log(frontend.endWork())
console.log(frontend.buildWebSite())

const backend = new Backend('John','Amazon');
console.log(backend.startWork());
console.log(backend.endWork());
console.log(backend.buildServer());