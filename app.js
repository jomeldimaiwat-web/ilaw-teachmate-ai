const views=['home','lesson','quiz','ppt','resources'];
function show(id){views.forEach(v=>document.getElementById(v).classList.toggle('active',v===id));if(id==='resources')renderSaved();scrollTo(0,0)}
function val(id){return document.getElementById(id).value.trim()}
function generateLesson(){
const grade=val('grade'),subject=val('subject'),curriculum=val('curriculum'),quarter=val('quarter'),week=val('week'),duration=val('duration'),topic=val('topic')||'Lesson Topic',competency=val('competency')||'Learners demonstrate understanding of the lesson competency.',code=val('code'),resources=val('resources')||'Teacher-prepared learning resources.';
const draft={id:Date.now(),title:`${grade} ${subject}: ${topic}`,data:{grade,subject,curriculum,quarter,week,duration,topic,competency,code,resources}};
localStorage.setItem('ilawDraft',JSON.stringify(draft));
document.getElementById('output').classList.remove('hidden');
document.getElementById('output').innerHTML=`<h3>ILAW Lesson Plan Draft</h3>
<p><b>${esc(grade)} • ${esc(subject)} • ${esc(topic)}</b><br>${esc(curriculum)} • ${esc(duration)}</p>
<h4>I — Intentions</h4><p>By the end of the lesson, learners should be able to explain the key concepts related to <b>${esc(topic)}</b>, apply their understanding in appropriate tasks, and demonstrate the intended competency.</p>
<h4>L — Learning Experiences</h4><p><b>Opening:</b> Activate prior knowledge through a short question or real-life situation.<br><b>Development:</b> Present the concept, model examples, and facilitate guided practice.<br><b>Application:</b> Let learners work individually or collaboratively on contextualized tasks.<br><b>Closure:</b> Ask learners to summarize key learning and connect it to real life.</p>
<h4>A — Assessing Learning</h4><p>Use questioning, observation, guided practice, and an exit task to check understanding. Provide feedback and assess learner performance against the stated intentions.</p>
<h4>W — Ways Forward</h4><p>Provide remediation for learners who need additional support, enrichment for learners ready for extension, and use assessment evidence to plan the next lesson.</p>
<p><b>Learning Competency:</b> ${esc(competency)}${code?`<br><b>Code:</b> ${esc(code)}`:''}<br><b>Resources:</b> ${esc(resources)}</p>
<div class="actions"><button onclick="saveDraft()">💾 Save</button><button onclick="window.print()">🖨️ Print / Save PDF</button><button onclick="copyDraft()">📋 Copy</button></div>
<p class="muted"><small>AI draft notice: Review and align this draft with current DepEd, school, and division requirements before official use.</small></p>`;
}
function saveDraft(){const d=JSON.parse(localStorage.getItem('ilawDraft'));let a=JSON.parse(localStorage.getItem('ilawResources')||'[]');a=a.filter(x=>x.id!==d.id);a.unshift(d);localStorage.setItem('ilawResources',JSON.stringify(a));alert('Saved to My Resources.')}
function renderSaved(){const el=document.getElementById('saved');let a=JSON.parse(localStorage.getItem('ilawResources')||'[]');el.innerHTML=a.length?a.map(x=>`<div class="output"><b>${esc(x.title)}</b><p>${esc(x.data.curriculum)} • ${esc(x.data.duration)}</p><button onclick="loadSaved(${x.id})">Open</button> <button onclick="deleteSaved(${x.id})">Delete</button></div>`).join(''):'<div class="output"><p>No saved resources yet.</p></div>'}
function loadSaved(id){let a=JSON.parse(localStorage.getItem('ilawResources')||'[]');let x=a.find(y=>y.id===id);if(!x)return;Object.entries(x.data).forEach(([k,v])=>{let e=document.getElementById(k);if(e)e.value=v});show('lesson');generateLesson()}
function deleteSaved(id){let a=JSON.parse(localStorage.getItem('ilawResources')||'[]').filter(x=>x.id!==id);localStorage.setItem('ilawResources',JSON.stringify(a));renderSaved()}
function copyDraft(){const text=document.getElementById('output').innerText;navigator.clipboard?.writeText(text).then(()=>alert('Copied to clipboard.'))}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}