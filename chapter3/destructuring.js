let a = [1,2,3];

let [one,two,three]=a;
console.log(one);
console.log(three);

const es6obj = {
    name: "game",
    server: "giena",
}

let {name,server} = es6obj;
console.log(name, server);

const todos = [
    {id: 1, complete: true},
    {id: 2, complete: false},
]
completed = todos.filter(({complete})=>complete);
console.log(completed)