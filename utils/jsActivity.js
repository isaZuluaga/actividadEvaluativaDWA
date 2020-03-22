// Galeria Java Script
export default function addGalleryContainer(){
  var galleryContainer = document.createElement('div');
  galleryContainer.id = 'myGalleryContainer';
   //document.getElementById('app').appendChild(galleryContainer);
   return galleryContainer
}
export function addGalleryElement(){
  for(let i = 1; i<=10; i++){
    var galleryElement = document.createElement('div');
    galleryElement.id = 'myGalleryElement'+ i;
    galleryElement.className = 'myGalleryElement';
    console.log(galleryElement.id);
    document.getElementById('myGalleryContainer').appendChild(galleryElement);
  }
}

export let refresh = new Promise((resolve,reject)=>{
         window.onload = function() {
          setTimeout(function () {
          resolve ( location.reload() );
          
        }, 5000);
        
      }

})

