class Dog {
    name: string;
    color: string;
    age: number;
  
    constructor(name: string, color: string, age: number) {
      this.name = name;
      this.color = color;
      this.age = age;
    }
  
    bark(): void {
      console.log("Au Au");
    }
  }