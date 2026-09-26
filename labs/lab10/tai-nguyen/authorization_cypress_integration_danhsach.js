describe('Danh sách sinh viên', () => {
	it('Đăng nhập với người dùng a', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/login.htm')
		cy.get("input.tsd").type("a")
		cy.get("input.mk").type("a123456#B")
		cy.get("button.submit").click();

		cy.get("div.panel-noaccess").should('have.class', 'nodisplay')
		cy.get("div.panel-list").should('not.have.class', 'nodisplay')
		cy.get("div.panel-edit").should('have.class', 'nodisplay')	

		cy.get("button.addnew").should('not.have.class', 'nodisplay')
		cy.get("a.update").should('not.have.class', 'isDisabled')
		cy.get("a.delete").should('not.have.class', 'isDisabled')
	})

	it('Đăng nhập với người dùng b', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/login.htm')
		cy.get("input.tsd").type("b")
		cy.get("input.mk").type("a123456#B")
		cy.get("button.submit").click();

		cy.get("div.panel-noaccess").should('have.class', 'nodisplay')
		cy.get("div.panel-list").should('not.have.class', 'nodisplay')
		cy.get("div.panel-edit").should('have.class', 'nodisplay')

		cy.get("button.addnew").should('have.attr', 'disabled', "disabled")
		cy.get("a.update").should('have.class', 'isDisabled')
		cy.get("a.delete").should('have.class', 'isDisabled')
	})
	
	it('Đăng nhập với người dùng c', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/login.htm')
		cy.get("input.tsd").type("c")
		cy.get("input.mk").type("a123456#B")
		cy.get("button.submit").click();

		cy.get("div.panel-noaccess").should('not.have.class', 'nodisplay')
		cy.get("div.panel-list").should('have.class', 'nodisplay')
		cy.get("div.panel-edit").should('have.class', 'nodisplay')	

		cy.request('GET', 'https://itest.com.vn/lects/webappdev/authorization/index.php/students').as("d")
		cy.get("@d").should(resp => {
			expect(resp.body.data).to.eq('ACCESS-DENIED')
		})

		
	})


	it('Đăng xuất', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/login.htm')
		cy.get("input.tsd").type("a")
		cy.get("input.mk").type("a123456#B")
		cy.get("button.submit").click();

		cy.get("a.logout").click();
			
		cy.url().should("include", "/login.htm")
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/frontend.htm')
		cy.url().should("include", "/login.htm")

		cy.request('GET', 'https://itest.com.vn/lects/webappdev/authorization/index.php/students').as("d")
		cy.get("@d").should(resp => {
			expect(resp.body.data).to.eq('ACCESS-DENIED')
		})
	})
})
