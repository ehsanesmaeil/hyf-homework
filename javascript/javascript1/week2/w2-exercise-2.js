function getFullname(firstName, surName, useFormalName) {
  useFormalName = false;
  if (useFormalName) {
    return "Hello, Lord " + firstName + " " + surName;
  } else {
    return "Hello, " + firstName + " " + surName;
  }
}

console.log(getFullname("Pier", "Pasolini"));
