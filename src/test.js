// Javascript Unit Testing
QUnit.test("Http Class", function(assert) {
	var status = new Status();
	assert.notEqual(status, null);

	status.setContent('Hello');
	assert.equal(status._content, 'Hello');

	status.setDate('10/11/2014');
	assert.equal(status._date, '10/11/2014');
});