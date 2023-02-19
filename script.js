fetch("https://type.fit/api/quotes")
.then(data => data.json())
.then(quotesData => {
    const quotesData = quotesData.text
})