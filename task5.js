const produkt = "Мандарины";
switch (produkt) {
    case "Груши":
        alert("Груши стоят 250 руб.");
        break;
    case "Бананы":
        alert("Бананы стоят 150 руб.");
        break;
    case "Лимоны":
    case "Мандарины":
        alert("Лимоны и Мандарины стоят 1030 руб.");
        break;
    case "Мандарины":
        alert("Мандарины стоят 450 руб.");
        break;
    default:
        alert("Нет такого у нас!");
        break;
}