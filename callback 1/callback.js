const sayHello = () => console.log('Hello');

const sayGoodbye = () => console.log('Good Bye');

const executeCallback = (callback) => callback();

executeCallback(sayHello);
executeCallback(sayGoodbye);
sayHello();