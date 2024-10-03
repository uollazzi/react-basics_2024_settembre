import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  nome: string;
  eta: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  // console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  const formNome = register("nome", {
    required: { value: true, message: "Nome richiesto" },
    minLength: { value: 3, message: "Nome troppo corto" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome
        </label>
        <input {...formNome} id="nome" type="text" className="form-control" />
        {errors.nome?.type == "required" && (
          <p className="text-danger">{errors.nome.message}</p>
        )}
        {errors.nome?.type == "minLength" && (
          <p className="text-danger">Nome troppo corto</p>
        )}
        {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="eta" className="form-label">
          Età
        </label>
        <input
          {...register("eta", {
            valueAsNumber: true,
            required: true,
          })}
          id="eta"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isValid}>
        Salva
      </button>
    </form>
  );
};

export default Form;
