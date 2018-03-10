document.querySelector('.colMint1').onclick = function(){
	document.querySelector('#loginBox').style.display = 'none';
	document.querySelector('#registerBox').style.display = 'block';
}
document.querySelector('.colMint2').onclick = function(){
	document.querySelector('#loginBox').style.display = 'block';
	document.querySelector('#registerBox').style.display = 'none';
}
$(function(){
	// 注册
	$('#registerBox').find('button').on("click",function(){
		// 通过ajax提交请求
		$.ajax({
			type:'post',
			url:'/api/user/register',
			data:{
				username:$('#registerBox').find('[name="username"]').val(),
				password:$('#registerBox').find('[name="password"]').val(),
				repassword:$('#registerBox').find('[name="repassword"]').val()
			},
			dataType:'json',
			success:function(result){
				console.log(result);
				$('#registerBox').find('.colWarning').html(result.message);
				if(!result.code){
					// 注册成功
					setTimeout(function(){
							document.querySelector('#loginBox').style.display = 'block';
							document.querySelector('#registerBox').style.display = 'none';
					},1000)

				}
			}
		})
	})
		// 登录
	$('#loginBox').find('button').on("click",function(){
		// 通过ajax提交请求
		$.ajax({
			type:'post',
			url:'/api/user/login',
			data:{
				username:$('#loginBox').find('[name="username"]').val(),
				password:$('#loginBox').find('[name="password"]').val()
			},
			dataType:'json',
			success:function(result){
				console.log(result);
				$('#loginBox').find('.colWarning').html(result.message);
				if(!result.code){
					// 注册成功
					setTimeout(function(){
							document.querySelector('#userInfo').style.display = 'block';
							document.querySelector('#loginBox').style.display = 'none';
							// 显示登录用户的信息
							$('#userInfo').find('.username').html(result.userInfo.username);
							$('#userInfo').find('.info').html('你好，欢迎光临blog');

					},1000)

				}
			}
		})
	})
})