(function(){
    var el = document.getElementById('txt-rotativo'), total = el.children.length, t = 1500, count = 0;
          setInterval(function(){
          for (var j = 0; j < total; j++) {
              el.children[j].removeAttribute("class");
          }
           
              el.children[count].setAttribute("class", "active");
              count++;
           
           if (count == total) {
              count = 0;
           }
     }, t);
  })();