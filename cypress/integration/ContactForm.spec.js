describe("Testing Contact Form", () => {
  it("should send correct information to api and verify inputSuccess message", () => {
    cy.visit("/");
    cy.get('#name').type('Emanuel');
    cy.get('#email').type('erbiet@outlook.com');
    cy.get('#telephone').type('11958084033');
    cy.get('#message').type('Olá, estamos executando um teste de integração com a ferramenta Cypress que deveria dar certo');
    cy.get('#attachedFile').attachFile('../fixtures/documents/resume.pdf', {
      force: true
    });
    cy.get('#submitButton').click();
    cy.get('#inputSuccess').contains(/Seus dados foram enviados com sucesso!/);
  });

  it("should send wrong information to api and verify inputError message", () => {
    cy.visit("/");
    cy.get('#name').type('Emanuel');
    cy.get('#email').type('erbiet@outlook.com');
    cy.get('#telephone').type('11958084033');
    cy.get('#message').type('Olá, estamos executando um teste de integração com a ferramenta Cypress que deveria dar errado');
    cy.get('#attachedFile').attachFile('../fixtures/images/emanuel.png', {
      force: true
    });
    cy.get('#submitButton').click();
    cy.get('#inputError').contains(/Ops! Algum erro aconteceu com o envio dos seus dados. Verifique-os e tente novamente!/);
  });
});
