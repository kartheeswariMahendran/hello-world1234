myApp.factory('formArrivalValidation',

   function () {
       return {
           validateInfoField: function () {
               var isOk = true;

               if (status == 3) {
                   if (infoField == undefined) {
                       isOk = false;
                   } else {
                       if (!infoField.length)
                           isOk = false;
                   }
               }

               return isOk;
           },

       };
   });