// 在泛型中使用类类型
// function create<Type>(c: { new (): Type }): Type {
//   return new c()
// }

class BeeKeeper {
  hasMask: boolean = true
}

class ZooKeeper {
  nametag: string = 'Mike'
}

class Animal {
  numLen: number = 4
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper()
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask

// createInstance(BeeKeeper)