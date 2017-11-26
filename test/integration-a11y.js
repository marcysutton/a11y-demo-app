const Selenium = require('selenium-webdriver'),
	  	AxeBuilder = require('axe-webdriverjs');
const assert = require('assert');

const TestUtils = require('./utils.js');

var port = process.env.npm_package_config_port || 3006;

describe('Accessibility', function() {
	this.timeout(10000);

	let driver;

	beforeEach(function(done) {
		driver = new Selenium.Builder()
		  .forBrowser('chrome')
		  .build();
		driver
			.get(`http://localhost:${port}`)
		  .then(function() {
  			done();
		  })
	});

	afterEach(function(done) {
		driver.quit().then(function() {
			done();
		});
	});

	it('should find no violations on the homepage', function(done) {
		driver
			.findElement(Selenium.By.css('.App'))
		  .then(function() {
		    new AxeBuilder(driver)
		      .analyze(function(results) {
		      	TestUtils.printViolations(results.violations);
		        assert.equal(results.violations.length, 0);
		        done();
		      });
		  });
	});
	it('should find no violations in the modal', function(done) {
		driver
			.findElement(Selenium.By.css('.signup-btn'))
			.then(function(element) {
				element.sendKeys(Selenium.Key.ENTER)
			})
		  .then(function() {
		    new AxeBuilder(driver)
		      .analyze(function (results) {
		      	TestUtils.printViolations(results.violations);
		        assert.equal(results.violations.length, 0);
		        done();
		      });
		  });
	});
});
