function udregnGennemsnit() {
    const læs = parseInt(document.getElementById("læs").value)
    const ret = parseInt(document.getElementById("ret").value)
    const skr = parseInt(document.getElementById("skr").value)
    const mun = parseInt(document.getElementById("mun").value)
    console.log(læs,ret)
    const res = (mun + (læs * 0.25 + ret * 0.25 + skr * 0.5)) / 2.0
    document.getElementById("resultat").innerHTML = "Vægtet gennemsnit: " + res
}