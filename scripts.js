
var datas = {
    "course type": [
        {
            "id": "1",
            "name": "Master's Degree"
        },
        {
            "id": "2",
            "name": "Honours"
        },
        {
            "id": "3",
            "name": "P.H.D"
        }
    ],
    "Field Of Study": [
        {
            "id": "1",
            "name": "Engineering"
        },
        {
            "id": "2",
            "name": "Science"
        },
        {
            "id": "3",
            "name": "Sports"
        }
    ],
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

    const functions = {
        'fn1': function(e) {
            for(var i=0; i<datas['course type'].length; i++)
            {
                var op = document.createElement('option');
                op.setAttribute('value', datas['course type'][i].id);
                op.textContent = datas['course type'][i].name;
                e.appendChild(op);
            }
        },
        'fn2': function(e) {
            for(var i=0; i<datas['country'].length; i++)
            {
                var op = document.createElement('option');
                op.setAttribute('value', datas['country'][i].id);
                op.textContent = datas['country'][i].name;
                e.appendChild(op);
            }
        },
        'fn3': function(e) {
            for(var i=0; i<datas['Field Of Study'].length; i++)
            {
                var op = document.createElement('option');
                op.setAttribute('value', datas['Field Of Study'][i].id);
                op.textContent = datas['Field Of Study'][i].name;
                e.appendChild(op);
            }
        }
    }

    var fieldOfStudy = datas['Field Of Study'];
    var sideForm = document.querySelector('.side-form');
    var label = ["courseType", "fieldOfStudy", "country"];
    var labelText = document.createElement('div');
    var inputSection = document.createElement('div');
    var sel = document.createElement('select');
    var x = ['fn1','fn2','fn3'];

function optionGen(){

    for(var i=0; i < label.length; i++)
    {
        inputSecGen(i);
    }
}
function inputSecGen(e) {
    console.log('Ayoooo !!'+ e);
    inputSection.setAttribute('class', 'input-section');
    labelText.setAttribute('class', 'label');
    labelText.textContent = label[e];
    var documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(inputSection);
    inputSection.appendChild(labelText);
    inputSection.appendChild(sel);
    functions[x[e]](sel);
    sideForm.appendChild(documentFragment);
    
}
optionGen();