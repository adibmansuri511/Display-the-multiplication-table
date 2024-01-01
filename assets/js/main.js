// program to generate a multiplication table
const tables = () => {

    // Take input from the user
    const number = Number(document.getElementById("number").value);

    // Creating a multiplication table
    for (let i = 1; i <= 10; i++) {

        // multiply i with number
        const result = number * i;

        // display the result
        const answer = `${number} X ${i} = ${result}`;
        console.log(answer);
        if (i === 1) {
            document.getElementById('h6-01').innerHTML = answer;
        }
        else if (i === 2) {
            document.getElementById('h6-02').innerHTML = answer;
        }
        else if (i === 3) {
            document.getElementById('h6-03').innerHTML = answer;
        }
        else if (i === 4) {
            document.getElementById('h6-04').innerHTML = answer;
        }
        else if (i === 5) {
            document.getElementById('h6-05').innerHTML = answer;
        }
        else if (i === 6) {
            document.getElementById('h6-06').innerHTML = answer;
        }
        else if (i === 7) {
            document.getElementById('h6-07').innerHTML = answer;
        }
        else if (i === 8) {
            document.getElementById('h6-08').innerHTML = answer;
        }
        else if (i === 9) {
            document.getElementById('h6-09').innerHTML = answer;
        }
        else if (i === 10) {
            document.getElementById('h6-10').innerHTML = answer;
        }
        else {
            console.log(`Answer is not correct.`);
        }
        // document.getElementById('h6-03').innerHTML = answer;
        // document.getElementById('h6-04').innerHTML = answer;
        // document.getElementById('h6-05').innerHTML = answer;
        // document.getElementById('h6-06').innerHTML = answer;
        // document.getElementById('h6-07').innerHTML = answer;
        // document.getElementById('h6-08').innerHTML = answer;
        // document.getElementById('h6-09').innerHTML = answer;
        // document.getElementById('h6-10').innerHTML = answer;

    }
}
