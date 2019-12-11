<template>
<!-- <meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="D-Width-Response" content="class=g-wrap">
	<meta name="360-site-verification" content="3e7bbe4b35d4baeca6317c2109423c1b">
	<link rel="shortcut icon" href="https://www.lieliu.com/images/favicon.ico"> -->
  <div>
    	<header id="header" class="header-orange">
		<section class="main">
			<div class="header-logo">
				<a href="https://www.lieliu.com/" class="logo" title="猎流-网店推广系统"></a>
			</div>

			<div class="header-btn">
				<a class="" href="/regist">注册</a>
				<span>|</span>
				<a class="" href="/login">登录</a>
			</div>

			<ul class="header-nav">

				<li class="home"><a href="/">首页</a></li>

				<li class="price active"><a href="/price">价格表</a></li>

				<li class="download"><a href="/download">下载软件</a></li>

				<!-- <li class="zixun"><a href="https://www.lieliu.com/zixun">资讯</a></li> -->

				<li class=""><a class="token-link" href="/deploy/taobao/flow">发布任务</a></li>
			</ul>
		</section>
	</header>
	<div class="main">
		<div class="site-title">
			<h2>猎流任务积分价格表</h2>
			<small>充值积分赠送相对应的VIP，等级越高做任务越优惠</small>
			<nav class="price-nav">

				<a href="javascript:;" id="taobaoNav" data-id="taobao" class="active">淘宝/天猫</a>

				<a href="javascript:;" id="jingdongNav" data-id="jingdong" class="">拼多多/京东</a>

				<a href="javascript:;" id="douyinNav" data-id="douyin">抖音</a>

			</nav>
		</div>
	</div>
	<div class="price-container">
		<div class="main">
			<div class="price-grid-wrap">
				<div class="grid">
					<table cellspacing="0">
						<thead>
							<tr>
								<th class="title">
									<h3>任务类型</h3>
									<small>&nbsp;</small>
								</th>
								<th class="normal">
									<h3>普通会员</h3>
									<small>暂无优惠</small>
								</th>
								<th class="vip1">
									<h3>VIP1</h3>
									<small>任务约9折</small>
								</th>
								<th class="vip2">
									<h3>VIP2</h3>
									<small>任务约8折</small>
								</th>
								<th class="vip3">
									<h3>VIP3</h3>
									<small>任务约7折</small>
								</th>
								<th class="vip4">
									<h3>VIP4</h3>
									<small>任务约6折</small>
								</th>
								<th class="vip5">
									<h3>VIP5</h3>
									<small>任务约5折</small>
								</th>
							</tr>
						</thead>

						<tbody id="taobaoPanel" style="display: table-row-group;">

							<tr>
								<td class="title">APP搜索流量</td>
								<td class="normal">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip1">
									<b>26</b>
									<span>积分</span>
									<small>0.052元</small>
								</td>
								<td class="vip2">
									<b>24</b>
									<span>积分</span>
									<small>0.048元</small>
								</td>
								<td class="vip3">
									<b>22</b>
									<span>积分</span>
									<small>0.044元</small>
								</td>
								<td class="vip4">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
								<td class="vip5">
									<b>18</b>
									<span>积分</span>
									<small>0.036元</small>
								</td>
							</tr>

							<tr>
								<td class="title">PC搜索流量</td>
								<td class="normal">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip1">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
								<td class="vip2">
									<b>34</b>
									<span>积分</span>
									<small>0.068元</small>
								</td>
								<td class="vip3">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip4">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip5">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
							</tr>

							<tr>
								<td class="title">PC直访店铺流量</td>
								<td class="normal">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip1">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
								<td class="vip2">
									<b>34</b>
									<span>积分</span>
									<small>0.068元</small>
								</td>
								<td class="vip3">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip4">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip5">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
							</tr>

							<tr>
								<td class="title">PC直访商品流量</td>
								<td class="normal">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip1">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
								<td class="vip2">
									<b>34</b>
									<span>积分</span>
									<small>0.068元</small>
								</td>
								<td class="vip3">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip4">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip5">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
							</tr>

							<tr>
								<td class="title">店铺直接收藏</td>
								<td class="normal">
									<b>65</b>
									<span>积分</span>
									<small>0.13元</small>
								</td>
								<td class="vip1">
									<b>60</b>
									<span>积分</span>
									<small>0.12元</small>
								</td>
								<td class="vip2">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip3">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip4">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip5">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品直接收藏</td>
								<td class="normal">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip1">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip2">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip3">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip4">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品搜索收藏</td>
								<td class="normal">
									<b>60</b>
									<span>积分</span>
									<small>0.12元</small>
								</td>
								<td class="vip1">
									<b>52</b>
									<span>积分</span>
									<small>0.104元</small>
								</td>
								<td class="vip2">
									<b>48</b>
									<span>积分</span>
									<small>0.096元</small>
								</td>
								<td class="vip3">
									<b>44</b>
									<span>积分</span>
									<small>0.088元</small>
								</td>
								<td class="vip4">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip5">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品直接加购</td>
								<td class="normal">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip1">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip2">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip3">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip4">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品搜索加购</td>
								<td class="normal">
									<b>60</b>
									<span>积分</span>
									<small>0.12元</small>
								</td>
								<td class="vip1">
									<b>52</b>
									<span>积分</span>
									<small>0.104元</small>
								</td>
								<td class="vip2">
									<b>48</b>
									<span>积分</span>
									<small>0.096元</small>
								</td>
								<td class="vip3">
									<b>44</b>
									<span>积分</span>
									<small>0.088元</small>
								</td>
								<td class="vip4">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip5">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
							</tr>

							<tr>
								<td class="title">淘宝直播间加购</td>
								<td class="normal">
									<b>60</b>
									<span>积分</span>
									<small>0.12元</small>
								</td>
								<td class="vip1">
									<b>52</b>
									<span>积分</span>
									<small>0.104元</small>
								</td>
								<td class="vip2">
									<b>48</b>
									<span>积分</span>
									<small>0.096元</small>
								</td>
								<td class="vip3">
									<b>44</b>
									<span>积分</span>
									<small>0.088元</small>
								</td>
								<td class="vip4">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip5">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
							</tr>

							<tr>
								<td class="title">达人关注</td>
								<td class="normal">
									<b>65</b>
									<span>积分</span>
									<small>0.13元</small>
								</td>
								<td class="vip1">
									<b>60</b>
									<span>积分</span>
									<small>0.12元</small>
								</td>
								<td class="vip2">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip3">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip4">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip5">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
							</tr>

							<tr>
								<td class="title">微淘点赞</td>
								<td class="normal">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
								<td class="vip1">
									<b>15</b>
									<span>积分</span>
									<small>0.03元</small>
								</td>
								<td class="vip2">
									<b>15</b>
									<span>积分</span>
									<small>0.03元</small>
								</td>
								<td class="vip3">
									<b>15</b>
									<span>积分</span>
									<small>0.03元</small>
								</td>
								<td class="vip4">
									<b>15</b>
									<span>积分</span>
									<small>0.03元</small>
								</td>
								<td class="vip5">
									<b>15</b>
									<span>积分</span>
									<small>0.03元</small>
								</td>
							</tr>

							<tr>
								<td class="title">直播观看</td>
								<td class="normal">
									<b>14</b>
									<span>积分</span>
									<small>0.028元</small>
								</td>
								<td class="vip1">
									<b>12</b>
									<span>积分</span>
									<small>0.024元</small>
								</td>
								<td class="vip2">
									<b>10</b>
									<span>积分</span>
									<small>0.02元</small>
								</td>
								<td class="vip3">
									<b>9</b>
									<span>积分</span>
									<small>0.018元</small>
								</td>
								<td class="vip4">
									<b>8</b>
									<span>积分</span>
									<small>0.016元</small>
								</td>
								<td class="vip5">
									<b>7</b>
									<span>积分</span>
									<small>0.014元</small>
								</td>
							</tr>

							<tr>
								<td class="title">聚划算开团提醒</td>
								<td class="normal">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip1">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip2">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip3">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip4">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip5">
									<b>25</b>
									<span>积分</span>
									<small>0.05元</small>
								</td>
							</tr>

							<tr>
								<td class="title">达人普通粉</td>
								<td class="normal">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
								<td class="vip1">
									<b>18</b>
									<span>积分</span>
									<small>0.036元</small>
								</td>
								<td class="vip2">
									<b>16</b>
									<span>积分</span>
									<small>0.032元</small>
								</td>
								<td class="vip3">
									<b>14</b>
									<span>积分</span>
									<small>0.028元</small>
								</td>
								<td class="vip4">
									<b>12</b>
									<span>积分</span>
									<small>0.024元</small>
								</td>
								<td class="vip5">
									<b>10</b>
									<span>积分</span>
									<small>0.02元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品点赞</td>
								<td class="normal">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
								<td class="vip1">
									<b>15</b>
									<span>积分</span>
									<small>0.03元</small>
								</td>
								<td class="vip2">
									<b>12</b>
									<span>积分</span>
									<small>0.024元</small>
								</td>
								<td class="vip3">
									<b>10</b>
									<span>积分</span>
									<small>0.02元</small>
								</td>
								<td class="vip4">
									<b>8</b>
									<span>积分</span>
									<small>0.016元</small>
								</td>
								<td class="vip5">
									<b>7</b>
									<span>积分</span>
									<small>0.014元</small>
								</td>
							</tr>

							<tr>
								<td class="title">淘抢购提醒</td>
								<td class="normal">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip1">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip2">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip3">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip4">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip5">
									<b>25</b>
									<span>积分</span>
									<small>0.05元</small>
								</td>
							</tr>

							<tr>
								<td class="title">微淘文章阅读次数</td>
								<td class="normal">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
								<td class="vip1">
									<b>18</b>
									<span>积分</span>
									<small>0.036元</small>
								</td>
								<td class="vip2">
									<b>17</b>
									<span>积分</span>
									<small>0.034元</small>
								</td>
								<td class="vip3">
									<b>15</b>
									<span>积分</span>
									<small>0.03元</small>
								</td>
								<td class="vip4">
									<b>13</b>
									<span>积分</span>
									<small>0.026元</small>
								</td>
								<td class="vip5">
									<b>11</b>
									<span>积分</span>
									<small>0.022元</small>
								</td>
							</tr>

							<tr>
								<td class="title">微淘文章阅读人数</td>
								<td class="normal">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip1">
									<b>26</b>
									<span>积分</span>
									<small>0.052元</small>
								</td>
								<td class="vip2">
									<b>24</b>
									<span>积分</span>
									<small>0.048元</small>
								</td>
								<td class="vip3">
									<b>22</b>
									<span>积分</span>
									<small>0.044元</small>
								</td>
								<td class="vip4">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
								<td class="vip5">
									<b>18</b>
									<span>积分</span>
									<small>0.036元</small>
								</td>
							</tr>

							<tr>
								<td class="title">微淘文章引导进店</td>
								<td class="normal">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip1">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip2">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip3">
									<b>28</b>
									<span>积分</span>
									<small>0.056元</small>
								</td>
								<td class="vip4">
									<b>25</b>
									<span>积分</span>
									<small>0.05元</small>
								</td>
								<td class="vip5">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
							</tr>

							<tr>
								<td class="title">淘宝直播热度</td>
								<td class="normal">
									<b>12</b>
									<span>积分</span>
									<small>0.024元</small>
								</td>
								<td class="vip1">
									<b>11</b>
									<span>积分</span>
									<small>0.022元</small>
								</td>
								<td class="vip2">
									<b>11</b>
									<span>积分</span>
									<small>0.022元</small>
								</td>
								<td class="vip3">
									<b>10</b>
									<span>积分</span>
									<small>0.02元</small>
								</td>
								<td class="vip4">
									<b>10</b>
									<span>积分</span>
									<small>0.02元</small>
								</td>
								<td class="vip5">
									<b>9</b>
									<span>积分</span>
									<small>0.018元</small>
								</td>
							</tr>

						</tbody>

						<tbody id="jingdongPanel" style="display: none;">

							<tr>
								<td class="title">拼多多APP流量</td>
								<td class="normal">
									<b>10</b>
									<span>积分</span>
									<small>0.02元</small>
								</td>
								<td class="vip1">
									<b>8</b>
									<span>积分</span>
									<small>0.016元</small>
								</td>
								<td class="vip2">
									<b>7</b>
									<span>积分</span>
									<small>0.014元</small>
								</td>
								<td class="vip3">
									<b>6</b>
									<span>积分</span>
									<small>0.012元</small>
								</td>
								<td class="vip4">
									<b>5</b>
									<span>积分</span>
									<small>0.01元</small>
								</td>
								<td class="vip5">
									<b>4</b>
									<span>积分</span>
									<small>0.008元</small>
								</td>
							</tr>

							<tr>
								<td class="title">拼多多搜索商品收藏</td>
								<td class="normal">
									<b>48</b>
									<span>积分</span>
									<small>0.096元</small>
								</td>
								<td class="vip1">
									<b>42</b>
									<span>积分</span>
									<small>0.084元</small>
								</td>
								<td class="vip2">
									<b>38</b>
									<span>积分</span>
									<small>0.076元</small>
								</td>
								<td class="vip3">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip4">
									<b>28</b>
									<span>积分</span>
									<small>0.056元</small>
								</td>
								<td class="vip5">
									<b>24</b>
									<span>积分</span>
									<small>0.048元</small>
								</td>
							</tr>

							<tr>
								<td class="title">拼多多商品直接收藏</td>
								<td class="normal">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip1">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
								<td class="vip2">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip3">
									<b>28</b>
									<span>积分</span>
									<small>0.056元</small>
								</td>
								<td class="vip4">
									<b>24</b>
									<span>积分</span>
									<small>0.048元</small>
								</td>
								<td class="vip5">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
							</tr>

							<tr>
								<td class="title">拼多多店铺收藏</td>
								<td class="normal">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip1">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
								<td class="vip2">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip3">
									<b>28</b>
									<span>积分</span>
									<small>0.056元</small>
								</td>
								<td class="vip4">
									<b>24</b>
									<span>积分</span>
									<small>0.048元</small>
								</td>
								<td class="vip5">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
							</tr>

							<tr>
								<td class="title">APP搜索流量</td>
								<td class="normal">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip1">
									<b>26</b>
									<span>积分</span>
									<small>0.052元</small>
								</td>
								<td class="vip2">
									<b>24</b>
									<span>积分</span>
									<small>0.048元</small>
								</td>
								<td class="vip3">
									<b>22</b>
									<span>积分</span>
									<small>0.044元</small>
								</td>
								<td class="vip4">
									<b>20</b>
									<span>积分</span>
									<small>0.04元</small>
								</td>
								<td class="vip5">
									<b>18</b>
									<span>积分</span>
									<small>0.036元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品直接收藏</td>
								<td class="normal">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip1">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip2">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip3">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip4">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

							<tr>
								<td class="title">店铺直接关注</td>
								<td class="normal">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip1">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip2">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip3">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip4">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品直接加购</td>
								<td class="normal">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip1">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip2">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip3">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip4">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

							<tr>
								<td class="title">达人关注</td>
								<td class="normal">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip1">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip2">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip3">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip4">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

							<tr>
								<td class="title">京东预约</td>
								<td class="normal">
									<b>55</b>
									<span>积分</span>
									<small>0.11元</small>
								</td>
								<td class="vip1">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip2">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip3">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip4">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

							<tr>
								<td class="title">秒杀提醒</td>
								<td class="normal">
									<b>10</b>
									<span>积分</span>
									<small>0.02元</small>
								</td>
								<td class="vip1">
									<b>8</b>
									<span>积分</span>
									<small>0.016元</small>
								</td>
								<td class="vip2">
									<b>7</b>
									<span>积分</span>
									<small>0.014元</small>
								</td>
								<td class="vip3">
									<b>6</b>
									<span>积分</span>
									<small>0.012元</small>
								</td>
								<td class="vip4">
									<b>4</b>
									<span>积分</span>
									<small>0.008元</small>
								</td>
								<td class="vip5">
									<b>3</b>
									<span>积分</span>
									<small>0.006元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品搜索收藏</td>
								<td class="normal">
									<b>60</b>
									<span>积分</span>
									<small>0.12元</small>
								</td>
								<td class="vip1">
									<b>52</b>
									<span>积分</span>
									<small>0.104元</small>
								</td>
								<td class="vip2">
									<b>48</b>
									<span>积分</span>
									<small>0.096元</small>
								</td>
								<td class="vip3">
									<b>44</b>
									<span>积分</span>
									<small>0.088元</small>
								</td>
								<td class="vip4">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip5">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
							</tr>

							<tr>
								<td class="title">商品搜索加购</td>
								<td class="normal">
									<b>60</b>
									<span>积分</span>
									<small>0.12元</small>
								</td>
								<td class="vip1">
									<b>52</b>
									<span>积分</span>
									<small>0.104元</small>
								</td>
								<td class="vip2">
									<b>48</b>
									<span>积分</span>
									<small>0.096元</small>
								</td>
								<td class="vip3">
									<b>44</b>
									<span>积分</span>
									<small>0.088元</small>
								</td>
								<td class="vip4">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip5">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
							</tr>

						</tbody>

						<tbody id="douyinPanel" style="display: none;">

							<tr>
								<td class="title">抖音粉丝</td>
								<td class="normal">
									<b>160</b>
									<span>积分</span>
									<small>0.32元</small>
								</td>
								<td class="vip1">
									<b>150</b>
									<span>积分</span>
									<small>0.3元</small>
								</td>
								<td class="vip2">
									<b>140</b>
									<span>积分</span>
									<small>0.28元</small>
								</td>
								<td class="vip3">
									<b>130</b>
									<span>积分</span>
									<small>0.26元</small>
								</td>
								<td class="vip4">
									<b>120</b>
									<span>积分</span>
									<small>0.24元</small>
								</td>
								<td class="vip5">
									<b>110</b>
									<span>积分</span>
									<small>0.22元</small>
								</td>
							</tr>

							<tr>
								<td class="title">抖音点赞</td>
								<td class="normal">
									<b>50</b>
									<span>积分</span>
									<small>0.1元</small>
								</td>
								<td class="vip1">
									<b>45</b>
									<span>积分</span>
									<small>0.09元</small>
								</td>
								<td class="vip2">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip3">
									<b>35</b>
									<span>积分</span>
									<small>0.07元</small>
								</td>
								<td class="vip4">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
								<td class="vip5">
									<b>25</b>
									<span>积分</span>
									<small>0.05元</small>
								</td>
							</tr>

							<tr>
								<td class="title">抖音播放</td>
								<td class="normal">
									<b>0.15</b>
									<span>积分</span>
									<small>0.0003元</small>
								</td>
								<td class="vip1">
									<b>0.12</b>
									<span>积分</span>
									<small>0.00024元</small>
								</td>
								<td class="vip2">
									<b>0.1</b>
									<span>积分</span>
									<small>0.0002元</small>
								</td>
								<td class="vip3">
									<b>0.09</b>
									<span>积分</span>
									<small>0.00018元</small>
								</td>
								<td class="vip4">
									<b>0.07</b>
									<span>积分</span>
									<small>0.00014元</small>
								</td>
								<td class="vip5">
									<b>0.05</b>
									<span>积分</span>
									<small>0.0001元</small>
								</td>
							</tr>

							<tr>
								<td class="title">抖音分享</td>
								<td class="normal">
									<b>1.5</b>
									<span>积分</span>
									<small>0.003元</small>
								</td>
								<td class="vip1">
									<b>1</b>
									<span>积分</span>
									<small>0.002元</small>
								</td>
								<td class="vip2">
									<b>0.9</b>
									<span>积分</span>
									<small>0.0018元</small>
								</td>
								<td class="vip3">
									<b>0.8</b>
									<span>积分</span>
									<small>0.0016元</small>
								</td>
								<td class="vip4">
									<b>0.7</b>
									<span>积分</span>
									<small>0.0014元</small>
								</td>
								<td class="vip5">
									<b>0.6</b>
									<span>积分</span>
									<small>0.0012元</small>
								</td>
							</tr>

							<tr>
								<td class="title">抖音评论</td>
								<td class="normal">
									<b>40</b>
									<span>积分</span>
									<small>0.08元</small>
								</td>
								<td class="vip1">
									<b>38</b>
									<span>积分</span>
									<small>0.076元</small>
								</td>
								<td class="vip2">
									<b>36</b>
									<span>积分</span>
									<small>0.072元</small>
								</td>
								<td class="vip3">
									<b>34</b>
									<span>积分</span>
									<small>0.068元</small>
								</td>
								<td class="vip4">
									<b>32</b>
									<span>积分</span>
									<small>0.064元</small>
								</td>
								<td class="vip5">
									<b>30</b>
									<span>积分</span>
									<small>0.06元</small>
								</td>
							</tr>

						</tbody>

					</table>
				</div>
			</div>
		</div>
	</div>
	<!-- 用户开始 -->
	<div class="footer-user">
		<div class="main container">
			<h3><span class="userCount text-orange" data-after="7125225" data-before="6965452">7,125,225</span>网店都在用猎流推广，你还在等什么？</h3>
		</div>
		<div class="btn-wrap">
			<a data-animate="animated bounceIn" class="btn btn-lg btn-orange btn-shadow" href="https://www.lieliu.com/login.html">免费体验</a>
			<a data-animate="animated bounceIn" class="btn btn-lg btn-black btn-shadow" href="javascript:;" onclick="gotoDownload();">立即下载</a>
		</div>
	</div>
	<!-- 用户结束 -->
	<!-- 底部开始 -->
	<footer id="footer">
		<div class="site-footer clearfix">
			<div class="main clearfix">
				<div class="about">
					<h3><span>关于</span> <img src="/price//1564818486234EyRg3GhWQKHW2bw.png" alt="猎流网店优化"></h3>
					<p>猎流是一款集店铺推广与电商查询为一体的流量软件！我们致力打造手机APP流量、PC流量，通过猎流可快速提升淘宝、京东、拼多多等广大卖家的店铺流量，新开发的电商工具更可查验号，防止被骗避免损失，为网店卖家打造</p>
				</div>
				<div class="firend">
					<div class="inner">
						<h3>友情链接</h3>
						<p>
							<a href="http://www.taodaxiang.cn/" target="_blank" rel="noopener noreferrer">淘大象</a>
							<a href="http://www.chaxinyu.net/" target="_blank" rel="noopener noreferrer">创客 工具箱</a>
							<a href="http://www.taodaso.com/" target="_blank" rel="noopener noreferrer">创客 查号</a>
							<a href="https://chongzhi.com/" target="_blank" rel="noopener noreferrer">充值</a>
							<a href="https://www.sududa.com/" target="_blank" rel="noopener noreferrer">淘宝 捷易通</a>
							<a href="https://www.kehuda.com/" target="_blank" rel="noopener noreferrer">淘宝 开店</a>
							<a href="https://www.heixi.com/" target="_blank" rel="noopener noreferrer">淘宝 查号</a>
						</p>
						<a href="https://www.lieliu.com/api.html">诚招代理（OEM、API）</a>
					</div>
				</div>
				<div class="qrcode">
					<img class="daoshi-qrcode" src="/price//1565759661124FFiZZgtCphIPAjX.png" alt="客服微信">
					<p><i class="icon icon-weixin"></i> 扫码加客服微信</p>
				</div>
			</div>
			<div class="main copyright">
				<span>深圳市三彦科技网络有限公司</span>
				<a href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备14067490号-7</a>
			</div>
		</div>
	</footer>
	<!-- 底部结束 -->

	<!-- 客服窗口开始 -->
	<div class="sidefixed">
		<ul>
			<li>
				<i class="ico ico-kf"></i>
				<p>客服</p>
				<div class="info">
					<div class="show-kefu">
						<div class="show-kefu-box">
							<div class="code">
								<div class="img-qq"></div>
							</div>
							<p class="qq">QQ:4276859</p>
							<a href="tencent://message/?uin=4276859&amp;Site=&amp;Menu=yes" target="_blank" rel="nofollow" class="button">在线客服</a>
							<p class="work-day">工作日：9:00-23:00</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<i class="ico ico-wx"></i>
				<p>微信</p>
				<div class="info">
					<div class="show-wx">
						<div class="show-wx-box">
							<h3>扫码加导师微信!</h3>
							<h4>立即领取<b class="text-red">2000</b>流量积分</h4>
							<div class="code">

								<div class="img-wechat">
									<img class="daoshi-qrcode" src="/price//1565759661124FFiZZgtCphIPAjX.png" alt="">
								</div>
							</div>
							<p><i class="icon icon-user text-orange"></i> <span class="daoshi-name">王老师</span></p>
							<p><i class="icon icon-weixin text-green"></i> <span>微信号：<span class="daoshi-id">cd9683</span></span></p>
						</div>
					</div>
				</div>
			</li>
			<li onclick="gotoDownload();">
				<i class="ico ico-xz"></i>
				<p><a href="javascript:;">下载</a></p>
			</li>
			<li class="top">
				<p><a href="javascript:scroll(0,0)">返回顶部</a></p>
			</li>
		</ul>
	</div>
	<!-- 客服窗口结束 -->
	<!-- 脚本开始 -->
	<div class="xl-chrome-ext-bar" id="xl_chrome_ext_{4DB361DE-01F7-4376-B494-639E489D19ED}" style="display: none;">
		<div class="xl-chrome-ext-bar__logo"></div>

		<a id="xl_chrome_ext_download" href="javascript:;" class="xl-chrome-ext-bar__option">下载视频</a>
		<a id="xl_chrome_ext_close" href="javascript:;" class="xl-chrome-ext-bar__close"></a>
	</div>
  </div>
</template>

<script>
export default {
	layout:'pricedefault',
    head(){
        return{
            meta:[
                {'http-equiv':'Content-Type',content:'text/html; charset=UTF-8'},
                {name:'keywords',content:'淘宝流量,淘宝引流,商品收藏,店铺收藏,收藏回购,达人粉丝,淘宝买流量,淘宝手机流量,淘宝流量软件,淘宝流量提升,网店推广软件'},
                {name:'description',content:'猎流是一款提升淘宝/京东/拼多多店铺流量、店铺收藏、商品加购的引流软件，真实人工搜索，访客遍布全国各地，可深度浏览货比三家，支持提升PC端、手淘无线APP流量，快速提升淘宝店铺权重，优化商品宝贝排名人气。'},

            ],
            link:[
                {rel:'stylesheet',type:'text/css',href:'/price/font_1176299_y0zgnm40z7f.css'},
                {rel:'stylesheet',type:'text/css',href:'/deploy/animate.min.css'},
                {rel:'stylesheet',type:'text/css',href:'/price/new.css'},
                {rel:'stylesheet',type:'text/css',href:'/price/zero-modal.css'},
                {rel:'stylesheet',type:'text/css',href:'/price/price.css'},
            ],
            title:'价格表 - 猎流网店推广软件-淘宝引流_免费流量提升_店铺商品收藏加购_达人粉丝_手机无线APP买流量',
            bodyAttrs:{
                class:['page-price']
            }
        }
    }
};
</script>
