tippy('.tooltip');

const STORAGE_KEY = 'note';

let methods = {
	
	// Get Content to localStorage
	getContent () {
		return localStorage.getItem(STORAGE_KEY);
	},

	// Save Content to localStorage
	saveContent () {
		localStorage.setItem(STORAGE_KEY, this.msg);
	},

	removeContent () {
		localStorage.removeItem(STORAGE_KEY);
	},

	// Download Content
	downloadContent () {
		///
	},

	switchTheme () {
		this.darkTheme = !this.darkTheme;
	}
};

let app = new Vue({
	el: '#app',
	
	data: {
		msg: 'Write...',
		darkTheme: false
	},
	
	methods: methods,
	
	created: function () {
		this.msg = this.getContent();
	},
})

/*
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js')
	.then(() => navigator.serviceWorker.ready.then((worker) => {
		worker.sync.register('syncdata');
	}))
	.catch((err) => console.log(err));
}*/