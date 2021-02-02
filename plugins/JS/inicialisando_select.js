document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('select');
    var intances = M.FormSelect.init(elems, options);
});

$(document).ready(function(){
    $('select').FormSelect();
});