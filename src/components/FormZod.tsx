import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z
    .string({ required_error: "Nome obbligatorio" })
    .min(3, { message: "Il nome deve essere almeno 3 caratteri" }),
  eta: z
    .number({ invalid_type_error: "Scrivi un numero" })
    .min(18, { message: "Solo maggiorenni" }),
});

type FormData = z.infer<typeof schema>;

const FormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  // console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome
        </label>
        <input
          {...register("nome")}
          id="nome"
          type="text"
          className="form-control"
        />
        {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="eta" className="form-label">
          Età
        </label>
        <input
          {...register("eta", { valueAsNumber: true })}
          id="eta"
          type="text"
          className="form-control"
        />
        {errors.eta && <p className="text-danger">{errors.eta.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isValid}>
        Salva
      </button>
    </form>
  );
};

export default FormZod;
