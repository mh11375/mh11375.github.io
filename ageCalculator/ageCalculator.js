function minus() {
  var x = document.getElementById("one").value;
  var y = document.getElementById("two").value;
  var z = +y - +x;
  document.getElementById("output").innerHTML = z + ' or ' + (z - 1) + ', depending on the month!' ;
}
