import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./index.css";

const Form = () => {

  return (
    <>
      <p>Página de Contato</p>
      <div>
        <form encType="multipart/form-data">
          <label>Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Insira seu nome"
            required
          />
          <label>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Insira seu e-mail"
            required
          />
          <label>Telefone</label>
          <InputMask
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Insira seu número de telefone"
            mask="(99) 99999-9999"
            required
          />
          <label>Mensagem</label>
          <textarea 
          id="message" 
          name="message"
          required
          ></textarea>
          <label class="custom-input" for="attachedFile">
            Anexar arquivo
          </label>
          <input
          type="file"
          id="attachedFile"
          name="attachedFile"
          required
          />
          <br />
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
}

export default Form;
