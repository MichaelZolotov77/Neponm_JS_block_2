let tries = 0;
while (tries < 3) {
  const age = +prompt("Сколько вам лет");

  if (age) {
    alert("Welcome");
    break;
  }

  tries++;
  alert("Данные введены некорректно");
}

alert("End");
