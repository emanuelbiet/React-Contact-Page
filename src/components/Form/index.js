import React, { useState } from "react";
import InputMask from "react-input-mask";

import api from "../../services/api";

import "./index.css";
import logoImg from "../../assets/mail.png";

import { Error, Success } from "./styles";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [attachedFile, setAttachedFile] = useState("");
  const [inputError, setInputError] = useState("");
  const [inputSuccess, setInputSuccess] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    await api
      .post("/store", {
        name,
        email,
        telephone,
        message,
        attachedFile,
      })
      .then(
        (response) => {
          console.log(response.data);
          setInputError("");
          setInputSuccess(true);
        },
        (error) => {
          setInputError(error.message);
        }
      );
  };

  return (
    <>
      <div className="centeredDiv">
        <img src={logoImg} alt="Mail"></img>
      </div>

      <div>
        <form onSubmit={onFormSubmit} encType="multipart/form-data">
          {inputError && (
            <Error>
              <strong>{inputError}</strong>
            </Error>
          )}

          {inputSuccess && (
            <Success>
              <strong>Seus dados foram enviados com sucesso!</strong>
            </Success>
          )}

          <label>Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Insira seu nome"
            data-testid="name"
            required
          />
          <label>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Insira seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email"
            required
          />
          <label>Telefone</label>
          <InputMask
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Insira seu número de telefone"
            mask="(99) 99999-9999"
            onChange={(e) => setTelephone(e.target.value)}
            data-testid="telephone"
            required
          />
          <label>Mensagem</label>
          <textarea
            id="message"
            name="message"
            placeholder="Insira sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            data-testid="message"
            required
          ></textarea>
          <label className="custom-input" htmlFor="attachedFile">
            Anexar arquivo
          </label>
          <input
            type="file"
            id="attachedFile"
            name="attachedFile"
            onChange={(e) =>
              setAttachedFile(e.target.files || e.dataTransfer.files)
            }
            data-testid="attachedFile"
            required
          />
          <div className="centeredDiv">
            <input type="submit" data-testid="submitButton" value="Enviar" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
