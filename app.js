function showMessage(feature){

if(feature==="Lesson Planner"){

document.body.innerHTML=`

<header>
<h1>📝 ILAW Lesson Planner</h1>
</header>

<div style="padding:20px;">

<label>Grade Level</label><br>
<select id="grade">
<option>Grade 7</option>
<option>Grade 8</option>
<option>Grade 9</option>
<option>Grade 10</option>
</select>

<br><br>

<label>Subject</label><br>

<input id="subject"
placeholder="Example: Mathematics">

<br><br>

<label>Topic</label><br>

<input id="topic"
placeholder="Example: Ratio and Proportion">

<br><br>

<button onclick="generateLesson()">
Generate Lesson Plan
</button>

</div>

`;

return;

}

alert(feature+" Coming Soon!");

}

function generateLesson(){

let grade=document.getElementById("grade").value;

let subject=document.getElementById("subject").value;

let topic=document.getElementById("topic").value;

document.body.innerHTML=`

<div style="padding:20px;font-family:Arial">

<h2>Generated Lesson Plan</h2>

<p><b>Grade:</b> ${grade}</p>

<p><b>Subject:</b> ${subject}</p>

<p><b>Topic:</b> ${topic}</p>

<hr>

<h3>Objective</h3>

Students will understand ${topic}.

<h3>Learning Activities</h3>

• Motivation

• Discussion

• Guided Practice

• Independent Activity

• Reflection

<hr>

<button onclick="location.reload()">

⬅ Back

</button>

</div>

`;

}