import printHello from "../utils/HelloAlberto.mjs";;
import myName from "../utils/meAlberto.mjs";;

import assert from 'assert';

it("This should say Hello Alberto", () => {

    const helloString = printHello() + " " + myName();

    assert.equal(helloString, "Hello Alberto");
    // console.log(helloString);

})

// TESTING OUTPUT TO CONSOLE

// const sayHello = (userName) => {
//     return (printHello() + " " + userName());
// }

// console.log(sayHello(myName));