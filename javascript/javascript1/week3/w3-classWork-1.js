let sentence = "Hello, I am a happy person bad sad fun";
let sentenceArr = sentence.trim().split(" ");

// Finding a Positive/Negative word in a sentence:

let positiveWord = ["happy", "fun", "awesome"];

let negativeWord = ["sad", "bad", "f**ed up"];
let i;
let j;
function scoreHappines() {
  let positiveScore = 0;
  let negativeScore = 0;

  for (i = 0; i < sentenceArr.length; i++) {
    for (j = 0; j < sentenceArr.length; j++)
      if (positiveWord[i] == sentenceArr[j]) {
        positiveScore++;
      } else if (negativeWord[i] == sentenceArr[j]) {
        negativeScore++;
      }
  }
  console.log(
    "positive Scors are equal " +
      positiveScore +
      " And, Negative Scors are equal ",
    negativeScore
  );
}

scoreHappines();
