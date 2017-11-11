import { Model } from "./model";
import { View } from './view';

export const Controller = {

    _checkPhotosArray: JSON.parse(localStorage.photos) || [],
    _allPhotos: [],

    getPhotos: function() {

        Model.login('250459012149247').then(Model.photos).then(function(resp) {

            resp.data.forEach(item => {

                Controller._allPhotos.push(item);

            });

            View.renderPhotos(resp.data, allPhotos, function() {

                if (Controller._checkPhotosArray.length !== 0) {

                    Controller._checkPhotosArray.forEach(item => {
   
                       Controller._toggleItem(item.id, allPhotos);

                    })

                }

            })

            let arrayChoose = Controller._checkPhotosArray.slice();
            View.renderPhotos(arrayChoose, choosePhotos)
        });
    },

    checkPhoto: function(e) {

        let currItem = e.target.parentNode,
            idItem = currItem.dataset.id;

        let chekItems = Controller._allPhotos.filter(item => {

            if (item.id == idItem) {
                Controller._checkPhotosArray.push(item);
                return item;
            }

        });

        //hide element
        currItem.setAttribute('style', 'display:none');

        View.renderPhotos(chekItems, choosePhotos);

        console.log(Controller._checkPhotosArray);

    },

    removeCheckItem: function(e) {

        let currItem = e.target.parentNode,
            idItem = currItem.dataset.id;

        let chekItems = Controller._checkPhotosArray.filter(item => {

            if (idItem == item.id) {
                return item;
            }

        });

        let currentArr = Controller._checkPhotosArray.filter( item => {

        	if(item.id != idItem){

        		return item;

        	}

        });

        Controller._checkPhotosArray = currentArr.slice();
      
        currItem.parentNode.removeChild(currItem);

        this._toggleItem(idItem, allPhotos);

    },

    _toggleItem: function(id, parent) {

        if (parent.querySelector(`[data-id="${id}"]`).style.display == 'none') {

            parent.querySelector(`[data-id="${id}"]`).setAttribute('style', '');

        } else {

            parent.querySelector(`[data-id="${id}"]`).style.display = 'none';

        }

    },

    savePhotos: function() {

        localStorage.setItem('photos', JSON.stringify(Controller._checkPhotosArray));


    },


}