class Student{
    constructor(sId, sName){
        // jekono property lekar age this** use korte hobe
        this.id = sId;
        this.name = sName;
        this.school = "Kolimun nesa school"
    }
}

const student1 = new Student(12, "Shovo");
const student2 = new Student(15, "Mahi");
const student3 = new Student(14, "Bappi");


//console.log(student1, student2);
console.log(student1.name, student2.name);