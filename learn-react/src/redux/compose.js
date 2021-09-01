export default function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args;
  } else if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(args)));
  // return function (...args) {
  //   let result = null;
  //   for (let i = funcs.length - 1; i >= 0; i--) {
  //     const func = funcs[i];
  //     if (i === funcs.length - 1) {
  //       result = func(...args);
  //     } else {
  //       result = func(result);
  //     }
  //   }
  //   return result;
  // }
}

// const a = (n) => n + 1;
// const b = n => n * n;

// const combine = compose(a, b);
// console.log(combine(4));