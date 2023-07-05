export default function SupplierGallery () {
  return (
    <div>
    <div className="overlay">
      <div className="slideshow">
        <span className="btnCerrar">&times;</span>
        <div className="boton atras">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="boton adelante">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
        <img id="imgSlideshow" />
      </div>
    </div>
      <h3 className="encabezado">Trabajos realizados</h3>
      <section className="galeria">
        <div className="columna">
          <img src="https://www.camarounds.com/wp-content/uploads/2020/08/Plomeros-24-horas-Trabajos-urgentes-Camarounds.jpg" data-img-mostrar="0"/>
          <img src="https://www.plomerelectric.com/fotos-galeria/2019-07-22-09-37-et50-Vistade-una-Instalacion-de-tuberias-desagues-y-potables-trabajo-de-plomeria.jpeg" data-img-mostrar="1"/>
          <img src="https://irp.cdn-website.com/86e72213/MOBILE/jpg/586.jpg" data-img-mostrar="2"/>
        </div>
        <div className="columna">
          <img src="https://irp.cdn-website.com/f259aba7/MOBILE/jpg/720.jpg" data-img-mostrar="3"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Z4sPKBjpi0wysZbwEqEXSJjbdkxHNaRdvsX0ngFdFmcsIFKGTVkcdgwHl1DMRu6lnmM&usqp=CAU" data-img-mostrar="4"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTL9Kwr4Oxd3qO6R1yRm30paXH0Wdw0wPNsZhWQGKXGH_AkJPQyDbh9HtmimSMX-Gk4p4&usqp=CAU" data-img-mostrar="5"/>
        </div>
        <div className="columna">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcY94-gcEtfo8X96Xio7-ESZQ78-r4opcFMcgPTVUnOEpzO6mfSGCNjIQvdXCdrqrrraw&usqp=CAU" data-img-mostrar="6"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6vlvPSy_19AizieeaasMK51R9cDXkwPV_t3rlQQnw5QS5ikQ3V3BNeyvsXyaYEQ3iZ8&usqp=CAU" data-img-mostrar="7"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85BaVO7asnlzOSvE_4TcHMnLzRoXa3K9Fr7fcD0vrcZqb1W7y6WO0ye_JBAVfD0OyR0M&usqp=CAU" data-img-mostrar="8"/>
        </div>
        <div className="columna">
          <img src="https://irp.cdn-website.com/f259aba7/MOBILE/jpg/720.jpg" data-img-mostrar="9"/>
          <img src="https://mx.habcdn.com/photos/project/medium/trabajos-de-plomeria-418677.jpg" data-img-mostrar="10"/>
          <img src="https://i.ytimg.com/vi/U8-VGYEc3T0/maxresdefault.jpg" data-img-mostrar="11"/>
        </div>
      </section>
    </div>
  )
}