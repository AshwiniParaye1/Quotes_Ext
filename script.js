fetch("http://zenquotes.io/api/random")
.then(data => data.json())
.then(quotesData => {
    
    
    for (let i=0; i < quotesData.length; i++){
        console.log(">>>>>>>", quotesData[i].q)

    const quotesText = quotesData[i].q;

    console.log("quotes text==",quotesText)
    console.log("quotesData==",quotesData)
    
    const quoteElement = document.getElementById('quoteElement')
    quoteElement.innerHTML = quotesText;
    console.log("quotesText======",quotesText)
    }

})
