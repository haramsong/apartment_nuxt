<template>
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
</template>