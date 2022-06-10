

	function myFunction(xml) {
		var txt, x, hm, v, hs,vs, t, nt, i, dur;
		txt = "";
		let himg;
		let vimg;
		var xmlDoc = xml.responseXML;
		x = xmlDoc.getElementsByTagName("date");
		hm = xmlDoc.getElementsByTagName("home");
		v = xmlDoc.getElementsByTagName("visitor");
		hs = xmlDoc.getElementsByTagName("hscore");
		vs = xmlDoc.getElementsByTagName("vscore");
		t = xmlDoc.getElementsByTagName("time");
		nt = xmlDoc.getElementsByTagName("note");
		dur = xmlDoc.getElementsByTagName("duration");
		for (i = 0; i < x.length; i++){
		
		switch (hm[i].childNodes[0].nodeValue){
			case "Diamond U-9":
				himg ="images/diamondsu9_sm.png";
				break;
			case "FC Dragons White":
				himg ="images/fcdragons_logo_sm.png";
				break;
			case "FC Dragons Blue":
				himg ="images/fcdragonsb_logo_sm.png";
				break;
			case "Diamond A":
				himg ="images/diamondsA_logo_sm.png";
				break;
			case "FC Dragons Yellow":
				himg ="images/fcdragonsy_logo_sm.png";
				break;
			case "Saint Pius":
				himg ="images/stpius_logo_sm.png";
				break;
			case "Diamond B":
				himg ="images/diamondsB_sm.png";
				break;
			default: 
				himg ="images/default_logo_sm.png";
				break;
		}
		
		switch (v[i].childNodes[0].nodeValue){
			case "Diamond U-9":
				vimg ="images/diamondsu9_sm.png";
				break;
			case "FC Dragons White":
				vimg ="images/fcdragons_logo_sm.png";
				break;
			case "FC Dragons Blue":
				vimg ="images/fcdragonsb_logo_sm.png";
				break;
			case "Diamond A":
				vimg ="images/diamondsA_logo_sm.png";
				break;
			case "FC Dragons Yellow":
				vimg ="images/fcdragonsy_logo_sm.png";
				break;
			case "Saint Pius":
				vimg ="images/stpius_logo_sm.png";
				break;
			case "Diamond B":
				vimg ="images/diamondsB_sm.png";
				break;
			default: 
				vimg ="images/default_logo_sm.png";
				break;
		}
		
		txt += '<div class ="row">'+
				'<div class ="row">'+x[i].childNodes[0].nodeValue + ' (' + t[i].childNodes[0].nodeValue + ')' + '</div>'+
				'<div class ="row">'+
				'<div class ="card">'+
					'<div class ="column">'+ '<div class ="align-text">'+ hm[i].childNodes[0].nodeValue + '</div>'+'<div class ="align-img">'+'<img width ="100px" height ="auto" src ="'+himg +'"/>'+'</div>'+'<div class ="align-text">'+ hs[i].childNodes[0].nodeValue +'</div>'+'</div>'+
					'<div class ="column">'+ dur[i].childNodes[0].nodeValue+ '</div>'+
					'<div class ="column">'+'<div class ="align-text">'+ v[i].childNodes[0].nodeValue +'</div>'+'<div class ="align-img">'+'<img width ="100px" height ="auto" src ="'+ vimg +'"/>'+'</div>'+'<div class ="align-text">'+ vs[i].childNodes[0].nodeValue+ '</div>'+'</div>'+
				'</div>'+
				'</div>'+
				'<div class = "row">'+ nt[i].childNodes[0].nodeValue +'</div>'+
			'</div>'+
			'<br><br>';
			
			/*txt += x[i].childNodes[0].nodeValue + "<br>"+
					hm[i].childNodes[0].nodeValue + "<br>"+
					dur[i].childNodes[0].nodeValue + "<br>"+
					v[i].childNodes[0].nodeValue + "<br>"+
					t[i].childNodes[0].nodeValue + "<br>"+
					hs[i].childNodes[0].nodeValue + "<br>"+
					vs[i].childNodes[0].nodeValue + "<br>"+
					nt[i].childNodes[0].nodeValue + "<br><br>";*/
		}
		document.getElementById("demo").innerHTML = txt;
		
	}
	
		function standing(xml) {
			
		let teams = [
			{
			"name":"FC Dragons White",
			"img":"images/fcdragons_logo_sm.png",
			"GP": 0,
			"wins":0,
			"ties":0,
			"Lose":0,
			"goals":0,
			"Against":0,
			"Points":0
			},
			
			{
			"name":"FC Dragons Blue",
			"img":"images/fcdragonsb_logo_sm.png",
			"GP": 0,
			"wins":0,
			"ties":0,
			"Lose":0,
			"goals":0,
			"Against":0,
			"Points":0
			},
			
			{
			"name":"FC Dragons Yellow",
			"img":"images/fcdragonsy_logo_sm.png",
			"GP": 0,
			"wins":0,
			"ties":0,
			"Lose":0,
			"goals":0,
			"Against":0,
			"Points":0
			},
			
			{
			"name":"Diamond A",
			"img":"images/diamondsA_logo_sm.png",
			"GP": 0,
			"wins":0,
			"ties":0,
			"Lose":0,
			"goals":0,
			"Against":0,
			"Points":0
			},
			
			{
			"name":"Diamond B",
			"img":"images/diamondsB_sm.png",
			"GP": 0,
			"wins":0,
			"ties":0,
			"Lose":0,
			"goals":0,
			"Against":0,
			"Points":0
			},			
			
			{
			"name":"Diamond U-9",
			"img":"images/diamondsu9_sm.png",
			"GP": 0,
			"wins":0,
			"ties":0,
			"Lose":0,
			"goals":0,
			"Against":0,
			"Points":0
			},
			
			{
			"name":"Saint Pius",
			"img":"images/stpius_logo_sm.png",
			"GP": 0,
			"wins":0,
			"ties":0,
			"Lose":0,
			"goals":0,
			"Against":0,
			"Points":0
			}	

		];
		
		var xmlDoc2 = xml.responseXML;
		var txt2, hm2, v2, hs2,vs2, j, k;
		txt2 = '<table>'+
						'<tr>'+
							'<th>place</th>'+
							'<th>Team Name</th>'+
							'<th>Games played</th>'+
							'<th>Win</th>'+
							'<th>Ties</th>'+
							'<th>Lose</th>'+
							'<th>Goals Made</th>'+
							'<th>Goals Against</th>'+
							'<th>Points</th>'+
						'</tr>'+
						'<tr>';
		
		
		hm2 = xmlDoc2.getElementsByTagName("home");
		v2 = xmlDoc2.getElementsByTagName("visitor");
		hs2 = xmlDoc2.getElementsByTagName("hscore");
		vs2 = xmlDoc2.getElementsByTagName("vscore");

		for (j = 0; j < hm2.length; j++){
			/*
			find who is home and who is visit
			*/
			/*switch(hm2[j].childNodes[0].nodeValue){
				case "FC Dragons White":
					hom = 0;
					break;
				case "FC Dragons Blue":
					hom = 1;
					break;
				case "Diamond A":
					hom = 3;
					break;
				case "FC Dragons Yellow":
					hom = 2;
					break;
				case "Saint Pius":
					hom = 5;
					break;
				case "Diamond B":
					hom = 4;
					break;	
			}
			
			switch(v2[j].childNodes[0].nodeValue){
				case "FC Dragons White":
					visit = 0;
					break;
				case "FC Dragons Blue":
					visit = 1;
					break;
				case "Diamond A":
					visit = 3;
					break;
				case "FC Dragons Yellow":
					visit = 2;
					break;
				case "Saint Pius":
					visit = 5;
					break;
				case "Diamond B":
					visit = 4;
					break;	
			}	
			*/
			
			let visit = teams.find(team => team.name === v2[j].childNodes[0].nodeValue );
			let hom = teams.find(team => team.name === hm2[j].childNodes[0].nodeValue );	
			console.log(visit);
			console.log(hom);
			if (hs2[j].childNodes[0].nodeValue != "."){
				/*Home lose */
				if(parseInt(hs2[j].childNodes[0].nodeValue) < parseInt(vs2[j].childNodes[0].nodeValue)){
					visit.wins += 1;	
					visit.Points += 3;
					hom.lose += 1;
				}
				/*Home wins */
				else if (parseInt(hs2[j].childNodes[0].nodeValue) > parseInt(vs2[j].childNodes[0].nodeValue)){
					hom.wins += 1;
					hom.Points += 3;
					visit.lose += 1;
				}
				/*tie*/
				else{
					visit.Points += 1;
					hom.Points += 1;
				}
					visit.GP += 1;
					hom.GP += 1;
					
					hom.goals += parseInt(hs2[j].childNodes[0].nodeValue);
					hom.Against += parseInt(vs2[j].childNodes[0].nodeValue);
					visit.goals += parseInt(vs2[j].childNodes[0].nodeValue);
					visit.Against +=parseInt(hs2[j].childNodes[0].nodeValue);
			}

		}
		
		/*sort Teams based off of points */
			teams.sort(function(a,b){return b.Points-a.Points});
			
			for(k = 0; k < teams.length; k++){
				let position = k+1;
				
				txt2 += 	'<td>'+ position +'</td>'
							'<td>'+'<div class = "align-img">'+'<img src ="'+teams[k].img+'" width = "30px" height = "auto"/>'+'</td>'+
							'<td>'+teams[k].GP+'</td>'+
							'<td>'+teams[k].wins+'</td>'+
							'<td>'+teams[k].ties+'</td>'+
							'<td>'+teams[k].lose+'</td>'+
							'<td>'+teams[k].goals+'</td>'+
							'<td>'+teams[k].Against+'</td>'+
							'<td>'+teams[k].Points+'</td>'+
						'</tr>'+
					'</table>';
							
				/*txt2 += '<div class ="columnwst">'+ position +'</div>'+
				'<div class ="columnwst">'+'<div class = "align-img">'+'<img src ="'+teams[k].img+'" width = "30px" height = "auto"/>'+'</div>'+'<div class = "align-text">'+teams[k].name+'</div>'+'</div>'+
				'<div class ="columnwst">'+teams[k].GP+'</div>'+
				'<div class ="columnwst">'+teams[k].wins+'</div>'+
				'<div class ="columnwst">'+teams[k].ties+'</div>'+
				'<div class ="columnwst">'+teams[k].lose+'</div>'+
				'<div class ="columnwst">'+teams[k].goals+'</div>'+
				'<div class ="columnwst">'+teams[k].Against+'</div>'+
				'<div class ="columnwst">'+teams[k].Points+'</div>';*/
			
			
			}
		document.getElementById("stand").innerHTML = txt2;
		
	}
	
 // this is API call ----------------------------------------------
	/*let allNamesElm = document.getElementById("allNames")
	let loaderElm = document.getElementById("loader")
	let errorMessageElm = document.getElementById("errorMessage")
	
	function setErrorDisplay(){
	loaderElm.style.display = "none"
	allNamesElm.style.display = "none"
	errorMessageElm.style.display = "block"
	}
	
		fetch("https://api.apispreadsheets.com/data/VYXSN9pjl6UJ19qS/").then(res=>{
				if (res.status === 200){
			res.json().then(data=>{
				const yourData = data["data"]
				for(let i = 0; i < yourData.length; i++){
				    let rowInfo = yourData[i]
				    let rowInfoDiv = document.createElement("div")
				    rowInfoDiv.classList.add("name-row")
					
				    let rowName = document.createElement("h4")
				    let rowNameNode = document.createTextNode(rowInfo["Date"])
				    rowName.appendChild(rowNameNode)
				    rowName.classList.add("Date")
					
				    let rowWritten = document.createElement("p")
				    let rowWrittenNode = document.createTextNode(rowInfo["Home"])
				    rowWritten.appendChild(rowWrittenNode)
				    rowWritten.classList.add("Home")
	
					let rowWritten2 = document.createElement("p")
				    let rowWrittenNode2 = document.createTextNode(rowInfo["Visitor"])
				    rowWritten2.appendChild(rowWrittenNode2)
				    rowWritten2.classList.add("Visitor")
					
					let rowWritten3 = document.createElement("p")
				    let rowWrittenNode3 = document.createTextNode(rowInfo["Time"])
				    rowWritten3.appendChild(rowWrittenNode3)
				    rowWritten3.classList.add("Time")
				    /*let rowAudio = document.createElement("audio")
				    rowAudio.id = "audio-player"
				    rowAudio.controls = "controls"
				    rowAudio.src = rowInfo["audio"]
				    rowAudio.type = "audio/mpeg"
				    rowAudio.classList.add("audio")*/
					
				   /* rowInfoDiv.appendChild(rowName)
				    rowInfoDiv.appendChild(rowWritten)
					rowInfoDiv.appendChild(rowWritten2)
					rowInfoDiv.appendChild(rowWritten3)
				    //rowInfoDiv.appendChild(rowAudio)
					
				    allNamesElm.appendChild(rowInfoDiv)
				}
				
				loaderElm.style.display = "none"
				allNamesElm.style.display = "block"
				errorMessageElm.style.display = "none"

			}).catch(err => {
				setErrorDisplay()
			})
		}
		else{
			setErrorDisplay()
			}
		}).catch(err =>{
			setErrorDisplay()
		})*/
	