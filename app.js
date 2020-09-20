//variables
var expenseName = document.getElementById('expenseName');
var expenseDate = document.getElementById('expenseDate');
var expenseAmount = document.getElementById('expenseAmount');
var submitButton = document.getElementById('expenseSubmit');
var num = 1;
//functions
function main(){
    submitButton.addEventListener('click', addExpense);
}

function addExpense(){     
    if (expenseName.value === ''){
        alert('No value was input for name.')
    }           
    if (expenseAmount.value === ''){
        alert('No value was input for amount.')
    }
    if (expenseDate.value === ''){
        alert('No value was input for date.')
    }
    else{
        holdDelete();
        var x=document.getElementById('table').insertRow(num);
        var a = x.insertCell(0);
        var b = x.insertCell(1);
        var c = x.insertCell(2);
        var button = document.createElement('button');
        button.classList.add('deleteButton')
        var d = x.insertCell(3);
        d.appendChild(button)
        a.innerHTML = expenseName.value;
        b.innerHTML = expenseDate.value;
        c.innerHTML = expenseAmount.value;
        button.innerHTML='<i class="fas fa-trash"></i>'
        button.setAttribute("onclick", "deleteExpense(this)")
        num++;
    }
}

function deleteExpense(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
    num--;
}

var holdDelete = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            document.getElementById("hold").remove();

        }
    };
})();
//run
main()
