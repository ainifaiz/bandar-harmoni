const KEY='bandar-harmoni-v1';
export const fresh=()=>({version:1,progress:[0,0,0,0,0],x:875,y:675,audio:false,introDone:false});
export function load(){try{const s=JSON.parse(localStorage.getItem(KEY));if(s?.version!==1||!Array.isArray(s.progress)||s.progress.length!==5||!s.progress.every(v=>Number.isInteger(v)&&v>=0&&v<=3))return null;return {...fresh(),...s,x:Number.isFinite(s.x)?s.x:875,y:Number.isFinite(s.y)?s.y:675}}catch{return null}}
export function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));return true}catch{return false}}
export const stats=s=>({stars:s.progress.reduce((a,b)=>a+b,0),missions:s.progress.filter(v=>v===3).length,harmony:40+s.progress.filter(v=>v>=1).length*10+(s.progress.every(v=>v===3)?10:0)});
