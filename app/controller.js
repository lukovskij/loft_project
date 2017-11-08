import { Model } from "./model";
import { View } from './view';

export const Controller = {

    getPhotos: function() {

        return Model.login('250459012149247').then(Model.photos).then(function(resp) {
        	console.log(resp);
           View.renderPhotos(resp.data, allPhotos);
        }) 
    },

    checkPhoto : function(e) {

    	let currItem = e.target;

    	let listParent = currItem.parentNode.parentNode;

    	let cloneItem = currItem.parentNode.cloneNode(true);

    	console.log(currItem.parentNode.parentNode);

    	View.renderChoseItem(cloneItem);

    	View.removeItem( listParent,  currItem.parentNode);

    }

}