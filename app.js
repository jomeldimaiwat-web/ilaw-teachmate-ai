function showMessage(feature){

if(feature==="Lesson Planner"){

document.body.innerHTML=`

<header>
<h1>📝 ILAW Lesson Planner</h1>
</header>

<div class="hero">

<label><b>Grade Level</b></label><br>
<select id="grade">
<option>Grade 7</option>
<option>Grade 8</option>
<option>Grade 9</option>
<option>Grade 10</option>
</select>

<br><br>

<label><b>Subject</b></label><br>
<input id="subject" placeholder="Example: Mathematics">

<br><br>

<label><b>Topic</b></label><br>
<input id="topic" placeholder="Example: Ratio and Proportion">

<br><br>

<button onclick="generateLesson()">
Generate ILAW Lesson Plan
</button>

</div>

`;

return;

}

alert(feature + " Coming Soon!");

}

function generateLesson(){

let grade=document.getElementById("grade").value;
let subject=document.getElementById("subject").value;
let topic=document.getElementById("topic").value;

document.body.innerHTML=`

<header>
<h1>Generated ILAW Lesson Plan</h1>
</header>

<div class="hero">

<h2>${topic}</h2>

<p><b>Grade:</b> ${grade}</p>

<p><b>Subject:</b> ${subject}</p>

<hr>

<h3>I - Learning Objectives</h3>

<ul>
<li>Explain ${topic}</li>
<li>Apply ${topic} in daily life</li>
<li>Participate actively in class discussion</li>
</ul>

<h3>L - Learning Activities</h3>

<ul>
<li>Prayer</li>
<li>Review</li>
<li>Motivation</li>
<li>Lesson Proper</li>
<li>Guided Practice</li>
<li>Independent Practice</li>
<li>Reflection</li>
</ul>

<h3>A - Assessment</h3>

5-item formative quiz.

<h3>W - Wrap-up</h3>

Summarize the lesson and assign homework.

<br><br>

<button onclick="location.reload()">
⬅ Back to Dashboard
</button>

</div>

`;

}