// PRUEBAS DE EJEMPLO

import 'mocha';
import { expect } from 'chai';
import { Dog, Cat, AnimalSound } from '../src/EJERCICIO';

describe('Ejercicio de ejemplo', () => {
  it('Perro hace Woof!', () => {
    const dog = new Dog("Rex");
    const dogSound = new AnimalSound(dog);
    expect(dogSound.play()).to.equal("Woof!");
  });

  it('Gato hace Meow!', () => {
    const cat = new Cat("Whiskers");
    const catSound = new AnimalSound(cat);
    expect(catSound.play()).to.equal("Meow!");
  });
});
