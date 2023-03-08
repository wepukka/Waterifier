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
  const cartItems = [
    {
      id: 0,
      name: "Strong water from Sweden",
      price: "9.5",
      image: 3,
      rating: 1,
      quantity: 2,
      productDetails: {
        detail1: "Pork Loin Cutlets",
        detail2: "Pepper",
        detail3: "Veal",
        detail4: "Spice",
      },
    },
    {
      id: 1,
      name: "Mild water from Sweden",
      price: "2.75",
      image: 2,
      rating: 5,
      quantity: 2,
      productDetails: {
        detail1: "Spice",
        detail2: "Pork",
        detail3: "Pork",
      },
    },
    {
      id: 2,
      name: "Fresh water from Germany",
      price: "12.65",
      image: 7,
      rating: 5,
      quantity: 2,
      productDetails: {
        detail1: "Yoghurt",
        detail2: "Spice",
      },
    },
    {
      id: 3,
      name: "Excellent water from Netherland",
      price: "2.5",
      image: 7,
      rating: 4,
      quantity: 2,
      productDetails: {
        detail1: "Cocoa Butter",
        detail2: "Wine",
        detail3: "Crab",
      },
    },
    {
      id: 4,
      name: "Great water from Sweden",
      price: "6.55",
      image: 7,
      rating: 4,
      quantity: 2,
      productDetails: {
        detail1: "Pepper",
        detail2: "Spice",
        detail3: "Yoghurt",
        detail4: "Onions",
      },
    },
    {
      id: 5,
      name: "Fresh water from Sweden",
      price: "5.5",
      image: 12,
      rating: 3,
      quantity: 2,
      productDetails: {
        detail1: "Veal",
      },
    },
    {
      id: 6,
      name: "Tasty water from Usa",
      price: "15.90",
      image: 12,
      rating: 4,
      quantity: 1,
      productDetails: {
        detail1: "Food Colouring",
        detail2: "Flour Dark Rye",
        detail3: "Cheese",
        detail4: "Pear",
      },
    },
    {
      id: 8,
      name: "Fresh water from Mexico",
      price: "4.85",
      image: 10,
      rating: 5,
      quantity: 2,
      productDetails: {
        detail1: "Pork Loin Cutlets",
        detail2: "Cocoa Butter",
        detail3: "Pepper",
        detail4: "Onions",
      },
    },
    {
      id: 7,
      name: "Excellent water from Norway",
      price: "11.5",
      image: 12,
      rating: 2,
      quantity: 1,
      productDetails: {
        detail1: "Pork Loin Cutlets",
        detail2: "Pork Loin Cutlets",
      },
    },
    {
      id: 9,
      name: "Mild water from Denmark",
      price: "8.35",
      image: 6,
      rating: 3,
      quantity: 2,
      productDetails: {
        detail1: "Pork Loin Cutlets",
        detail2: "Juice",
        detail3: "Flour Dark Rye",
        detail4: "Ostrich - Prime Cut",
      },
    },
  ];

  window.localStorage.setItem("cart", JSON.stringify(testData));
});
//
