// class MyClass{}
//     constructor() {
//         metodo01() {

//         }
//         metodo02() {

//         }
//     }
// }

// const myConst = class MyClass{}

// // ou

// const MyConst2 = class{}

// // ou

// function makeclass() {
//     return class{}
// }

// class Dog{}

// const meg = new Dog()

// console.log(meg);

// class Dog {
//     constructor(name) {
//         this._name = name
//     }
// }

// const Pet = new Dog("meg")

// console.log(Pet);

// nomeDoMetodo() {
//     //codigo
//     return
// }

// get nomeDoMetodo(name){
//     return this.name
// }

// set nomeDoMetodo(name){
//     this.name
// }

// class MyClass{
//    static Valor(name){
//        this.name
//    }

// }

// let Teste = new MyClass('Name')

// console.log(MyClass.Valor('Name'));

// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     speakTest(){
//         return console.log(`${this.name} faz burulho`)
//     }

//     speak() {
//         console.log(`${this.name} faz barulho`)
//     }
// }

// class Dog extends Animal {
//     speak(){
//         console.log(`${this.name} late`)
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log(`${this.name} mia`)
//     }
// }

// const MyDog = new Dog("cacau")

// const MyCat = new Cat('tom')

// MyCat.speak()
// MyDog.speak()

// Nome
// Data de nascimento formato DD/MM/AAAA .split('/') pegar o indice 2 - 2021

// Retorno no console a seguinte mensagem - Olá meu nome é ${name} e tenho ${age}.

class FormatText {
  constructor(name, birthday) {
    this.name = name;
    this.age = new Age(birthday);
  }

  speak() {
    console.log(
      `Olá meu nome é  ${this.name} e tenho ${this.age.calcAge()} anos`
    );
  }
}

class Age {
  constructor(birthday) {
    this.birthday = birthday;
  }
  calcAge() {
    return 2021 - this.birthday.split("/")[2];
  }
}

const presentation = new FormatText("Mike", "21/21/1993");

presentation.speak();
