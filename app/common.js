import { Controller } from './controller';


Controller.getPhotos();


allPhotos.addEventListener('click', function(e) {
	
	if(e.target.className.indexOf('btn') != -1){

		Controller.checkPhoto(e);

	}

});


choosePhotos.addEventListener('click', function(e) {
	
	if(e.target.className.indexOf('btn') != -1){

		Controller.checkPhoto(e);

	}

});