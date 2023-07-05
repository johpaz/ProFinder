import './DetailsSupplier.css'

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
            <p>Electricista - Plomero - Pintor</p>
            <p>7 Años de experiencia</p>
            <p>Capital Federal, Argentina</p>
            <p>aquino.mariano@gmail.com</p>
            <p>Masculino</p>
          </div>
        </div>
      </div>
    </section>
  )
}