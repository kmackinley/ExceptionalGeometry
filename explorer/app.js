(() => {
'use strict';
if (!window.THREE) { document.getElementById('error').classList.add('visible'); return; }

const TAU = Math.PI * 2;
const simpleRoots = [
  [.5,-.5,-.5,-.5,-.5,-.5,-.5,.5],
  [1,1,0,0,0,0,0,0],
  [-1,1,0,0,0,0,0,0],
  [0,-1,1,0,0,0,0,0],
  [0,0,-1,1,0,0,0,0],
  [0,0,0,-1,1,0,0,0],
  [0,0,0,0,-1,1,0,0],
  [0,0,0,0,0,-1,1,0]
];
const projection = [
  [0,-.119117702,-.192736491,-.217638872,-.192736491,-.119117702,0,-.921933055],
  [.096899069,.463505660,.236930326,0,-.236930326,-.463505660,-.669823572,0],
  [0,.383361321,-.236930326,-.749967912,-.236930326,.383361321,0,.177043408]
];
const fixedBases = {
  2:[[1,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,1]],
  3:[[2,1,1,2,1,1,1,0],[1,0,2,0,2,2,1,1],[1,1,0,2,2,1,1,1],[2,2,2,0,2,2,2,2]],
  5:[[1,3,2,2,2,0,3,3],[4,3,2,1,4,1,0,2]]
};
const orbitColors = ['#f0d47b','#6da3d7','#63b78b','#c46b72','#a987d5','#65c9c1','#d28f57','#d3c4a6'];
const modeData = {
  roots:{eyebrow:'The 240 roots',title:'The <em>E₈ root system</em>',copy:'Every point is generated from the exact eight-dimensional E₈ root system and projected into three dimensions. Drag to rotate, scroll to zoom, and select a root to inspect it.',formula:'Φ(E₈) = {±eᵢ ± eⱼ} ∪ {½(±1,…,±1)}\n|Φ| = 240   ·   |α|² = 2',status:'8 Coxeter orbits · 30 roots each'},
  coxeter:{eyebrow:'Order thirty symmetry',title:'The <em>Coxeter action</em>',copy:'The Coxeter element is built from the eight simple reflections. Play the transformation through all thirty steps; colors follow the eight disjoint root orbits.',formula:'C = s₁s₂···s₈   ·   C³⁰ = I\neigenphases = exp(2πi mₖ/30)',status:'mₖ = 1, 7, 11, 13, 17, 19, 23, 29'},
  fixed:{eyebrow:'Exact torus automorphisms',title:'The three <em>prime sectors</em>',copy:'These clouds are projected representatives of the fixed points of C¹⁵, C¹⁰, and C⁶ on the E₈ lattice torus. They are translated apart only for visual comparison.',formula:'|Fix(C¹⁵)| = 2⁸ = 256\n|Fix(C¹⁰)| = 3⁴ = 81\n|Fix(C⁶)|  = 5² = 25',status:'Exact finite quotient counts · projected representatives'},
  spectrum:{eyebrow:'Theta series and Laplacian',title:'The <em>spectral shells</em>',copy:'The concentric layers visualize the first five E₈ lattice shells. For clarity the larger shells are sampled; the displayed multiplicities are exact.',formula:'ΘE₈(q) = 1 + 240 Σ σ₃(n)qⁿ\nζΔ(s)=240(8π²)⁻ˢζ(s)ζ(s−3)',status:'λ₁ = 8π² · first shell multiplicity 240'},
  physics:{eyebrow:'From structure to testable models',title:'Geometry and <em>physical hypotheses</em>',copy:'The mathematical objects remain exact. The cards show proposed physical identifications built around them—not a claim that the visible universe is literally this three-dimensional projection or a torus.',formula:'exact geometry → candidate dynamics → observable\nmathematics and interpretation shown separately',status:'Research program · falsifiable physical mappings'}
};

const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
const identity=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j?1:0));
const matMul=(A,B)=>A.map(row=>B[0].map((_,j)=>row.reduce((s,x,k)=>s+x*B[k][j],0)));
const matVec=(A,v)=>A.map(row=>dot(row,v));
const reflection=a=>identity(8).map((row,i)=>row.map((x,j)=>x-a[i]*a[j]));
const project=v=>projection.map(row=>dot(row,v));
const rootKey=v=>v.map(x=>Math.round(x*2)/2).join(',');
const clean=v=>v.map(x=>Math.abs(x)<1e-9?0:Math.round(x*2)/2);

let C=identity(8); simpleRoots.forEach(a=>{ C=matMul(C,reflection(a)); });
const Cp=[identity(8)]; for(let i=1;i<=30;i++) Cp.push(matMul(Cp[i-1],C));

const roots=[];
for(let i=0;i<8;i++) for(let j=i+1;j<8;j++) for(const si of [-1,1]) for(const sj of [-1,1]){
  const r=Array(8).fill(0); r[i]=si; r[j]=sj; roots.push(r);
}
for(let mask=0;mask<256;mask++){
  const r=[]; let minus=0;
  for(let i=0;i<8;i++){ const neg=(mask>>i)&1; if(neg) minus++; r.push(neg?-.5:.5); }
  if(minus%2===0) roots.push(r);
}
const rootIndex=new Map(roots.map((r,i)=>[rootKey(r),i]));
const orbitOf=Array(240).fill(-1), phaseOf=Array(240).fill(-1), orbits=[];
for(let i=0;i<roots.length;i++) if(orbitOf[i]<0){
  const orbit=[]; let v=roots[i].slice();
  for(let k=0;k<30;k++){
    const idx=rootIndex.get(rootKey(clean(v))); orbit.push(idx); orbitOf[idx]=orbits.length; phaseOf[idx]=k; v=matVec(C,v);
  }
  orbits.push(orbit);
}
console.assert(roots.length===240,'E8 root generation failed');
console.assert(orbits.length===8 && orbits.every(o=>o.length===30),'Coxeter orbit decomposition failed');
console.assert(Cp[30].every((r,i)=>r.every((x,j)=>Math.abs(x-(i===j?1:0))<1e-7)),'Coxeter order check failed');

function fixedRepresentatives(p){
  const basis=fixedBases[p], out=[], total=Math.pow(p,basis.length);
  for(let n=0;n<total;n++){
    let q=n, coeff=Array(8).fill(0);
    for(let b=0;b<basis.length;b++){
      const digit=q%p; q=Math.floor(q/p);
      for(let i=0;i<8;i++) coeff[i]=(coeff[i]+digit*basis[b][i])%p;
    }
    const eu=Array(8).fill(0);
    for(let i=0;i<8;i++) for(let j=0;j<8;j++) eu[j]+=coeff[i]*simpleRoots[i][j]/p;
    out.push(project(eu));
  }
  const mean=[0,1,2].map(k=>out.reduce((s,v)=>s+v[k],0)/out.length);
  return out.map(v=>v.map((x,k)=>x-mean[k]));
}
const fixedSets={2:fixedRepresentatives(2),3:fixedRepresentatives(3),5:fixedRepresentatives(5)};
console.assert(fixedSets[2].length===256 && fixedSets[3].length===81 && fixedSets[5].length===25,'Fixed-point counts failed');

let renderer,scene,camera,world,rootPoints,rootHalo,orbitLines,neighborLines,selectionMesh;
let fixedGroups={},spectralGroups=[],stars;
let currentMode='roots',selectedRoot=-1,playing=false,autoRotate=true,stepValue=0,lastTime=performance.now();
let dragging=false,moved=false,lastX=0,lastY=0,pinchDistance=0;
const raycaster=new THREE.Raycaster(), pointer=new THREE.Vector2(); raycaster.params.Points.threshold=.16;
const projectedRoots=roots.map(project);

function spriteTexture(){
  const c=document.createElement('canvas'); c.width=c.height=128; const ctx=c.getContext('2d');
  const g=ctx.createRadialGradient(64,64,0,64,64,64); g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.16,'rgba(255,255,255,.98)');g.addColorStop(.42,'rgba(255,255,255,.35)');g.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);
}
const pointSprite=spriteTexture();
function pointsObject(points,colors,size,opacity=.9){
  const geo=new THREE.BufferGeometry();
  const pos=new Float32Array(points.flat()); geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  if(colors){ const col=[]; colors.forEach(c=>{const cc=new THREE.Color(c);col.push(cc.r,cc.g,cc.b)});geo.setAttribute('color',new THREE.Float32BufferAttribute(col,3)); }
  const mat=new THREE.PointsMaterial({size,map:pointSprite,transparent:true,opacity,depthWrite:false,blending:THREE.AdditiveBlending,vertexColors:!!colors,sizeAttenuation:true,color:colors?0xffffff:(typeof colors==='string'?colors:0xffffff)});
  return new THREE.Points(geo,mat);
}
function setPositions(obj,points){ const a=obj.geometry.attributes.position.array; points.forEach((p,i)=>{a[i*3]=p[0];a[i*3+1]=p[1];a[i*3+2]=p[2]}); obj.geometry.attributes.position.needsUpdate=true; obj.geometry.computeBoundingSphere(); }
function buildRootObjects(){
  const colors=roots.map((_,i)=>orbitColors[orbitOf[i]]);
  rootHalo=pointsObject(projectedRoots,colors,.33,.15); rootPoints=pointsObject(projectedRoots,colors,.105,.96);
  world.add(rootHalo,rootPoints);
  const linePositions=[];
  orbits.forEach(orbit=>{
    for(let k=0;k<orbit.length;k++){ const a=projectedRoots[orbit[k]],b=projectedRoots[orbit[(k+1)%orbit.length]];linePositions.push(...a,...b); }
  });
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(linePositions,3));
  orbitLines=new THREE.LineSegments(g,new THREE.LineBasicMaterial({color:0xc9a84c,transparent:true,opacity:.085,blending:THREE.AdditiveBlending,depthWrite:false}));world.add(orbitLines);
  const ng=new THREE.BufferGeometry();ng.setAttribute('position',new THREE.Float32BufferAttribute([],3));neighborLines=new THREE.LineSegments(ng,new THREE.LineBasicMaterial({color:0xf0d47b,transparent:true,opacity:.42,blending:THREE.AdditiveBlending,depthWrite:false}));world.add(neighborLines);
  selectionMesh=new THREE.Mesh(new THREE.SphereGeometry(.11,16,12),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.95}));selectionMesh.visible=false;world.add(selectionMesh);
}
function buildStars(){
  const pts=[];for(let i=0;i<1000;i++){const r=16+Math.random()*30,phi=Math.acos(2*Math.random()-1),th=Math.random()*TAU;pts.push([r*Math.sin(phi)*Math.cos(th),r*Math.cos(phi),r*Math.sin(phi)*Math.sin(th)]);}
  stars=pointsObject(pts,null,.035,.28);stars.material.color.set(0x8b7f68);scene.add(stars);
}
function buildFixedObjects(){
  const specs={2:{offset:[-4.1,.2,0],color:'#c9a84c',size:.1},3:{offset:[0,.2,0],color:'#6da3d7',size:.115},5:{offset:[4.1,.2,0],color:'#c46b72',size:.14}};
  [2,3,5].forEach(p=>{
    const sp=specs[p],scale=p===2?1.42:p===3?1.72:2.15;
    const points=fixedSets[p].map(v=>[v[0]*scale+sp.offset[0],v[1]*scale+sp.offset[1],v[2]*scale+sp.offset[2]]);
    const colors=points.map(()=>sp.color),halo=pointsObject(points,colors,sp.size*2.8,.12),core=pointsObject(points,colors,sp.size,.92);
    const grp=new THREE.Group();grp.add(halo,core);grp.visible=false;world.add(grp);fixedGroups[p]={group:grp,core,halo,center:new THREE.Vector3(...sp.offset)};
  });
}
function fibonacciSphere(count,radius){
  const pts=[],ga=Math.PI*(3-Math.sqrt(5));for(let i=0;i<count;i++){const y=1-(i/(count-1))*2,rr=Math.sqrt(Math.max(0,1-y*y)),th=ga*i;pts.push([Math.cos(th)*rr*radius,y*radius,Math.sin(th)*rr*radius]);}return pts;
}
function buildSpectralObjects(){
  const counts=[240,2160,6720,17520,30240],colors=['#f0d47b','#6da3d7','#63b78b','#a987d5','#c46b72'];
  counts.forEach((count,i)=>{
    const sample=Math.min(count,280+i*45),radius=1.25+Math.sqrt(i+1)*.92,points=i===0?projectedRoots.map(v=>v.map(x=>x*1.25)):fibonacciSphere(sample,radius);
    const obj=pointsObject(points,points.map(()=>colors[i]),i===0?.085:.045,.48-i*.035);obj.visible=false;world.add(obj);spectralGroups.push({obj,count,n:i+1,radius});
  });
}
function init(){
  try{
    scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.1,120);camera.position.set(0,0,8.4);
    renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0x07070b,0);renderer.outputEncoding=THREE.sRGBEncoding;
    document.getElementById('scene').appendChild(renderer.domElement);world=new THREE.Group();world.rotation.set(.22,-.38,.08);scene.add(world);buildStars();buildRootObjects();buildFixedObjects();buildSpectralObjects();bindEvents();setMode('roots');resize();animate();
  }catch(err){console.error(err);document.getElementById('error').classList.add('visible');}
}
function bindEvents(){
  const el=document.getElementById('scene');
  el.addEventListener('pointerdown',e=>{dragging=true;moved=false;lastX=e.clientX;lastY=e.clientY;el.classList.add('dragging');el.setPointerCapture?.(e.pointerId)});
  el.addEventListener('pointermove',e=>{if(!dragging)return;const dx=e.clientX-lastX,dy=e.clientY-lastY;if(Math.abs(dx)+Math.abs(dy)>3)moved=true;world.rotation.y+=dx*.006;world.rotation.x+=dy*.006;lastX=e.clientX;lastY=e.clientY});
  el.addEventListener('pointerup',e=>{dragging=false;el.classList.remove('dragging');if(!moved && (currentMode==='roots'||currentMode==='coxeter'||currentMode==='physics'))selectAt(e.clientX,e.clientY)});
  el.addEventListener('wheel',e=>{e.preventDefault();camera.position.z=Math.max(4.2,Math.min(16,camera.position.z+e.deltaY*.008))},{passive:false});
  el.addEventListener('touchstart',e=>{if(e.touches.length===2)pinchDistance=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY)},{passive:true});
  el.addEventListener('touchmove',e=>{if(e.touches.length===2){const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);camera.position.z=Math.max(4.2,Math.min(16,camera.position.z-(d-pinchDistance)*.015));pinchDistance=d}},{passive:true});
  addEventListener('resize',resize);
  document.querySelectorAll('.mode-btn').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
  document.getElementById('enterButton').onclick=()=>document.getElementById('introOverlay').classList.add('hidden');
  document.getElementById('helpButton').onclick=()=>document.getElementById('helpOverlay').classList.remove('hidden');
  document.getElementById('closeHelp').onclick=()=>document.getElementById('helpOverlay').classList.add('hidden');
  document.getElementById('resetView').onclick=resetView;
  document.getElementById('playButton').onclick=togglePlay;
  document.getElementById('prevButton').onclick=()=>setStep(Math.round(stepValue-1+30)%30);
  document.getElementById('nextButton').onclick=()=>setStep(Math.round(stepValue+1)%30);
  document.getElementById('autoRotateButton').onclick=()=>{autoRotate=!autoRotate;document.getElementById('autoRotateButton').classList.toggle('active',autoRotate)};
  document.getElementById('stepSlider').oninput=e=>{playing=false;updatePlayButton();setStep(parseFloat(e.target.value))};
  addEventListener('keydown',e=>{
    if(['1','2','3','4','5'].includes(e.key))setMode(['roots','coxeter','fixed','spectrum','physics'][+e.key-1]);
    if(e.key.toLowerCase()==='r')resetView();if(e.code==='Space'){e.preventDefault();togglePlay()}if(e.key==='Escape')document.getElementById('helpOverlay').classList.add('hidden');
  });
}
function resetView(){camera.position.set(0,0,currentMode==='fixed'?10.5:8.4);world.rotation.set(.22,-.38,.08);selectedRoot=-1;selectionMesh.visible=false;updateSelectionPanel()}
function togglePlay(){if(currentMode!=='coxeter')setMode('coxeter');playing=!playing;updatePlayButton()}
function updatePlayButton(){const b=document.getElementById('playButton');b.textContent=playing?'Pause':'Play';b.classList.toggle('active',playing)}
function setStep(v){stepValue=((v%30)+30)%30;document.getElementById('stepSlider').value=stepValue;document.getElementById('stepOutput').value=Math.floor(stepValue).toString().padStart(2,'0');updateCoxeterPositions()}
function updateCoxeterPositions(){
  if(!rootPoints)return;const a=Math.floor(stepValue),t=stepValue-a,b=(a+1)%30,pts=[];
  roots.forEach(r=>{const pa=project(matVec(Cp[a],r)),pb=project(matVec(Cp[b],r));pts.push(pa.map((x,i)=>x+(pb[i]-x)*t))});
  setPositions(rootPoints,pts);setPositions(rootHalo,pts);
  if(selectedRoot>=0){selectionMesh.position.fromArray(pts[selectedRoot]);updateNeighborLines(pts)}
}
function updateNeighborLines(current=projectedRoots){
  if(selectedRoot<0){neighborLines.geometry.setAttribute('position',new THREE.Float32BufferAttribute([],3));return}
  const r=roots[selectedRoot],arr=[];roots.forEach((s,i)=>{if(i!==selectedRoot && Math.abs(dot(r,s)-1)<1e-7)arr.push(...current[selectedRoot],...current[i])});
  neighborLines.geometry.setAttribute('position',new THREE.Float32BufferAttribute(arr,3));neighborLines.geometry.computeBoundingSphere();
}
function currentRootPositions(){
  const a=rootPoints.geometry.attributes.position;return roots.map((_,i)=>[a.getX(i),a.getY(i),a.getZ(i)]);
}
function selectAt(x,y){
  const rect=renderer.domElement.getBoundingClientRect();pointer.x=((x-rect.left)/rect.width)*2-1;pointer.y=-((y-rect.top)/rect.height)*2+1;raycaster.setFromCamera(pointer,camera);
  const hits=raycaster.intersectObject(rootPoints);if(!hits.length)return;selectedRoot=hits[0].index;const positions=currentRootPositions();selectionMesh.visible=true;selectionMesh.position.fromArray(positions[selectedRoot]);updateNeighborLines(positions);updateSelectionPanel();
}
function updateSelectionPanel(){
  const ids=['metricNorm','metricOrbit','metricPhase','metricInner','rootVector','selectionId'];
  if(selectedRoot<0){document.getElementById(ids[0]).textContent='—';document.getElementById(ids[1]).textContent='—';document.getElementById(ids[2]).textContent='—';document.getElementById(ids[3]).textContent='—';document.getElementById(ids[4]).textContent='Select one of the 240 points.';document.getElementById(ids[5]).textContent='none';return}
  const r=roots[selectedRoot];document.getElementById('metricNorm').textContent=dot(r,r).toFixed(0);document.getElementById('metricOrbit').textContent=(orbitOf[selectedRoot]+1)+' / 8';document.getElementById('metricPhase').textContent=phaseOf[selectedRoot]+' / 29';document.getElementById('metricInner').textContent='56 neighbors';document.getElementById('rootVector').textContent='('+r.map(x=>Number.isInteger(x)?x:(x<0?'−½':'½')).join(', ')+')';document.getElementById('selectionId').textContent='root '+String(selectedRoot+1).padStart(3,'0');
}
function hideAll(){
  rootPoints.visible=rootHalo.visible=orbitLines.visible=neighborLines.visible=selectionMesh.visible=false;Object.values(fixedGroups).forEach(x=>x.group.visible=false);spectralGroups.forEach(x=>x.obj.visible=false);document.querySelectorAll('.scene-label').forEach(x=>x.classList.remove('visible'));document.getElementById('physicsCards').classList.remove('visible');
}
function setMode(mode){
  currentMode=mode;playing=false;updatePlayButton();hideAll();document.querySelectorAll('.mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
  const d=modeData[mode];document.getElementById('modeEyebrow').textContent=d.eyebrow;document.getElementById('modeTitle').innerHTML=d.title;document.getElementById('modeCopy').textContent=d.copy;document.getElementById('modeFormula').textContent=d.formula;document.getElementById('modeStatus').textContent=d.status;
  document.getElementById('controls').style.display=(mode==='coxeter'||mode==='roots'||mode==='physics')?'flex':'none';
  if(mode==='roots'){rootPoints.visible=rootHalo.visible=orbitLines.visible=true;neighborLines.visible=selectedRoot>=0;selectionMesh.visible=selectedRoot>=0;setStep(0);camera.position.z=8.4;}
  if(mode==='coxeter'){rootPoints.visible=rootHalo.visible=orbitLines.visible=true;neighborLines.visible=selectedRoot>=0;selectionMesh.visible=selectedRoot>=0;camera.position.z=8.4;}
  if(mode==='fixed'){Object.values(fixedGroups).forEach(x=>x.group.visible=true);['label2','label3','label5'].forEach(id=>document.getElementById(id).classList.add('visible'));camera.position.z=10.5;}
  if(mode==='spectrum'){spectralGroups.forEach(x=>x.obj.visible=true);camera.position.z=11.3;}
  if(mode==='physics'){rootPoints.visible=rootHalo.visible=true;document.getElementById('physicsCards').classList.add('visible');camera.position.z=8.8;}
  updateSelectionPanel();updateLabels();
}
function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);updateLabels()}
function projectScreen(v){const p=v.clone().applyMatrix4(world.matrixWorld).project(camera);return{x:(p.x*.5+.5)*innerWidth,y:(-.5*p.y+.5)*innerHeight,visible:p.z<1}}
function updateLabels(){if(!camera||currentMode!=='fixed')return;world.updateMatrixWorld(true);[[2,'label2'],[3,'label3'],[5,'label5']].forEach(([p,id])=>{const q=projectScreen(fixedGroups[p].center);const el=document.getElementById(id);el.style.left=q.x+'px';el.style.top=(q.y-100)+'px'})}
function animate(now=performance.now()){
  requestAnimationFrame(animate);const dt=Math.min(.05,(now-lastTime)/1000);lastTime=now;
  if(playing){stepValue=(stepValue+dt*2.1)%30;setStep(stepValue)}
  if(autoRotate&&!dragging)world.rotation.y+=dt*(currentMode==='fixed'?.075:.11);
  if(stars)stars.rotation.y-=dt*.006;
  if(currentMode==='spectrum')spectralGroups.forEach((s,i)=>{s.obj.rotation.y+=dt*(.035+i*.008)*(i%2?1:-1);s.obj.rotation.x=Math.sin(now*.00018+i)*.08});
  if(currentMode==='fixed'){Object.values(fixedGroups).forEach((s,i)=>{s.core.material.opacity=.78+.15*Math.sin(now*.0014+i*1.8)});updateLabels()}
  if(rootHalo&&(currentMode==='roots'||currentMode==='coxeter'||currentMode==='physics'))rootHalo.material.opacity=.11+.045*Math.sin(now*.0013);
  renderer.render(scene,camera);
}
init();
})();
