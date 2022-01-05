/*la fonction getElementByTagName renvoie une liste des éléments portant le nom de balise donné ici "span".*/
var sp = document.getElementsByTagName("span");
var btnStart = document.getElementsByClassName("start")[0];
var btnStop = document.getElementsByClassName("stop")[0];
var btnReset = document.getElementsByClassName("reset")[0];
var timer;
var ms = 0;
var s = 0;
var mn = 0;
var h = 0;

/*La fonction "start" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start" */
btnStart.addEventListener("click", start);
function start() {
  timer = setInterval(update_chrono, 100);
  btnStart.disabled = true;
}

/*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
function update_chrono() {
  ms += 1;

  /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
  if (ms == 10) {
    ms = 1;
    s += 1;
  }

  /*on teste si s=60 pour incrémenter le nombre de minute*/
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }
  /*afficher les nouvelle valeurs*/
  sp[0].innerHTML = h + " h";
  sp[1].innerHTML = mn + " min";
  sp[2].innerHTML = s + " s";
  sp[3].innerHTML = ms + " ms";
}

/*on arrête le "timer" par clearInterval ,on réactive le bouton start */
btnStop.addEventListener("click", stop);
function stop() {
  clearInterval(timer);
  btnStart.disabled = false;
}

/*dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro */
btnReset.addEventListener("click", reset);
function reset() {
  clearInterval(timer);
  btnStart.disabled = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);

  /*on accède aux différents span par leurs indice*/
  sp[0].innerHTML = h + " h";
  sp[1].innerHTML = mn + " min";
  sp[2].innerHTML = s + " s";
  sp[3].innerHTML = ms + " ms";
}
