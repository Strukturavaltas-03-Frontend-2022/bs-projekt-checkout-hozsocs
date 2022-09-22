let country=document.querySelector('#countrySelect');
let state=document.querySelector('#stateSelect');
const usaStates = ['Alabama', 'Alaszka', 'Arizona', 'Arkansas', 'Colorado', 'Connecticut', 'Delaware', 'Dél-Dakota', 'Dél-Karolina', 'Észak-Dakota', 'Észak-Karolina', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kalifornia', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New York', 'Nyugat-Virginia', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'Tennessee', 'Texas', 'Új-Mexikó', 'Utah', 'Vermont', 'Virginia', 'Washington', 'Wisconsin', 'Wyoming'];
const hunStates = ['Baranya','Bács-Kiskun','Békés','Borsod-Abaúj-Zemplén','Budapest','Csongrád-Csanád','Fejér |Győr-Moson-Sopron','Hajdú-Bihar','Heves','Jász-Nagykun-Szolnok','Komárom-Esztergom','Nógrád','Pest','Somogy','Szabolcs-Szatmár-Bereg','Tolna','Vas','Veszprém','Zala'];
function makeUsaStatesList() {
  state.innerHTML='';
  usaStates.forEach(item=>{
  var x = document.createElement("OPTION");
  x.setAttribute("value", item);
  var t = document.createTextNode(item);
  x.appendChild(t);
  state.appendChild(x);
})
}
function makeHunStatesList() {
  state.innerHTML='';
  hunStates.forEach(item=>{
  var x = document.createElement("OPTION");
  x.setAttribute("value", item);
  var t = document.createTextNode(item);
  x.appendChild(t);
  state.appendChild(x);
})
}
function makeAlert() {
  state.innerHTML='';
  var x = document.createElement("OPTION");
  x.setAttribute("value", "Choose...");
  var t = document.createTextNode('Choose...');
  x.appendChild(t);
  state.appendChild(x);

}

country.addEventListener('change', () => {
 if (country.value==='Choose...') makeAlert();
  else if (country.value==='1') makeUsaStatesList(); 
  else makeHunStatesList()
});

