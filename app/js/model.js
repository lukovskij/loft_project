// window.fbAsyncInit = function() {
//     FB.init({
//         appId: '250459012149247',
//         xfbml: true,
//         version: 'v2.10'
//     });
//     FB.AppEvents.logPageView();
// };

// token 1501843681.dc6bf68.1ef2df176b954d708ac43921f837bf70
// friends list 5c91a0182d374afdaef0c8f669bf157c
// publick 772be7546fe74b64a8a6a363bddc134b
// url gets news https://api.instagram.com/v1/users/self/media/recent/?access_token=1501843681.1677ed0.3cfb942e751a42be8b9e7ee5e7f1994e

/*
var Model = {
    login: function(appId) {

        return new Promise(function(res, rej) {

            FB.init({
                appId: appId,
                xfbml: true,
                version: 'v2.10'
            });

            FB.login(function(response) {

                if (response.authResponse) {

                    FB.api('/me', function(response) {

                        res(response);

                    });

                } else {

                    rej(new Error('error after auth'))

                }

            });

        });

    },

    callApi: function(path) {

        return new Promise(function(res, rej) {

            FB.api(path, function(response) {

                if (!response || response.error) {

                    rej(new Error('i con not get info'))

                } else {

                    res(response);

                }


            })

        });

    },

    getFriends: function() {

        return this.callApi('/me/friends');

    }
}


Model.login(250459012149247).then(
    function(response){
        return new Promise(function(res, rej) {

            FB.api("/me/friendlists", function(response) {

                if (!response || response.error) {

                    rej(new Error('i con not get info'))

                } else {

                    res(response);

                }


            })
    })}).then(function(response){console.log(response);})

		*/


var Model = {
	getInfo : function(){

     return new Promise(function(res, rej){

			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1501843681.1677ed0.3cfb942e751a42be8b9e7ee5e7f1994e', true);

			xhr.send();

			if(xhr.status != 200){

				rej(new Error('i can not download json'))

			}else{

         res(xhr.response);

			}

		 })
	}
}

Model.getInfo().then(function(resp){

   console.log(resp)

})
