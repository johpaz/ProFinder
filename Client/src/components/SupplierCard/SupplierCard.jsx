import './SupplierCard.css'

export default function SupplierCard () {
  return (
    <section>
      <div className='containerCard'>
        <div className='headerCard'>
        <div className='containerImage'>
          <img src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_640.jpg" loading='lazy'/>
        </div>
          <p className='name'>Mariano Aquino</p>
          <p>Capital Federal</p>
          <p>⭐⭐⭐☆☆</p>
          <p>Electricista - Plomero - Pintor</p>
        </div>
        <div className='contentCard'>
          <p>Servicio de cerrajeria a domicilio 24hs aperturas, cambios de combinacion, copias de llaves, reparacion de cerraduras, venta y colocacion de cerraduras nuevas.</p>
          <button className='buttonDetails'>Ver perfil y comentarios</button>
        </div>
      </div>
    </section>
  )
}