import { testData } from "./testData";

// DIVIDER
Cypress.Commands.add("divider", (text) => {
  cy.log(`------------${text.toUpperCase()}------------`);
});

// Login //
Cypress.Commands.add("login", (username, password) => {
  /*     Getting tags by ID only is not good practice due to possible changes
    but works for now. */
  cy.get("#nav-login").click();
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("button").contains("Login").click();

  // Redirect to shop
  cy.url().should("include", "/shop");
});

// Logout
Cypress.Commands.add("logout", () => {
  cy.get("#nav-profile").trigger("mouseover");
  cy.get("#nav-profile-logout").click({ force: true });

  // AccessToken should be removed //
  cy.getCookies().should("have.length", 0);
});

// Check tokens //
Cypress.Commands.add("checkToken", (length, index, name) => {
  cy.getCookies()
    .should("have.length", length)
    .then((cookies) => {
      expect(cookies[index]).to.have.property("name", name);
    });
});

Cypress.Commands.add("addCartTestData", () => {
  window.localStorage.setItem("cart", JSON.stringify(testData));
});
//
