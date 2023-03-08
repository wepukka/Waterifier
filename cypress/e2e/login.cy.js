const USERNAME = "adminuser";
const PASSWORD = USERNAME + USERNAME;

describe("Login & Logoff", async () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.divider("Login");
    cy.login(USERNAME, PASSWORD);

    cy.checkToken(1, 0, "accessToken"); // (length,index,name)
    cy.divider("Logout");
    cy.logout();
  });
});
