<template>
	<header class="apt-hd">
		<div class="apt-top-hd">
			<h1 class="apt-logo">
				<a class="apt-link" href="/">
					<img src="@/assets/images/logo/sample.png" alt="logo" />
				</a>
				<p class="apt-info">
					<span class="code-num">00001111</span>
					<span class="name">starclass</span>
				</p>
			</h1>
			<div class="search-container">
				<div class="inp-wrap">
					<div class="inp-grp">
						<label for="search-keyword-sort" class="inp-label">카테고리</label>
						<select name="search-keyword-sort" id="search-keyword-sort" class="input inp-select with-conts">
							<option value="전체">전체 게시판</option>
						</select>
						<label for="srarch-keyword" class="inp-label">검색어</label>
						<input type="text" id="srarch-keyword" name="srarch-keyword" class="input inp-txt"
							placeholder="찾으시려는 내용을 입력해주세요.">
							<button type="button" class="btn btn-l btn-main">검색</button>
					</div>
				</div>
			</div>
			<div class="btns-wrap">
				<spsan class="user-name">홍길동 님</spsan>
				<a href="index.html" class="btn btn-m">로그아웃</a>
			</div>
		</div>
	</header>
</template>
