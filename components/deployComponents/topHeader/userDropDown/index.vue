<template>
    <ul class="pull-right topbar-nav list-unstyled ng-scope" ng-if="user.p > '0' &amp;&amp; ispc">
		<li class="dropdown topbar-user dropdown">
			<a href="javascript:void(0);">
				<i class="fa fa-user">&nbsp;</i>
				<span class="hidden-xs ng-binding">13088888897</span>
				<i class="lion lion-vip2 text-yellow ng-hide" style="font-size: 20px;" ng-show="user.p == '13'"> </i>
				<span class="fa fa-angle-down text-yellow"></span>
			</a>
			<div class="dropdown-menu dropdown-user pull-right">
				<div class="clearfix">
					<div class="col-xs-4">
						<div class="user-head row">
							<div class="img vip" ng-class="{'vip': user.p > 10}"></div>
							<div class="power">
								<a href="javascript:void(0);" class="btn btn-xs btn-square mbs ng-binding btn-yellow" ng-class="{'btn-yellow': user.p > 10, 'btn-info': user.p == 10}">代理商</a>
							</div>
						</div>
					</div>
					<div class="col-xs-6">
						<div class="row">
							<!-- ngIf: user.p > '0' && user.p !== '18' && ispc --><p ng-if="user.p > '0' &amp;&amp; user.p !== '18' &amp;&amp; ispc" class="ng-scope">
								<span>充值积分：</span>
								<b class="text-orange ng-binding">3,400</b>
							</p><!-- end ngIf: user.p > '0' && user.p !== '18' && ispc -->
							<!-- ngIf: user.p > '0' && user.p !== '18' && ispc --><p ng-if="user.p > '0' &amp;&amp; user.p !== '18' &amp;&amp; ispc" class="ng-scope">
								<span tooltip="流量积分仅用于发布流量任务">
									<span>流量积分：</span>
									<b class="text-orange ng-binding">41,000</b>
								</span>
								<a href="javascript:;" ng-click="receive()" ng-show="user.lc === '0'" tooltip="领取积分"><img src="//mapp.alicdn.com/1497431700195P6QP2616rFdofql.gif"></a>
							</p><!-- end ngIf: user.p > '0' && user.p !== '18' && ispc -->
							<!-- ngIf: user.p >= '18' && ispc -->
							<p>
								<a ng-show="user.p === '10' &amp;&amp; !oem" href="javascript:void(0);" ng-click="recharge();" class="btn btn-xs btn-warning btn-radius-lg plm prm ng-hide">充值</a>
								<!-- <a ng-show="user.p === '10' && !oem" href="javascript:void(0);" ng-click="upgrade();" class="btn btn-xs btn-warning btn-radius-lg plm prm">升级</a> -->
							</p>
						</div>
					</div>
					<div class="col-xs-2">
						<div class="row">
							<a href="javascript:void(0);" class="text-red" ng-click="logout();"><i class="fa fa-power-off"></i> 退出</a>
						</div>
					</div>
				</div>
				<nav class="clearfix">
					<a href="javascript:void(0);" ng-click="installCert();">
						<div class="icon icon1">
							<i class="lion lion-zhengshu1"></i>
						</div>
						<p class="text">安装证书</p>
					</a>
					<a href="javascript:void(0);" ng-click="bindPhone();">
						<div class="icon icon2">
							<i class="lion lion-shouji1"></i>
						</div>
						<p class="text ng-binding">修改手机</p>
					</a>
					<a href="javascript:void(0);" ng-click="modifyPass();">
						<div class="icon icon3">
							<i class="lion lion-lock-fill"></i>
						</div>
						<p class="text">修改登录密码</p>
					</a>
					<a href="javascript:void(0);" ng-click="modifyPayment();">
						<div class="icon icon4">
							<i class="lion lion-yaoshi2"></i>
						</div>
						<p class="text">修改交易密码</p>
					</a>
					<!-- ngIf: user.p === '18' -->
					<a href="javascript:void(0);" ng-show="!!showScoreTransfer" ng-click="scoreTransfer();" class="ng-hide">
						<div class="icon icon6">
							<i class="lion lion-qian"></i>
						</div>
						<p class="text">转赠积分</p>
					</a>
					<!-- ngIf: user.p === '14' || user.p === '13' --><a href="javascript:void(0);" ng-if="user.p === '14' || user.p === '13'" ng-click="bindIp();" class="ng-scope">
						<div class="icon icon7">
							<i class="lion lion-ip"></i>
						</div>
						<p class="text">IP绑定</p>
					</a><!-- end ngIf: user.p === '14' || user.p === '13' -->
					<!-- ngIf: user.oem > 0 -->
					<a href="#/list/task.html">
						<div class="icon icon8">
							<i class="lion lion-chaxun-o"></i>
						</div>
						<p class="text">业务查询</p>
					</a>
				</nav>
			</div>
		</li>
		<!-- <li><a href="javascript:void(0);"><i class="lion lion-xinfeng"></i></a></li> -->
	</ul>
</template>

<script>
    export default {
        
    }
</script>