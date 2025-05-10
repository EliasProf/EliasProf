function toggleVisibility(element) {
    element.style.visibility = element.style.visibility === 'hidden' ? '' : 'hidden';
  }
  
  function blink(element, interval) {
    setInterval(() => toggleVisibility(element), interval);
  }
  
  const text = document.getElementById('text-to-blink');
  blink(text, 500); // Pisce o texto a cada 500ms

            //RELOGIO DIGITAL//

  function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000); // Atualiza a cada segundo
updateTime(); // Chama a função para exibir o tempo atual imediatame