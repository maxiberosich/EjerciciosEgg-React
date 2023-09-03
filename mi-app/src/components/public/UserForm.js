import React, { useEffect } from "react";
import { useUserForm } from "../../hooks/Custom.hooks";
import { useState } from "react";

export const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) =>{
    setPasswordConfirmation(e.target.value);
  }

  useEffect(()=>{

    const {password} = form;//EL PASSWORD HACE REFERENCIA AL DEL NAME DE CLAVE
    setAreEquals(password === passwordConfirmation)

  },[passwordConfirmation])

  const handleSubmit = (evento) =>{
    evento.preventDefault();
  }

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
              name="email"
              onChange={handleChanges}
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input 
            type="text" className="form-control" placeholder="Clave"
            name="password"
            onChange={handleChanges}
            />
            
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir clave
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />

            {!areEquals && (
            <div className="form-text list-group-item list-group-item-danger">
              Las Claves no son iguales
            </div>
            )}
          </div>

          <hr className="my-4" />

          <button 
          disabled={!areEquals}
          className="m-100 btn btn-primary btn-lg" type="submit"
          onClick={handleSubmit}
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
