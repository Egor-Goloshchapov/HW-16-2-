function Account({ login, email }) {
    this.login = login;
    this.email = email;
  }
  
  Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  
  console.log(Account.prototype.getInfo);
  
  const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
  });
  
  mango.getInfo();
  const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
  });
  
  poly.getInfo();




  class User {
    constructor({ name, age, followers }) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }
  
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
  }
  
  const mango2 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  mango2.getInfo();
  
  const poly2 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  poly2.getInfo();





  class Storage {
    constructor(items) {
      this.items = items;
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      this.items = this.items.filter(i => i !== item);
    }
  }
  
  const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); 
  
  storage.addItem('Дроїд');
  console.table(storage.items); 
  
  storage.removeItem('Пролонгер');
  console.table(storage.items);
  
  
  