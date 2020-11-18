$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/books.feature");
formatter.feature({
  "name": "adding a book and editing-closing books",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "librarian should add a book for each category and should be able to edit and close the books",
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
  "keyword": "When "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.modulesStepDefs.the_user_login_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates \"Books\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.usersStepDefs.the_user_navigates(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user add a book successfully and able to edit-close in each category",
  "keyword": "Then "
});
formatter.match({
  "location": "com.libraryCT.step_definitions.booksStepDefs.the_user_add_a_book_successfully_and_able_to_edit_close_in_each_category()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"btn btn-lg btn-outline btn-primary btn-sm add_book_btn\" style\u003d\"\" href\u003d\"tpl/add-book.html\" data-target\u003d\"#ajax\" data-toggle\u003d\"modal\"\u003e...\u003c/a\u003e is not clickable at point (1084, 2). Other element would receive the click: \u003cnav class\u003d\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\" style\u003d\"\"\u003e...\u003c/nav\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027aliihsancelik.local\u0027, ip: \u0027fe80:0:0:0:c28:e390:7663:79b0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/_q/b9_0_0d579n...}, goog:chromeOptions: {debuggerAddress: localhost:55537}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 55e6902f65d9da04085d7c6c479f63bc\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.libraryCT.step_definitions.booksStepDefs.the_user_add_a_book_successfully_and_able_to_edit_close_in_each_category(booksStepDefs.java:26)\n\tat ✽.the user add a book successfully and able to edit-close in each category(file:///Users/aliihsancelik/IdeaProjects/BigFuture/src/test/resources/features/books.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});