import React, {useState} from 'react';

function App() {
  


  var ourArr = []
  var count = 0

  for(let i=1; i<21; i++){
    if(i%2 !== 0){
      count = count + 1;
      ourArr.push("ODD")
    } else {
      count = count + 1;
      ourArr.push(i)
    }
  }

  var concat = []

    for(let i=1; i<101; i++){
      if(i%3 === 0 && i%5 === 0){
        concat.push("fizzbuzz")
      } else if(i%3 === 0){
        concat.push("fizz")
      } else if(i%5 === 0) {
        concat.push("buzz")
      } else{
        concat.push(i)
      }
    }

    const [answer, setAnswer] = useState("")

    const magicE = (e) => {
      var num = Math.floor(Math.random() * 5)
      if(num === 0){
      setAnswer("i don't think so")
      } else if(num === 1) {
        setAnswer("yes! 100% yes!")

      }else if(num === 2) {
        setAnswer("life's a box of chocolates you never know what you're going to get")

      }else if(num === 3) {
        setAnswer("maybe next year")

      }else if(num === 4) {
        setAnswer("sorry, COVID-19 says NO")
      } else {
        setAnswer("guess again suagr")
      }
    }

    

    var testArr2 =  [1, 2, 3]
    

    const multiplyThree = (arr) =>{
      var newArr= 0
      for(let i=0; i<arr.length; i++){

        newArr = (newArr + arr[i])
    }
    var count = arr.length
      return (newArr / count)
    }
    console.log(multiplyThree(testArr2))



//    const LetterFinder = (str) => {
//      var x = str.split(" ");
//      var count = 0;

//      for(var i=0; i<x.lenght; i++){
//       var word = x[i];
//       for(var j=0; j<word.lenght; j++){
//       var letter = word[j]
//         for(var k=0; k<word.lenght; k++){
//         if(j!== k)
//         if(letter === word[k]){
//           count = count +1

//           if(count >1){
//             return word
//           }
//         }
//       }
//     }
//   }
//   return -1
// }

// console.log(LetterFinder("hey there  boy"))




  return (
    <div className="App">
      <h1>Hello World</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item active">Library</li>
      </ol>
      <div>
        <form>
          <label>Your Question:</label>
          <input />
          <button type="reset" onClick={magicE}>Shake The Magic 8 Ball</button>
        </form>
        <h1 value="answer">{answer}</h1>
      </div>
    </div>
  );
}

export default App;
