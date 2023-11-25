function FirstLetterWord(){
    var txt = "khmao chhaily";
    var word = txt.split(" ");
    var twoletter = word.slice(0,2);
    var intail = twoletter.map((word) => word.charAt(0).toLocaleUpperCase());
    console.log(intail);

    intail.forEach(element => {
        console.log(element);
    });
}


function arr(){
    var furit = ["apple","banana","mongo","orange"];
    var firtletter = furit.slice(0,5);
    var intail = firtletter.map(item => item.charAt(0).toLocaleUpperCase());
    console.log(furit);

    intail.forEach(items => {
        console.log(items);
    });
}
arr();
