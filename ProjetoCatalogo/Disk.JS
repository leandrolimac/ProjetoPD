function Disk(id, name, content){
    this.id = id;
    this.name = name;
    this.content = content;
}

class Disk{
    constructor(id, name, content){
        this.id = id;
        this.name = name;
        this.content = content;
    }

    changeContent(newContent){
        this.content = newContent;
    }
}
