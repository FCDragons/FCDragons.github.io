	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		myFunction(this);
		}
	};
	xhttp.open("GET", "books.xml", true);
	xhttp.send();

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
				himg ="images/fcdragons_logo_sm.png";
				break;
			case "Diamond A":
				himg ="images/diamondsA_logo_sm.png";
				break;
			case "FC Dragons Yellow":
				himg ="images/fcdragons_logo_sm.png";
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
		
			txt += x[i].childNodes[0].nodeValue + "<br>"+
					hm[i].childNodes[0].nodeValue + "<br>"+
					dur[i].childNodes[0].nodeValue + "<br>"+
					v[i].childNodes[0].nodeValue + "<br>"+
					t[i].childNodes[0].nodeValue + "<br>"+
					hs[i].childNodes[0].nodeValue + "<br>"+
					vs[i].childNodes[0].nodeValue + "<br>"+
					nt[i].childNodes[0].nodeValue + "<br><br>";
		}
		document.getElementById("demo").innerHTML = txt;
		
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
	