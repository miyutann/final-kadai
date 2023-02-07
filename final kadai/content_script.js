setTimeout(() =>{

  f(document.body); 

  let tytles = document.querySelectorAll("h3");
  for(let i = 0; i < tytles.length; i++){
  let tytle = tytles[i];
  tytle.style.display = 'none';}

  let channels = document.querySelectorAll(".style-scope ytd-channel-name");
  for(let i = 0; i < channels.length; i++){
  let channel = channels[i];
  channel.style.display = 'none';}
  
  let thumbnails = document.querySelectorAll(".style-scope ytd-thumbnail");
  for(let i = 0; i < thumbnails.length; i++){
  const thumbnail = thumbnails[i];
  thumbnail.classList.add("invert");}

  let profiles = document.querySelectorAll(".style-scope yt-img-shadow");
  for(let i = 0; i < profiles.length; i++){
  const profile = profiles[i];
  profile.classList.add("invert");}

}, 10000)

function f(n){
    const hours = [ "1","2","3","4"];
    let get = hours[Math.floor(Math.random() * hours.length)];
    const minutes = [ "00","01","02","03","04","05","06","07","08","09",
                      "10","11","12","13","14","15","16","17","18","19",
                      "20","21","22","23","24","25","26","27","28","29",
                      "30","31","32","33","34","35","36","37","38","39",
                      "40","41","42","43","44","45","46","47","48","49",
                      "50","51","52","53","54","55","56","57","58","59",];
    let get1 = minutes[Math.floor(Math.random() * minutes.length)];
    const seconds = [ "00","01","02","03","04","05","06","07","08","09",
                      "10","11","12","13","14","15","16","17","18","19",
                      "20","21","22","23","24","25","26","27","28","29",
                      "30","31","32","33","34","35","36","37","38","39",
                      "40","41","42","43","44","45","46","47","48","49",
                      "50","51","52","53","54","55","56","57","58","59",];
    let get2 = seconds[Math.floor(Math.random() * seconds.length)];
    let cs = n.childNodes;
    for(let i = 0; i < cs.length; i++){
      let c = cs[i];
      if(c.nodeType == Node.TEXT_NODE){
        c.textContent = c.textContent.replace(/\d{1}:\d{2}:\d{2}|\d{2}:\d{2}|\d{1}:\d{2}/g, get + ":" + get1 + ":" + get2);
      }
      else{
        f(c);
      }
    }
  }
