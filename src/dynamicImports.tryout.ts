export const dynamicImports = () => {
  import('./utils/math').then(math => {
    console.log('result => ', math.add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  });

  console.log('dynamicImports in action');
  console.log('The output of the add function will happen after these console.logs!');
  console.log('And thats only because we did not await it.');
};
