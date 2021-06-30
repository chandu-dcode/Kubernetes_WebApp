const outputDiv = document.querySelector('#output')
const enterBtn = document.querySelector('button')


enterBtn.addEventListener('click', function () {
    
    var cmd = document.getElementById("command").value;
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://192.168.99.101/cgi-bin/python.py?command="+cmd, true);
    xhr.send();

    //output

    xhr.onload = function() {
        var output = xhr.responseText;
        outputDiv.innerHTML = output;
        outputDiv.style.color = '#fee715ff'
        outputDiv.style.backgroundColor = '#101820ff'
        outputDiv.style.borderRadius = '10%'
        outputDiv.style.padding = '30px'
        outputDiv.style.width = '510px'
        outputDiv.style.height = 'auto'
        outputDiv.style.overflowWrap = 'break-word'
    }
})
