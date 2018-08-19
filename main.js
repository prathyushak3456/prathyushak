// function Loadjson(file,callback)
// {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
		
// 	    }
//     };
//     xhr.send(null);
// }
// Loadjson("data.json",function(text){
// 	var data=JSON.parse(text);
//	console.log(data);
/// 	basics(data.details);
// 	careerinfo(data.career);
// 	eduinfo(data.education);
// 	skillset(data.skills);
//     achinfo(data.Achievements);
// })
function loadjson(file)
{
	return new Promise((resolve,reject)=>{
      return fetch(file).then(response=>{
        if(response.ok){
        	resolve(response.json());
        }	
        	else{
        		reject(new Error ('error'));
        	}
        
      })          
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
   	console.log(data);
 	basics(data.details);
 	careerinfo(data.career);
 	eduinfo(data.education);
 	skillset(data.skills);
     achinfo(data.Achievements);
})
var left=document.querySelector(".left")
function basics(det) {
	var img=document.createElement("img");
	img.src=det.image;
	left.appendChild(img);
	var name1=document.createElement("h3");
	name1.textContent=det.name;
    left.append(name1);
    var phnno1=document.createElement("h3");
    phnno1.textContent = det.phno;
    left.append(phnno1);
    var email=document.createElement("a");
    email.href="prathyusha2kakkera@gmail.com";
    email.textContent = det.email;
    left.append(email);
    var adrs=document.createElement("h2");
    adrs.textContent= "address";
    left.append(adrs);
    var line=document.createElement("hr");
    left.append(line);
    var ad=document.createElement("h3");
    ad.textContent=det.address;
    left.append(ad);
}
var right=document.querySelector(".right");
function careerinfo(infom)
{
	var info1=document.createElement("h3");
	info1.textContent="career objectives";
	right.append(info1);
	var l1=document.createElement("hr");
	right.append(l1);
	var inf1=document.createElement("h3");
	inf1.textContent=infom.info;
	right.append(inf1);
}
function eduinfo(edu)
{
	var e=document.createElement("h3");
	e.textContent="educational qualifications";
	right.append(e);
	var hr=document.createElement("hr");
	right.append(hr);
	var table1=document.createElement("table");
    table1.border="1";
    right.appendChild(table1);
    tabledata="";
    for(i=0;i<edu.length;i++)
    {
    	tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].yearofpassing
    	+"</td></tr>"+edu[i].percentage+"</td><td>";
    } 
    
    table1.innerHTML=tabledata;
}  
 function skillset(skill)
 { 
    var sk=document.createElement("h1");
    sk.textContent="technicalskills";
    right.append(sk);
    var h=document.createElement("hr");
    right.appendChild(h);
    for(i=0;i<skill.length;i++)
    {
    	var s=document.createElement("h3");
    	s.textContent=skill[i].title;
    	right.appendChild(s);
    	var ul=document.createElement("ul");
    	var li=document.createElement("li");
    	li.textContent=skill[i].info;
    	ul.appendChild(li);
    	right.appendChild(ul);

    }
}   	
 function achinfo(ach)
 {
 	var a=document.createElement("h3");
 	a.textContent="achievements";
 	right.appendChild(a);
 	var v=document.createElement("hr");
 	right.appendChild(v);
 	for(i=0;i<ach.length;i++)
 	{
 	  var s1=document.createElement("ul");
 	  var r1=document.createElement("li")
 	  r1.textContent=ach[i].a;
 	  s1.appendChild(r1);
 	  right.appendChild(s1);
 	}
 	
 }	
 
