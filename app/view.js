export const View = {

    renderPhotos: function(objArr, parent) {

        let self = this;

        let el = objArr.shift();
        if (el) {
            self._getSinglePoto(el.picture).then((url) => {

             
                let item = document.createElement('li');
                item.className = "friend-item";


                item.innerHTML = `<img src="${url}" class="img"/> <div class="info">${el.created_time}</div><button class="btn btn_check"></button>`;

                console.log(item);

                parent.appendChild(item);

                self.renderPhotos(objArr, parent);

            })
        }
    },

    _getSinglePoto: function(url) {

        return new Promise((res, rej) => {

            let img = new Image();

            img.onload = function() {

                res(url)

            }

            img.onerror = function() {

                rej(new Error(`eror in url ${url}`));

            }

            img.src = url

        })

    },

    renderChoseItem : function( parent, photo ) {

    	parent.appendChild(photo)

    },

    removeItem : function( parent, item ){

    	parent.removeChild(item);

    }

}