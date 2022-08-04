const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    pwd: '~senha'
  },

  buttons:{
    enter: '~entrar'
  },

  messages:{
    loginError: '~lognFail'
  },

  doLogin(email, pwd){
    I.fillField(this.fields.email, email),
    I.fillField(this.fields.pwd, pwd),
    I.tap(this.buttons.enter)
  },

  checkLoginError(){
    I.waitForElement(this.messages.loginError, 5)
    I.seeElement(this.messages.loginError)
  }
}
