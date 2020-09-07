export default class ApiReturn {

	constructor(commandOk = false, message = '', error = {}){
		this.commandOk = commandOk
		this.message = message
		this.error = error	
	}

}