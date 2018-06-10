
// Обрушим тест при любой ошибке
console.error = message => {
  throw new Error(message);
};
