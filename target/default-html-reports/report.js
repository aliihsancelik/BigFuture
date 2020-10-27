$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/users.feature");
formatter.feature({
  "name": "Add User",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add, edit users and close",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user login as a \"librarian\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Users\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_navigates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should add a new user successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_should_add_a_new_user_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to edit and close",
  "keyword": "And "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_should_be_able_to_edit_and_close()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca onclick\u003d\"Users.edit_user(1719)\" href\u003d\"javascript:void(0)\" class\u003d\"btn btn-primary btn-sm\" role\u003d\"button\"\u003e...\u003c/a\u003e is not clickable at point (113, 500). Other element would receive the click: \u003cdiv class\u003d\"modal fade show\" tabindex\u003d\"-1\" id\u003d\"ajax\" role\u003d\"basic\" style\u003d\"padding-right: 15px; display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027aliihsancelik.local\u0027, ip: \u0027fe80:0:0:0:10cd:3e20:d6c1:6cc8%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/_q/b9_0_0d579n...}, goog:chromeOptions: {debuggerAddress: localhost:49311}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b2164d6ddef4f9ad057162678b37f86d\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat com.libraryCT.pages.UsersPage.editAndClose(UsersPage.java:70)\n\tat com.libraryCT.step_definitions.usersStepDefs.the_user_should_be_able_to_edit_and_close(usersStepDefs.java:31)\n\tat ✽.the user should be able to edit and close(file:///Users/aliihsancelik/IdeaProjects/BigFuture/src/test/resources/features/users.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});