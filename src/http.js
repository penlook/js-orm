/**
 * Core Class
 */
function Core() {
	// Not implement yet
}

/**
 * HTTP Class
 */
function Http() {

	this.url = '';
	this.type = 'GET';
	this.async = false;
	this.data = {};

	// Inheritance
	Core.call(this);

	/**
	 * Set URL for request
	 * @param {string} url
	 * @return {Http} HTTP Request
	 */
	this.setUrl = function(url) {
		this.url = url;
		return this;
	}

	/**
	 * Set method for request
	 * @param {[type]} method [description]
	 * @return {Http} HTTP Request
	 */
	this.setType = function(type) {
		this.type = type;
		return this;
	}

	/**
	 * Set asynchronous mode for request
	 * @param {bool} async = true
	 * @return {Http} HTTP Request
	 */
	this.setAsync = function(async) {
		this.async = async;
		return this;
	}

	/**
	 * Set data for request
	 * @param {object} data
	 * @return {Http} HTTP Request
	 */
	this.setData = function(data) {
		this.data = data;
		return this;
	}

	/**
	 * Send ajax request
	 * @return {object} JSON Data
	 */
	this.send = function() {
		var result = null;
		console.log(this);

		$.ajax({
			url: this.url,
			type: this.type,
			data: this.data,
			async: this.async,
			success: function(data) {
      			result = data;
      		}
    	});

		return result;
	}
}


/**
 * Service
 * @param Api api
 * @param {string} name Service name
 */
function Service(api, name) {
	this.api = api;
	this.name = name;
	this.url =  api.root + "/" +name;
}

/**
 * API Class
 */
function Api() {
	this.root = "http://loi.penlook.com/syn";
	this.service = function(name) {
		return new Service(this, name);
	}
}

/**
 * Base Class
 */
function Base() {

	// Dependency Injection
	this.http = new Http();
	this.api  = new Api();

	/**
	 * To Json
	 * @return json
	 */
	this.toJson = function() {
		var property, key, value, json = {};

		for (property in this) {
			property = new String(property);
			if (property[0] == '_') {
				key = property.substring(1);
				value = this[property.toString()];
				json[key] = value;
			}
		}

		return json;
	}

	/**
	 * Save
	 * @return Base
	 */
	this.save = function() {
		var result, service;
		service = url = this.api.service('topic');

		result = this.http.setUrl(service.url)
				 		  .send();

		console.log(result);
	}

	/**
	 * Delete
	 * @return Base
	 */
	this.delete = function() {
		console.log('Deleted');
		this.send('DELETE');
	}
}

// Status Class
function Status() {

	// Parent class
	Base.call(this);

	this.setContent = function(content) {
		this._content = content;
		return this;
	}

	this.setEmotion = function(emotion) {
		this._emotion = emotion;
		return this;
	}

	this.setDate = function(date) {
		this._date = date;
		return this;
	}
}
