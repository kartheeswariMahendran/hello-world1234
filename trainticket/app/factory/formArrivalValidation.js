app.factory('formArrivalValidation',function () {
    var un;
       return {
           validateInfoField: function (uname,pswd,a,b) {
               var isOk;
              console.log(uname);
              console.log(a);
               if (uname==a && pswd==b) {
                      isOk = true;
                   } else {
                isOk = false;
                   }
               return isOk;
           },
           settrainname:function(data)
           {
              
              un=data;
           },
           gettrainname:function()
           {
            return un;
           }

       };
   });