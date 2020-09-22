document.getElementById('btn_1').addEventListener(
    'click',
    sumNumbers
)

function sumNumbers(){
    const num_1 = document.getElementById('inp_1').value;
    const num_2 = document.getElementById('inp_2').value;

    if (isNaN(num_1) || isNaN(num_2))
        return alert('Not a number')

    const sum = Number(num_1) + Number(num_2);
    //const sum = parseInt(num_1) + parseInt(num_2) //Ya da boyle string i integer a ceviririz
    
    document.getElementById('result').innerHTML = sum;
}
