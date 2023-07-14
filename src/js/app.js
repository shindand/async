import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static load(){
  const data = read(); 
  data.then((result) => {
    console.log(result);
  });
  const value = json(data);
  value.then((result) => {
     console.log(result);
  });
  }
}
  
GameSavingLoader.load();
