(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".top"),d=document.querySelector(".top img");d.onload=()=>{const o=()=>{const r=c.clientWidth,i=c.clientHeight,e=d.naturalWidth,t=d.naturalHeight,n=r/i,u=e/t;n>u?(c.classList.add("fill"),c.classList.remove("contain")):(c.classList.add("contain"),c.classList.remove("fill"))};new ResizeObserver(o).observe(c)};let l=[...document.querySelector(".br").children],a=[...document.querySelector(".br_windows").children].map(o=>o.children),f=[document.querySelector(".top"),document.querySelector(".bottom")];f.forEach(o=>{o.addEventListener("click",()=>{a.forEach((s,r)=>{s[0].classList.remove("show"),l[r].classList.remove("show")})})});l.forEach((o,s)=>{o.addEventListener("click",r=>{r.stopPropagation();let i=!1;a.forEach((e,t)=>{s!=t&&e[0].classList.contains("show")&&(i=!0,e[0].classList.remove("show"),l[t].classList.remove("show"))}),i?setTimeout(()=>{a[s][0].classList.toggle("show"),l[s].classList.toggle("show")},300):(a[s][0].classList.toggle("show"),l[s].classList.toggle("show"))})});
