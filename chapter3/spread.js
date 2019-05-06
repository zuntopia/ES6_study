console.log(...[1,2,3]);

function foo(a, b, c){
    console.log(a);
    //console.log(b);
    console.log(c);
}

foo('a', ...['b','c', 'd']); 

let key = ['a','b','c'];

console.log([...key, 'd','1']);