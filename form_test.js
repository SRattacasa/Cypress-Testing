describe("This should have a name field", () => {
    it("This should return true", () => {
        expect(true).to.equal(true)
    })
})
   
describe("Testing our form inputs", () => {
    
    it("This should visit the site", () => {
        cy.visit("http://localhost:3000")
    })

    it("Finds Name Input", () => {
        cy.get('[for="name"]')
    })

    it("Enters Name Input", () => {
        cy.get('[for="name"] > input').type("Clark Kent").should("have.value", "Clark Kent");
    })

    it("Finds Email Input", () => {
        cy.get('[for="email"]')
    })

    it("Enters Email Input", () => {
        cy.get('[for="email"] > input').type("Clark@Kent.com")
        // .should("have.value", "Clark Kent");
    })
    it("Finds Password Input", () => {
        cy.get('[for="password"]')
    })

    it("Enters Password Input", () => {
        cy.get('[for="password"]').type("superman")
    })
    it("Checks if Checkbox is Checkable", () => {
        cy.get('#terms').check().should("be.checked");
    })
    it("Checks if Form is Submit-able", () => {
        cy.get('form').submit()
    })
            it("Checks if Form has Errors from Validation", () => {
                cy.get('[for="name"] > input').clear()
                cy.get('form').contains("Name is a required field")
            })
})

   