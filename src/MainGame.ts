class MainGame extends eui.Component {
	constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
		this.skinName = "resource/components/MainGame.exml";
	}

	private uiCompHandler(): void {
		console.log("\t\tGoodsUI uiCompHandler");

		this.Btn_Jump.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// this.verticalCenter
	}

	protected createChildren(): void {
		super.createChildren();

	}

	private Btn_Jump: eui.Button;
	onButtonClick(): void {
		console.log("\t\tmain game clickbtn ");
		this.sendPostRequest();
	}
	private sendGetRequest(): void {


		var params = "?name=11&age=1111";
		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.open("http://192.168.10.152:8081/PushInfo" + params, egret.HttpMethod.GET);
		request.send();
		request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
	}
	private onGetComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("get data : ", request.response);
		var responseLabel = new egret.TextField();
		responseLabel.size = 18;
		responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
		this.addChild(responseLabel);
		responseLabel.x = 50;
		responseLabel.y = 70;
	}
	private onGetIOError(event: egret.IOErrorEvent): void {
		console.log("get error : " + event);
	}
	private onGetProgress(event: egret.ProgressEvent): void {
		console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
	}

	private sendPostRequest() {
 
	 
		var params = "{'UserName':'张三', 'Pwd': '10'}";
		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.open("http://192.168.10.152:8081/Login", egret.HttpMethod.POST);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
		request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
	}
	private onPostComplete(event: egret.Event) {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("post data : ", request.response);
		var responseLabel = new egret.TextField();
		responseLabel.size = 18;
		responseLabel.text = "POST response:\n" + request.response.substring(0, 50) + "...";
		this.addChild(responseLabel);
		responseLabel.x = 300;
		responseLabel.y = 70;
	}
	private onPostIOError(event: egret.IOErrorEvent): void {
		console.log("post error : " + event);
	}
	private onPostProgress(event: egret.ProgressEvent): void {
		console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
	}
}