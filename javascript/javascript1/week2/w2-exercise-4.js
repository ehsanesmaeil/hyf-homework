// With ELSE-IF Statement

function clothesToWearIfElse(temp) {
  if (-10 < temp && temp <= 15) {
    return "Wear a Jacket";
  } else if (15 < temp && temp <= 25) {
    return "Wear a shirt";
  } else if (25 < temp) {
    return "Wear T-Shirt";
  }
}

console.log(clothesToWearIfElse(17));

// With SWITCH Statement

function clothesToWearSwitch(temp) {
  switch (true) {
    case -10 < temp && temp <= 15:
      return "Wear a Jacket";
      break;

    case 15 < temp && temp <= 25:
      return "Wear a shirt";
      break;

    case 25 < temp:
      return "Wear T-Shirt";
      break;
  }
}

console.log(clothesToWearSwitch(26));
