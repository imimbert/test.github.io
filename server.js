// 1. 导入http模块
const http = require("http");

// 2. 创建一个web服务器对象
const server = http.createServer();

// 3. 监听请求事件
server.on("request", (req, res) => {
    //req-->request 请求对象， res-->response 响应对象
	// 通过响应头设置返回前台数据格式及编码。（解决中文乱码的问题）
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //res.write()表示向客户端输出的方法
    res.write("hello world，你好nodejs")
    //res.end()每次响应完，需要调用此方法 来结束响束
    res.end();
})

// 4. 监听端口，为了避免端口冲突，这里给一个本机端口3000
server.listen(8080, () => {
    console.log("服务器启动成功");
})　
