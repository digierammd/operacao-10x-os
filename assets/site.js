(function(){
  function loadMetricool(){
    var s=document.createElement('script');
    s.src='https://tracker.metricool.com/resources/be.js';
    s.async=true;
    s.onload=function(){if(window.beTracker){window.beTracker.t({hash:'519a8de829235237f8d9b45f86730307'});}};
    document.head.appendChild(s);
  }
  if('requestIdleCallback' in window){requestIdleCallback(loadMetricool,{timeout:2500});}
  else{window.addEventListener('load',function(){setTimeout(loadMetricool,1500);},{once:true});}
})();
