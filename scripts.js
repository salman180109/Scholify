
var datas = {
    "country": [
        {
            "id": "1",
            "name": "Bangladesh"
        },
        {
            "id": "2",
            "name": "Pakistan"
        },
        {
            "id": "3",
            "name": "India"
        }
    ]
}
var data = datas['country'];
var op = document.querySelector('.op');
function opGen(){
    for(var i=0; i<data.length; i++)
    {
        var a = document.createElement('option')
        a.setAttribute('value', data[i].name);
        a.textContent = data[i].name;
        op.appendChild(a);
    }
}
opGen();