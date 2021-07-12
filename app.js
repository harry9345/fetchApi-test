var first;
let second;
var third;
var four;
let ifTrue = true;

let showDiv = document.getElementById("json");

first = function () {
  console.log("1");
};
second = function (func3) {
  return new Promise(function () {
    return setTimeout(() => {
      console.log("2");
      func3(four);
    }, 2000);
  });
};
third = function (some) {
  return new Promise(function () {
    return setTimeout(() => {
      console.log("3");
      some();
    }, 2000);
  });
};

four = function () {
  console.log("4");
};

first();
second(third);

function doubleAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  console.log(x);
  console.log(a);
  console.log(b);
  console.log(c);
  return x + a + b + c;
}

addAsync(10).then((sum) => {
  console.log(sum);
});

let loadJson = function () {
  const url = fetch("https://type.fit/api/quotes");
  url
    .then((res) => res.json())
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * 99);
      console.log(data[randomNumber].text);
      showDiv.innerHTML = ` <h2> Today Qoutes :<span class="qoutes"> ${data[randomNumber].text} </span></h2>`;
    })
    .catch((er) => {
      console.log(er);
    });
};

//--------------------

let number = 20;

var test = new Promise(function (resolve, reject) {
  try {
    if (number === 20) {
      setTimeout(() => {
        resolve("hello");
      }, 2000);
    }
  } catch (er) {
    setTimeout(() => {
      reject("nashod");
    }, 2000);
  }
});

test
  .then((data) => {
    alert(data);
    console.log(data);
  })
  .catch((er) => {
    alert(er);
    console.log(er);
  });
