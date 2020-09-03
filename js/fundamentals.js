function dataTypes() {
  var int = 5;
  var str = "5";
  var bool = true;
  var undef;
  var nul = null;
  var bigInt = BigInt(1);
  var sym = Symbol(5);

  var obj = { int, str };
  var arr = [1, 2, 3];
  var fun = function() {
    console.log("Just a function");
  };

  console.log("int is a", typeof int);
  console.log("str is a", typeof str);
  console.log("bool is a", typeof bool);
  console.log("undef is a", typeof undef);
  console.log("nul is a", typeof nul);
  console.log("bigInt is a", typeof bigInt);
  console.log("sym is a", typeof sym);
  console.log("obj is a", typeof obj);
  console.log("arr is a", typeof arr);
  console.log("fun is a", typeof fun);
}

function hoisting() {
  /* const a = {
    c: 5
  };
  console.log("1:", a);

  if (true) {
    console.log("2:", a);
  }

  console.log("3:", a); */

  const array = ["a", "b", "c", "d", "e"];

  for (let index = 0; index < array.length; index++) {
    console.log(array[index], index);
  }
}

function coercion() {
  const int = 5;
  const str = "5";

  /* console.log("== :", int == str);
  console.log("=== :", int === str); */

  const obj1 = { int, str };
  const obj2 = { int, str };

  /* console.log("== :", obj1 == obj2);
  console.log("=== :", obj1 === obj2); */

  const obj3 = obj1;

  console.log("=== :", obj1 === obj3);

  /* console.log(obj1);
  obj1.int = 1000000;
  console.log(obj1); */
}

function functions() {
  const a = 10;
  const anonFun = function(first, second) {
    console.log("Normal", first, second, a);

    return first + second;
  };

  console.log(anonFun(5,6));

  //anonFun(a, 0);

  const arrowFun = (first, second) => {
    console.log("Arrow", first, second, a);

    //return this;
  };

  //const arrowFun = (first, second) => this;

  //arrowFun();

  /* const obj = { arrowFun, anonFun };

  console.log(anonFun() === arrowFun());
  console.log(obj.anonFun() === obj.arrowFun()); */
}

//dataTypes();
//hoisting();
//coercion();
functions();

const mate = {
  test: 5
};

function test(var1, var2, var3) {
  console.log(var1, var2, var3);
}

//test({ a: "test" }, [1, 2], 5);
