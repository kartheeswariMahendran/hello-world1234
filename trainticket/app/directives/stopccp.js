app.directive('stopccp', function(){
    return {
        scope: {},
        link:function(scope,element,ctrl){
            element.on('cut copy paste', function (event) {

              event.preventDefault();
              alert("no copy paste option enable");
            });
            // element.on('mouseup', function (event) {
            //   event.preventDefault();
            //   alert("clicked");
            // });
        }
    };
});