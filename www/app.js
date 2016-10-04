var parent;
var c1;
var LButtons='<input class="LButton" value="&#8592; Prev" type="button" onclick="PrevLearn()"><input class="LButton" value="Next &#8594;" type="button" onclick="NextLearn()">';
//Variables for Learn Section
var learn= [
    '<h2>Góðan Daginn</h2><br><p><i>/Go-tha-n Die-inn/</i></p><br><h3>Good Day</h3>',
    '<h2>Halló</h2><br><p><i>/Ha-low/</i></p><br><h3>Hello</h3>',
	'<h2>Bless</h2><br><p><i>/Bless/</i></p><br><h3>Goodbye</h3>',
	'<h2>Hvernig hefurðu það?</h2><br><p><i>/Kver-nik hef-ura-thoo tha/</i></p><br><h3>How are you?</h3>',
	'<h2>Já & Nei</h2><br><p><i>/Yaa & N-eye/</i></p><br><h3>Yes & No</h3>',
	'<h2>Hvað heitir þú?</h2><br><p><i>/Kvarth hi-tear thoo/</i></p><br><h3>What is your name?</h3>',
	'<h2>ég heiti...</h2><br><p><i>/Yeh hey-ti/</i></p><br><h3>My name is...</h3>',
	'<h2>Hvar er...?</h2><br><p><i>/Kvar air/</i></p><br><h3>Where is...?</h3>',
	'<h2>Takk fyrir</h2><br><p><i>/Tahk fi-rir/</i></p><br><h3>Thank you</h3>',
	'<h2>Rauður</h2><br><p><i>/Rur-ee-dhur/</i></p><br><h3>Red</h3>',
	'<h2>Blár</h2><br><p><i>/Blaw-r/</i></p><br><h3>Blue</h3>',
	'<h2>Grænn</h2><br><p><i>/Grigh-n/</i></p><br><h3>Green</h3>',
	'<h2>Appelsínugulur</h2><br><p><i>/Ahp-el-see-nu-gul-ur/</i></p><br><h3>Orange</h3>',
	'<h2>Bleikur</h2><br><p><i>/Bly-kur/</i></p><br><h3>Pink</h3>',
	'<h2>Brúnn</h2><br><p><i>/Broon/</i></p><br><h3>Brown</h3>',
	'<h2>Fjólublár</h2><br><p><i>/Fyo-lu-blaur/</i></p><br><h3>Purple</h3>',
	'<h2>Grár</h2><br><p><i>/Graw-r/</i></p><br><h3>Grey</h3>',
	'<h2>Gulur</h2><br><p><i>/Gul-ur/</i></p><br><h3>Yellow</h3>',
	'<h2>Hvítur</h2><br><p><i>/Kvee-tur/</i></p><br><h3>White</h3>',
	'<h2>Svartur</h2><br><p><i>/Svar-tur/</i></p><br><h3>Black</h3>', 	
	];
var LearnC;
//Variables for Quiz Section
var Lives;
var Level;
var Success=0;
var Q1L=[
'<div id="E1" class="eng"draggable="true"ondragstart="return dragStart(event)"><p>Good Day</p></div>',
'<div id="E2"class="eng"draggable="true"ondragstart="return dragStart(event)"><p>Goodbye</p></div>',
'<div id="E3"class="eng"draggable="true"ondragstart="return dragStart(event)"><p>Hello</p></div>'
]
var Q1R=[
'<div id="I1" class="ice" ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)">Góðan Daginn</div>',
'<div id="I2" class="ice" ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)">Bless</div>',
'<div id="I3" class="ice" ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)">Halló</div>'
]
var Q2L=[
'<div id="E1" class="eng"draggable="true"ondragstart="return dragStart(event)"><p>What is your name?</p></div>',
'<div id="E2"class="eng"draggable="true"ondragstart="return dragStart(event)"><p>Where is...?</p></div>',
'<div id="E3"class="eng"draggable="true"ondragstart="return dragStart(event)"><p>How are you?</p></div>'
]
var Q2R=[
'<div id="I1" class="ice" ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)">Hvað heitir þú?</div>',
'<div id="I2" class="ice" ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)">Hvar er...?</div>',
'<div id="I3" class="ice" ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)">Hvernig hefurðu það?</div>'
]
var Q3L=[
'<div id="E1" class="eng"draggable="true"ondragstart="return dragStart(event)"><p>Rauður</p></div>',
'<div id="E2"class="eng"draggable="true"ondragstart="return dragStart(event)"><p>Blár</p></div>',
'<div id="E3"class="eng"draggable="true"ondragstart="return dragStart(event)"><p>Grænn</p></div>'
]
var Q3R=[
'<div id="I1" class="ice" style="background-color:red;width:126px;height:66px;"ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"></div>',
'<div id="I2" class="ice" style="background-color:blue;width:126px;height:66px; ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"></div>',
'<div id="I3" class="ice" style="background-color:green;width:126px;height:66px; ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"></div>'
]
//Variables for Drag and Drop
var ans;
var src;
//Variables for the Review Section
var Table=[
'<table><tr><th>English</th><th>Icelandic</th><th>Pronounciation</th></tr>',
'</table>'
]
var Rev=[
'<tr><td>Hello</td><td>Halló</td><td>Ha-low</td></tr>',
'<tr><td>Good Day</td><td>Góðan Daginn</td><td>Go-tha-n Die-inn</td></tr>',
'<tr><td>Goodbye</td><td>Bless</td><td>Bless</td></tr>',
'<tr><td>How are you?</td><td>Hvernig hefurðu það?</td><td>Kver-nik hef-ura-thoo tha</td></tr>',
'<tr><td>What is your name?</td><td>Hvað heitir þú?</td><td>Kvarth hi-tear thoo<td></tr>',
'<tr><td>Where is...?</td><td>Hvar er...?</td><td>Kvar air<td></tr>'
]
//Loads the Learning Section of the app
function load_learn(){
	//Removes any existing elements within the Container Div
	parent = document.getElementById("container");
	c1 = document.getElementById("items");
	parent.removeChild(c1);
	//Loads new elements for the Learning app
	document.getElementById("container").innerHTML='<div id="items"class="items">';
	document.getElementById("items").innerHTML=learn[0] + LButtons;
	LearnC=0;
}
//Determines which page should be loaded when previous button is clicked		
function PrevLearn(){
		switch(LearnC){
			case 0: document.getElementById("items").innerHTML=learn[19] + LButtons;
					LearnC=19;
					break;
			case 1: load_learn();
					break;
			case 2:document.getElementById("items").innerHTML=learn[1] + LButtons;
					LearnC--;
					break;
			case 3:document.getElementById("items").innerHTML=learn[2] + LButtons;
					LearnC--;
					break;
			case 4:document.getElementById("items").innerHTML=learn[3] + LButtons;
					LearnC--;
					break;
			case 5:document.getElementById("items").innerHTML=learn[4] + LButtons;
					LearnC--;
					break;
			case 6:document.getElementById("items").innerHTML=learn[5] + LButtons;
					LearnC--;
					break;
			case 7:document.getElementById("items").innerHTML=learn[6] + LButtons;
					LearnC--;
					break;
			case 8:document.getElementById("items").innerHTML=learn[7] + LButtons;
					LearnC--;
					break;
			case 9:document.getElementById("items").innerHTML=learn[8] + LButtons;
					LearnC--;
					break;
			case 10:document.getElementById("items").innerHTML=learn[9] + LButtons;
					LearnC--;
					break;
			case 11:document.getElementById("items").innerHTML=learn[10] + LButtons;
					LearnC--;
					break;
			case 12:document.getElementById("items").innerHTML=learn[11] + LButtons;
					LearnC--;
					break;
			case 13:document.getElementById("items").innerHTML=learn[12] + LButtons;
					LearnC--;
					break;
			case 14:document.getElementById("items").innerHTML=learn[13] + LButtons;
					LearnC--;
					break;
			case 15:document.getElementById("items").innerHTML=learn[14] + LButtons;
					LearnC--;
					break;
			case 16:document.getElementById("items").innerHTML=learn[15] + LButtons;
					LearnC--;
					break;
			case 17:document.getElementById("items").innerHTML=learn[16] + LButtons;
					LearnC--;
					break;
			case 18:document.getElementById("items").innerHTML=learn[17] + LButtons;
					LearnC--;
					break;
			case 19:document.getElementById("items").innerHTML=learn[18] + LButtons;
					LearnC--;
					break;					
	}
}
//Determines which page should be loaded when the next button is clicked
function NextLearn(){
	switch(LearnC){
		case 0: document.getElementById("items").innerHTML=learn[1] + LButtons;
				LearnC++;
				break;
		case 1:document.getElementById("items").innerHTML=learn[2] + LButtons;
				LearnC++;
				break;
		case 2:document.getElementById("items").innerHTML=learn[3] + LButtons;
				LearnC++;
				break;
		case 3:document.getElementById("items").innerHTML=learn[4] + LButtons;
				LearnC++;
				break;
		case 4:document.getElementById("items").innerHTML=learn[5] + LButtons;
				LearnC++;
				break;
		case 5:document.getElementById("items").innerHTML=learn[6] + LButtons;
				LearnC++;
				break;
		case 6:document.getElementById("items").innerHTML=learn[7] + LButtons;
				LearnC++;
				break;
		case 7:document.getElementById("items").innerHTML=learn[8] + LButtons;
				LearnC++;
				break;
		case 8:document.getElementById("items").innerHTML=learn[9] + LButtons;
				LearnC++;
				break;
		case 9:document.getElementById("items").innerHTML=learn[10] + LButtons;
				LearnC++;
				break;
		case 10:document.getElementById("items").innerHTML=learn[11] + LButtons;
				LearnC++;
				break;
		case 11:document.getElementById("items").innerHTML=learn[12] + LButtons;
				LearnC++;
				break;
		case 12:document.getElementById("items").innerHTML=learn[13] + LButtons;
				LearnC++;
				break;
		case 13:document.getElementById("items").innerHTML=learn[14] + LButtons;
				LearnC++;
				break;
		case 14:document.getElementById("items").innerHTML=learn[15] + LButtons;
				LearnC++;
				break;
		case 15:document.getElementById("items").innerHTML=learn[16] + LButtons;
				LearnC++;
				break;
		case 16:document.getElementById("items").innerHTML=learn[17] + LButtons;
				LearnC++;
				break;
		case 17:document.getElementById("items").innerHTML=learn[18] + LButtons;
				LearnC++;
				break;
		case 18:document.getElementById("items").innerHTML=learn[19] + LButtons;
				LearnC++;
				break;
		case 19: load_learn();
				break;
	}
}
//Loads the quiz section of the app
function load_quiz(){
	Lives=3;
	Level=1;
	Success=0;
	parent = document.getElementById("container");
	c1 = document.getElementById("items");
	parent.removeChild(c1);
	document.getElementById("container").innerHTML='<div id="items"class="items">';
	document.getElementById("items").innerHTML='<div id="Left"></div>'+'<div id="Right"></div>';
		document.getElementById("Left").innerHTML=Q1L[2]+Q1L[1]+Q1L[0];
		document.getElementById("Right").innerHTML=Q1R[0]+Q1R[1]+Q1R[2];
}
//Level 2 of the quiz
function load_quiz2(){
	Level=2;
	parent = document.getElementById("container");
	c1 = document.getElementById("items");
	parent.removeChild(c1);
	document.getElementById("container").innerHTML='<div id="items"class="items">';
	document.getElementById("items").innerHTML='<div id="Left"></div>'+'<div id="Right"></div>';
		document.getElementById("Left").innerHTML=Q2L[1]+Q2L[0]+Q2L[2];
		document.getElementById("Right").innerHTML=Q2R[0]+Q2R[1]+Q2R[2];
}
//Level 3 of the quiz
function load_quiz3(){
	Level=3;
	parent = document.getElementById("container");
	c1 = document.getElementById("items");
	parent.removeChild(c1);
	document.getElementById("container").innerHTML='<div id="items"class="items">';
	document.getElementById("items").innerHTML='<div id="Left"></div>'+'<div id="Right"></div>';
		document.getElementById("Left").innerHTML=Q3L[1]+Q3L[0]+Q3L[2];
		document.getElementById("Right").innerHTML=Q3R[2]+Q3R[1]+Q3R[0];
}
//Loads the review section of the app
function load_review(){
	parent = document.getElementById("container");
	c1 = document.getElementById("items");
	parent.removeChild(c1);
	document.getElementById("container").innerHTML='<div id="items"class="items">';
	switch(Level){
	case 1:
	document.getElementById("items").innerHTML="<h2>You Need to Revise Greetings</h2><br>"+Table[0]+Rev[0]+Rev[1]+Rev[2]+Table[1];
	break;
	case 2: 
	document.getElementById("items").innerHTML="<h2>You Need to Revise Questions</h2><br>"+Table[0]+Rev[3]+Rev[4]+Rev[5]+Table[1];
	break;
	case 3:
	document.getElementById("items").innerHTML="<h2>You Need to Revise Colours</h2><br>"+Table[0]+Table[1];
	break;
	default:
	document.getElementById("items").innerHTML="<h2>To Receive Feedback on What to Review Please Take the Quiz</h2>";
	}
}	
//Holds data of the element being dragged		
function dragStart(ev) {
	ev.dataTransfer.effectAllowed='move';
	ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
	ev.dataTransfer.setDragImage(ev.target,0,0);
	return true;
	}
/* function dragEnter(ev){
	return true;
} */
//Allows the drop to happen
function dragOver(ev){
	ev.preventDefault();
return false;
} 
//Run when an element is dropped into a dropzone
function dragDrop(ev){	
	//setting the id and data of the source and target elements to variables
	ans=ev.target.getAttribute('id');
	src=ev.dataTransfer.getData("Text");
		//both variables are combined into one string and evaluated by switch statement to determine whether or not the drop should be allowed
		switch(src+"|"+ans){
			//increment success counter, inserts the source element inside of the target element, triggers alertify success message, runs the check success function
			case "E1|I1": Success++;
					ev.target.appendChild(document.getElementById(src));
					ev.stopPropagation();
					alertify.success("Correct! Rétt!");
					checkSuccess();
					break;
			case "E2|I2": Success++;
					ev.target.appendChild(document.getElementById(src));
					ev.stopPropagation();
					alertify.success("Correct! Rétt!");
					checkSuccess();
					break;
			case "E3|I3": Success++;
					ev.target.appendChild(document.getElementById(src));
					ev.stopPropagation();
					alertify.success("Correct! Rétt!");
					checkSuccess();
					break;
			//decrement Lives when user is wrong, displays error message and lives counter, checks fail counter
			default:Lives--;
					alertify.error("Wrong Answer! Rangt Svar!<br>"+Lives+" Lives Remaining");
					checkFail();
					break;
		}
	ev.preventDefault();
	return true;
}
//checks the success counter
function checkSuccess(){
	if (Success==3){
	LevelChange();
	}
}
//loads correct level based on the level counter
function LevelChange(){
	switch(Level){
		case 1:	alertify.alert("Well Done! Vel Gert!");
				Success=0;
				load_quiz2();
				break;
		case 2:	alertify.alert("Well Done! Vel Gert!");
				Success=0;
				load_quiz3();
				break;
		case 3: alertify.alert("Well Done! You have completed the Quiz!");
				Success=0;
				load_quiz();
				break;
		}
}
//checks the fail counter, restarts quiz when counter reaches 0
function checkFail(){
	if (Lives==0){
		alertify.alert("No More Lives Left! Do some more Revision!");
		Lives=0;
		load_review();
	}
}