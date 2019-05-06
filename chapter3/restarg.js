function sum(...args){
    console.log(args);
    console.log(Array.isArray(args));
    return args.reduce((pre, cur) => pre+cur)
}

console.log(sum(1,2,3,4,5));