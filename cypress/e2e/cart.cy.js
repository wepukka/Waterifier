describe("test cart basic functionalities", async () => {
  it("passes", () => {
    cy.divider("add test data");
    cy.addCartTestData();

    cy.visit("http://localhost:5173/cart");
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.wait(500); // Wait page to render //

    cy.divider("test & modify cart data ");
    cy.get("#0").should("exist"); // Item with id 0 should exist

    cy.get(".cart-product:first-child .cart-product-quantity").then(
      ($productQuantity) => {
        const productQuantity = $productQuantity.text();

        cy.get(".cart-product:first-child button:last-child").click();

        cy.divider("Incremented item");
        cy.get(".cart-product:first-child .cart-product-quantity").should(
          ($btn2) => {
            expect($btn2.text()).not.to.eq(productQuantity);
          }
        );

        cy.get(".cart-product:first-child button:first-child").click();
        cy.get(".cart-product:first-child button:first-child").click();

        cy.divider("Decremented item");
        cy.get(".cart-product:first-child .cart-product-quantity").should(
          ($btn3) => {
            expect($btn3.text()).not.to.eq(productQuantity);
          }
        );
      }
    );
    cy.get(".cart-product:first-child button:first-child").click();

    cy.get("#0").should("not.exist"); // Item with id 0 should not exist

    cy.divider("clear cart");
    cy.get(".cart-clear-icon-wrapper").click();
    cy.get(".cart-container").get("div").should("have.class", "empty-cart");
  });
});
