const sub = document.querySelector('#onsub')
const inputdata = document.getElementById("wwinp");
const inputcel = document.getElementById("wtemp");
const inpwcloud = document.getElementById("wcloud");
const citynot =document.getElementById("notf");
const inpwcity = document.getElementById("wcity");
const inpwcou = document.getElementById("wcountry");
const wcoutry =document.getElementById("wcountry");
const wtcel =document.getElementById("wtc");
const wtdeg =document.getElementById("wdeg");
const mainl =document.querySelector('.main_layer');





const evnsub =  async(event) =>
{

  const inpval = inputdata.value ;

  
    event.preventDefault();



if (inpval === "")
{

    console.log("wrng");
    // citynot.innerText = "City Not Found";   
    mainl.classList.add('data_hide'); 
    wtcel.innerText= "";
    wtdeg.innerText= "";
    inputcel.innerText = "";
    inpwcity.innerText = ""; 
    inpwcloud.innerText = "";
    inpwcou.innerText = "";



}
else
{
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inpval}&units=metric&appid=64b63109211a7c787344c6ea321212a2`;

    const apicall = await fetch(url);
    const jsn = await apicall.json();
    console.log(jsn);
    const appdata = [jsn];
    console.log(appdata);
    inputdata.value = "";
   

    console.log(appdata[0].weather[0].main);
    console.log(appdata[0].main.temp);
    wtcel.innerText= "C";
    wtdeg.innerText= "O";
    wcoutry.innerText = "Ind";
    citynot.innerText = "";   
    // citynot.innerText = " Get output here";   
   

   
    


    weathermood = appdata[0].weather[0].main;

    
  if(weathermood == "Clear")
  {
      inpwcloud.innerHTML = "<i class='fas fa-2x fa-sun' style='color: #eccc68;'></i>" 
  } else  if(weathermood == "Clouds")
  {
      inpwcloud.innerHTML = "<i class='fas fa-2x fa-cloud' style='color: #f1f2f6;'></i>" 
  } else  if(weathermood == "Rain")
  
  {
      inpwcloud.innerHTML = "<i class='fas fa-2x fa-cloud-rain' style='color: #6dc1ff;'></i>" 
  } else
  
  {
      inpwcloud.innerHTML = "<i class='fas fa-2x fa-sun' style='color: #f1f2f6;'></i>" 
  } ;

  mainl.classList.remove('data_hide'); 
  


    inputcel.innerText = appdata[0].main.temp;
    inpwcity.innerText = appdata[0].name; 
   const ccuu = appdata[0].sys.country; 
    inpwcou.innerText = `,   ${ccuu}`;
 
  
    // console.log(appdata[0].main.temp);










}
    
    catch(error)
    {
        console.log(error);
        mainl.classList.add('data_hide'); 
        citynot.innerText = "City Not Found";   


        wtcel.innerText= "";
        wtdeg.innerText= "";
        inputcel.innerText = "";
        inpwcity.innerText = ""; 
        inpwcloud.innerText = "";
        inpwcou.innerText = "";
     
     

       
        
    }


}


}





sub.addEventListener('click' , evnsub );



const daytime = () =>
{
    var A = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[A.getDay()];
    document.getElementById("wday").innerHTML = r;
    


   
    let r1 = new Date().toLocaleDateString();
    document.getElementById("wdate").innerHTML = r1;
   
}

daytime();