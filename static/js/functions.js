  //Variable global para guardar el intervalo
  var animInterval;

  function startAnim() {

    let obj = document.getElementById('valor-cesta');
    animInterval = setInterval(animNumValue, 100, obj, 3000);
  }

  function animNumValue(num, newValue) {

    valor = num.innerHTML;
    intValue = parseInt(valor);

    if (intValue >= newValue) { //Si el valor ha superado el objetivo paro
      clearInterval(animInterval);
    } else { //Si el valor no ha superado el objetivo lo aumento
      valor++;
      num.innerHTML = valor;
    }
  }
  startAnim();