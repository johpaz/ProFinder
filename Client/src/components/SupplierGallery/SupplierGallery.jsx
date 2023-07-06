// Por ahora este componente esta harcodeado, utiliza el mockup de images que esta en utils, aun falta integrarlo y modificarlo para que trabaje con los datos que van a ser devueltos por el backend
import './SupplierGallery.css'
import { images } from '../../utils/mockupsImages'

export default function SupplierGallery () {
  return (
    <div className='containerGallery'>
    <div className="overlay">
      <div className="slideshow">
        <span className="btnClose">&times;</span>
        <div className="button next">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="button previous">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
        <img id="imgSlideshow" />
      </div>
    </div>
      <div className="gallery">
        <div className="column">
          <img src={images[0].url} id={images[0].id}/>
          <img src={images[1].url} id={images[1].id}/>
          <img src={images[2].url} id={images[2].id}/>
        </div>
        <div className="column">
          <img src={images[3].url} id={images[3].id}/>
          <img src={images[4].url} id={images[4].id}/>
          <img src={images[5].url} id={images[5].id}/>
        </div>
        <div className="column">
          <img src={images[6].url} id={images[6].id}/>
          <img src={images[7].url} id={images[7].id}/>
          <img src={images[8].url} id={images[8].id}/>
        </div>
        <div className="column">
          <img src={images[9].url} id={images[9].id}/>
          <img src={images[10].url} id={images[10].id}/>
          <img src={images[11].url} id={images[11].id}/>
        </div>
      </div>
    </div>
  )
}