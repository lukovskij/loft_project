import { Model } from './model';


Model.login(250459012149247)
    .then(
        function(response) {
            return new Promise(function(res, rej) {

                FB.api("/221085174613271/photos", 'get', function(response) {

                    if (!response || response.error) {

                        rej(new Error('i con not get info'))

                    } else {

                        res(response);

                    }


                })
            })
        })
    .then(function(response) {

        let arratImages = [];

arratImages  = [].map.call(response, (item) => {

	return new Promise(function(res, rej)){

            FB.api('/' + item.id, 'get', function(response) {

                if (!response || response.error) {

                    return new Error('i con not get info')

                } else {

                    arratImages.push(response);
                    console.log(arratImages);

                }
}
            })
        })
    })