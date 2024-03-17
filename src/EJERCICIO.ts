// Ejercicio de ejemplo
// src/main.ts

export abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string;
}

export class Dog extends Animal {
  makeSound() {
      return "Woof!";
  }
}

export class Cat extends Animal {
  makeSound() {
      return "Meow!";
  }
}

export class AnimalSound {
  constructor(public animal: Animal) {}

  play() {
      return this.animal.makeSound();
  }
}

function main() {
  const dog = new Dog("Rex");
  const cat = new Cat("Whiskers");
  const dogSound = new AnimalSound(dog);
  const catSound = new AnimalSound(cat);
  console.log(dogSound.play());
  console.log(catSound.play());
}

main();