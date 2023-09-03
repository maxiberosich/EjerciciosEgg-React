import React from "react";
import { useUserForm } from "../../hooks/Custom.hooks";

export const UserForm = () => {

  const {form,setForm,handleChanges} = useUserForm();

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>

      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input type="text" className="form-control" placeholder="Clave" />
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir clave
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Repetir clave"
            />
          </div>

          <div className="form-text list-group-item-danger">
            Las Claves no son iguales
          </div>

          <hr className="my-4" />

          <button className="m-100 btn btn-primary btn-lg" type="submit">
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
