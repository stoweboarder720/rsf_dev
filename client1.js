$.ajax
({
  type: "POST",
  url: "http://localhost:8000",
  crossDomain:true, 
  dataType: "json",
  data:JSON.stringify({name: "Dennis", address: {city: "Dub", country: "IE"}})
 }).done(function ( data ) {
      alert("ajax callback response:"+JSON.stringify(data));
   })