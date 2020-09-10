async function promiseExample() {
  /* const promise = new Promise((resolve, reject) => {
    resolve(new Error("Test"));
    reject("Test");
  });

  //console.log(promise);

  promise
    .then(result => console.log("SUCCESS", result))
    .catch(err => console.log("ERROR", err)); */

  const promise1 = new Promise(resolve =>
    setTimeout(() => resolve(1000), 1000)
  );
  const promise2 = new Promise(resolve => setTimeout(() => resolve(0), 0));
  const promise3 = new Promise(resolve =>
    setTimeout(() => resolve(3000), 3000)
  );

  /* promise1.then(console.log);
  promise2.then(console.log);
  promise3.then(console.log); */

  console.log(await promise1);
  console.log(await promise2);
  console.log(await promise3);
}

function makeRequest() {
  return fetch("http://localhost:3000/api/students/")
    .then(res => {
      console.log(res);
      if (res.status === 500) {
        throw res.json();
      }

      return res.json();
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => err.then(console.log));
}

async function asyncAwaitRequest() {
  const response = await fetch("http://localhost:3000/api/students/");
  const students = await response.json();

  console.log(students);
}

//makeRequest();
//asyncAwaitRequest();
//promiseExample();
