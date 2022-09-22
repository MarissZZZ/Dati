async function iegutDarglietasNoAPi() { //darbība nenotiks vien aiz otras, var notikt citā laikā
    let datiNoApi=await fetch ('https://fakestoreapi.com/products/category/jewelery') //dati būs jāgaida
    let datiJson=datiNoApi.json; //datu iegūšana
        console.log(datiJson)

}