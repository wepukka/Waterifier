describe("Basic shop functionalities", async () => {
  it("passes", () => {
    // Click login nav
    // Type username
    // Type password
    // Click login button
    // Rate items by rating
    // Add all items to cart,
    // In cart, increment and decrement item untill deleted //

    cy.visit("http://localhost:5173/");
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // Login
    cy.get("#nav-login").click();
    cy.get("#username").type("adminuser");
    cy.get("#password").type("adminuseradminuser");

    cy.get("button").contains("Login").click();

    // Sort items by Rating
    cy.get("#rating-desc").click();

    // Add all products to cart
    let pageNumber = 1;
    cy.get(".product-list-page-button").each(() => {
      cy.get(`.product-list-page-button:nth-child(${pageNumber})`).click();
      cy.get(".product-card-button").click({ multiple: true });
      pageNumber++;
    });

    // Go to cart, click to increase & decrease item quantity
    cy.get("#nav-cart").click();
    cy.get(".cart-container").get("div").should("have.class", "cart-products");
    cy.get(".cart-product:first-child .cart-product-quantity").contains(1);
    cy.get(".cart-product:first-child button:last-child").click();
    cy.get(".cart-product:first-child .cart-product-quantity").contains(2);
    cy.get(".cart-product:first-child button:first-child").click();
    cy.get(".cart-product:first-child .cart-product-quantity").contains(1);
    cy.get(".cart-product:first-child button:first-child").click();

    // Clear cart
    cy.get(".cart-clear-icon-wrapper").click();
    // Expect empty cart
    cy.get(".cart-container").get("div").should("have.class", "empty-cart");
    cy.get("#nav-profile").trigger("mouseover");

    cy.get("#nav-profile-logout").click({ force: true });
  });
});
