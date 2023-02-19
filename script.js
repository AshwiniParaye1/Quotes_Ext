fetch("https://type.fit/api/quotes")
.then(data => data.json())
.then(quotesData => {
    
    for (let i=0; i < quotesData.length; i++){
        console.log(">>>>>>>", quotesData[i].text)

    const quotesText = quotesData[i].text;

    // console.log("quotes gext==",quotesText)
    // console.log("quotesData==",quotesData)
    
    const quoteElement = document.getElementById('quoteElement')
    quoteElement.innerHTML = quotesText;
    console.log("quotesText======",quotesText)
    }

})
