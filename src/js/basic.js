export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}
const obj = {name: 'Маг', health: 90};

export function mag(obj){
  if (obj.health < 15) {
    return 'critical';
  }
  if (obj.health > 15 && obj.health < 50) {
    return 'wounded';
  }
  if (obj.health > 50) {
    return 'healthy';
  }
}

const magic = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
export function magicSort(magic){
  return magic.sort((a, b) => a.health - b.health);
}