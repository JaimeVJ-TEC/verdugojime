export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function exponente(x,y){
  for (let index = 0; index < y-1; index++) {
      x = x*x;
  }
  return x;
}