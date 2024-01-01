const oddOrEvenNumber = () => {

    // Take the number from input
    const number = Number(document.getElementById("number").value);

    // Check if the number is even
    if (number % 2 === 0) {
        const even = `${number} is Even.`;
        console.log(even);
        document.getElementById("h4").innerHTML = even;
    } else {
        const odd = `${number} is Odd.`;
        console.log(odd);
        document.getElementById("h4").innerHTML = odd;
    }

    return;
}

