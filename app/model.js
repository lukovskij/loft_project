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


export const Model = {
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

            }, { scope: 'email,user_photos,user_birthday,user_location' });

        });

    },

    photos: function() {
        return new Promise(function(res, rej) {

            FB.api("/221085174613271/photos", { fields: 'picture, created_time' }, function(response) {

                if (!response || response.error) {

                    rej(new Error('i con not get info'))

                } else {

                    res(response);

                }
            })
        })
    }
}