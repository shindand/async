import {sum, mag, magicSort} from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('mag', () => {
  const obj = {name: 'Маг', health: 90};
  const result = mag(obj);

  expect(result).toBe('healthy');
});

test('magicsort', () => {
  const magic2 = [
    {name: 'мечник', health: 10},
    {name: 'лучник', health: 80},
    {name: 'маг', health: 100},
  ];
const magic = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
  const result = magicSort(magic);
  expect(result).toEqual(magic2);
})