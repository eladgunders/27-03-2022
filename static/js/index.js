console.log('loading index.js code...')
function check_sum() 
{
    const x = parseInt(document.getElementById('x_txt').value)
    const y = parseInt(document.getElementById('y_txt').value)
    const result = parseInt(document.getElementById('sum_txt').value)
    if (x + y === result) {
        document.getElementById('result').style.color = "green";
        document.getElementById('result').innerHTML = 
       x + ' + ' + y + ' = ' + result + ' ... Correct!';
    } else {
        document.getElementById('result').style.color = "red";
        document.getElementById('result').innerHTML = 
        x + ' + ' + y + ' = ' + result + ' ... Wrong!';
    }
    
}

function generate_numbers()
{
    // generating numbers in range 0 - 100
    const x = Math.floor(Math.random() * 101)
    const y = Math.floor(Math.random() * 101)
    document.getElementById('x_txt').value = x;
    document.getElementById('y_txt').value = y;

}