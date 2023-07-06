import './DetailsSupplier.css'
import SupplierGallery from '../../components/SupplierGallery/SupplierGallery'

export default function DetailsSupplier () {
  return (
    <section>
      <div className='containerDetailsHeader'>
        <div className='containerImage'>
          <img src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_640.jpg" loading='lazy' />
        </div>
        <div className='detailsContent'>
          <div className='actions'>
            <p className='name'>Mariano Aquino</p>
            <button className='buttonAction'>Solicitar servicio</button>
            <button className='buttonAction'>Enviar mensaje</button>
          </div>
          <div className='metrics'>
            <p>⭐⭐⭐☆☆</p>
            <p>20 Valoraciones</p>
            <p>25 Servicios completados</p>
          </div>
          <div className='description'>
            <p>Servicio de cerrajeria a domicilio 24hs aperturas, cambios de combinacion, copias de llaves, reparacion de cerraduras, venta y colocacion de cerraduras nuevas.</p>
          </div>
          <div className='moreDetails'>
            <p><span className="material-symbols-outlined">mindfulness</span>Electricista - Plomero - Pintor</p>
            <p><span className="material-symbols-outlined">hourglass_bottom</span>7 Años de experiencia</p>
            <p><span className="material-symbols-outlined">location_on</span>Capital Federal, Argentina</p>
            <p><span className="material-symbols-outlined">patient_list</span>aquino.mariano@gmail.com</p>
            <p><span className="material-symbols-outlined">man</span>Masculino</p>
          </div>
        </div>
      </div>
      <SupplierGallery />
    </section>
  )
}