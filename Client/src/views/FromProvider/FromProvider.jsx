import { useForm } from "react-hook-form";

function FromProvider() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "Nombre y apellido",
      email: "email",
      image: "Imagen Url", //chequear
      description: "Agregue una descripcion",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Formulario nuevo profesional</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre y apellido</label>
          <input
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>
        <div>
          <label>Foto de perfil</label>
          <input
            type="url"
            {...register("image", {
              required: true,
            })}
          />
          {errors.image?.type === "required" && (
            <p>El campo imagen es requerido</p>
          )}
        </div>
        <div>
          <label>Genero</label>
          <input
            type="radio"
            {...register("genre", {
              required: true,
            })}
          />
          {errors.genero?.type === "required" && (
            <p>El campo genero es requerido</p>
          )}
        </div>
        <div>
          <label>Años de experiencia</label>
          <input
            type="number"
            {...register("years_exp", {
              required: true,
            })}
          />
          {errors.number?.type === "required" && (
            <p>El campo años de experiencia es requerido</p>
          )}
        </div>
        <div>
          <label>Descripcion</label>
          <input
            type="text"
            {...register("description", {
              required: true,
            })}
          />
          {errors.description?.type === "required" && (
            <p>El campo descripcion es requerido</p>
          )}
        </div>
        <div>
          <div>
            <label>Categorías</label>
            <div>
              <input
                type="checkbox"
                id="categoria1"
                value="1"
                {...register("categories", {
                  validate: (value) => value.length > 0,
                })}
              />
              <label htmlFor="categoria1">Categoría 1</label>
            </div>
            {errors.categories && errors.categories.type === "validate" && (
              <p>Debes seleccionar al menos una categoría</p>
            )}
          </div>
        </div>
        <div>
          <label>Ocupacion</label>

          <div>
            <input
              type="checkbox"
              id="ocupation1"
              value="1"
              {...register("ocupations", {
                validate: (value) => value.length > 0,
              })}
            />
            <label htmlFor="ocupation1">Ocupacion 1</label>
          </div>
          {errors.ocupations && errors.ocupations.type === "validate" && (
            <p>Debes seleccionar al menos una categoría</p>
          )}
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default FromProvider;
