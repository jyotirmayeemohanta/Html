let name1={
    firstName:'Akshay',
    lastName: 'Kumar',
    getFullname:function() {
        return this.firstName +""+this.lastName
    },
};
name1.getFullname();


let name2={
    firstName :'ranbir',
    lastName: 'kapur'
}
console.log(name1.getFullname())
let newfun=name1.getFullname.bind(name2);
// name1.getFullname.bind(name2);
// }
// newfun();
console.log(newfun())


console.log(name1.getFullname.call(name2));

// bind= (pehle (this)function ka use karna padega) bind is return the new function not use/call old function