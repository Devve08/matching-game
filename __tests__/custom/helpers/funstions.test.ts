const data = [
  {
    matched: true,
  },
  {
    matched: true,
  },
  {
    matched: true,
  },
  {
    matched: true,
  },
];

test("return true when all objects are with matched property == true", () => {
  expect(data?.every(obj => obj.matched === true)).toBeTruthy();
});
