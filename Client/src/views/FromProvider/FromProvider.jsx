import { useForm } from "react-hook-form";


function FromProvider() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return <div>
   <h2>Formulario nuevo profesional</h2>
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Nombre y apellido</label>
      <input type="text"/>
    </div>
    <div>
      <label>Email</label>
      <input type="email"/>
    </div>
    <div>
      <label>Foto de perfil</label>
      <input type="file"/>
    </div>
    <div>
      <label>Genero</label>
      <input type="text"/>
    </div>
    <div>
      <label>Años de experiencia</label>
      <input type="number"/>
    </div>
    <div>
      <label>Descripcion</label>
      <input type="text"/>
    </div>
   </form>
    
    </div>;
}

export default FromProvider;
