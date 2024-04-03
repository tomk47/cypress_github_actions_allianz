describe("Cypress GitHub actions demo", () => {
  it("Open pmtool and check login text", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3.form-title").should("have.text", "Login");
  });
});
