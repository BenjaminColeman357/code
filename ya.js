<script type="text/javascript">
var strGET = window.location.search.replace( '?', ''); 

var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

window.location.href="http://ya.ru";
</script>
