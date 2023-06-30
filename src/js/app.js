import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static load(){
return new Promise((resolve, reject) => {
  const data = read(); 
  const value = json(data);
//console.log(value);
 resolve(value);
});
  }
}
  
GameSavingLoader.load().then((result) => {
  console.log(result);
}, (error) => {
  console.log('ошибка');
});
