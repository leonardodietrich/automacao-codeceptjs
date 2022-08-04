Feature('login');

const {I, login_page} = inject()

BeforeSuite(() => {
    console.log('Before Suite')
}),

Before(() => {
    console.log('Before Scenario')
}),

AfterSuite(() => {
    console.log('After Suite')
}),

After(() => {
    console.log('After Scenario')
}),

Scenario('Login with success', (home_page) => {

    login_page.doLogin('teste@teste.com','123456')
    home_page.checkLoginSuccess()
    
});

Scenario('Login with error', () => {

    login_page.doLogin('xteste@teste.com','123456')
    login_page.checkLoginError()
    
});
