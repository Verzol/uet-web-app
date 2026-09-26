describe('Login', () => {
	it('Chưa đăng nhập thì quay về login', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/frontend.htm')
		cy.url().should('include', '/login.htm')
	})

	it('Thông báo lỗi trên trang login phải ẩn theo mặc định', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/login.htm')
		cy.get("div.err-submit").should("have.class", "nodisplay")
	})

	it('Đăng nhập với tên đăng nhập và mật khẩu sai', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/login.htm')
		cy.get("input.tsd").type("a")
		cy.get("input.mk").type("12-34-5")
		cy.get("button.submit").click();
		cy.get("div.err-submit").should("not.have.class", "nodisplay")
	})

	it('Đăng nhập với tên đăng nhập và mật khẩu đúng', () => {
		cy.visit('https://itest.com.vn/lects/webappdev/authorization/login.htm')
		cy.get("input.tsd").type("a")
		cy.get("input.mk").type("a123456#B")
		cy.get("button.submit").click();
		cy.url().should('include', '/frontend.htm')
	})
})
