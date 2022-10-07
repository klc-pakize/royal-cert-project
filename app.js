let sonuc;
function hesapla() {
  const testSapma = document.getElementById("testSapma").value;
  const genisOlcum = document.getElementById("genisOlcum").value;
  const genisOlcumDegeri = document.getElementById("genisOlcumDegeri").value;
  //   const hesapla = document.getElementById("hesapla").value;;

  let s1 = Number(testSapma);
  let s2 = Number(genisOlcum);
  let s3 = Number(genisOlcumDegeri);
  sonuc = s1 + s2 / s3;

  document.getElementById("sonuc").innerHTML = "Sonuc : " + sonuc;
}

const hesaplaBtn = document.getElementById("hesapla");
hesaplaBtn.onclick = hesapla;

const temzileBtn = document.getElementById("temizle");
temzileBtn.onclick = temizle;
function temizle() {
  const sonuc = document.getElementById("sonuc");

  sonuc.innerHTML = "";
  testSapma.value = "";
  genisOlcum.value = "";
  genisOlcumDegeri.value = "";
}
