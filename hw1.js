const inputOne = Number.parseInt(prompt('Введите температуру в цельсиях: '));
const res = (inputOne * 9/5) + 32;
alert(`Температура в ° C: ${inputOne} Температура в ° F: ${Math.round(res)}`);