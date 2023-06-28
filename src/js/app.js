// mport read from './reader';
// import json from './parser';

function read() {
    return new Promise((resolve, reject) => {
      // эмуляция чтения файла
      setTimeout(() => {
        const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
        return (input => {
          const buffer = new ArrayBuffer(input.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
          }
          resolve(buffer);
        })(data);
      }, 1000); 
    });
  }
  
  function json(data) {
    return new Promise((resolve, reject) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      }, 500);
    });
  }
  
function getResponse() {
return new Promise((resolve, reject) => {
setTimeout(() => {

  const data = read(); 
  const value = json(data);
  resolve(value);
}, 500);
});
}

  
const responsePromise = getResponse();
responsePromise.then((response) => {
console.log(response);
});