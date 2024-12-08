function show_city(){
    let city = document.getElementById("city");
    let cityName = ['Delhi','Kerala','Tamil Nadu','Rajasthan']

    cityName.forEach(name =>{
        let option = document.createElement("option")
        option.text = name;
        option.value = name.toLowerCase().replace(/\s+/g, '');
        city.appendChild(option);
    });
}

function show_result(){
    let result  = document.getElementById("result");
    let city = document.getElementById("city").value;
   
        switch(city){
            case 'delhi':
                result.textContent = `The Indian city of Delhi has a population of 21.88 million.The literacy rate in Delhi is 86.21%`;
                break;
            case 'kerala':
                result.textContent = `The Indian city of Kerala has a population of 35.97 million.The literacy rate in Delhi is 93.91%`;
                break;
            case 'tamilnadu':
                result.textContent = `The Indian city of Tamil Nadu has a population of 77.17 million.The literacy rate in Delhi is 82.9%`;
                break;
            case 'rajasthan':
                result.textContent = `The Indian city of Rajasthan has a population of 82.19 million.The literacy rate in Delhi is 74.04%`;
                break;
            default:
                result.textContent = "Please select the city";
                break;

        }
}

window.onload = show_city;
   

