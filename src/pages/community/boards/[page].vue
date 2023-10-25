<template>
    <section class="page-contents">
        <section class="page-searchBox">
            <span class="caption">검색조건 영역</span>
            <!-- 검색조건 리스트 -->
            <div class="page-searchBox__list">
                <ul class="page-searchBox__list_menu">
                    <li class="page-searchBox__list_item">
                        <!-- 셀렉트 박스 커스텀 -->
                        
                        <label>대분류</label>
                    </li>
                    <li class="page-searchBox__list_item">
                        <label>중분류</label>
                    </li>
                    <li class="page-searchBox__list_item">
                        <label>결재상태</label>
                    </li>
                    <li class="page-searchBox__list_item mg0 f_grow4">
                        <div class="page_searchInput_area">
                            <!-- 검색 조건 및 입력 혼합부분 -->
                        </div>
                    </li>
                    <li class="page-searchBox__list_item full_item mgT12">
                        <el-button class="button button__Big button__black w180p mgLAuto">
                            검색
                        </el-button>
                        <el-button class="button button__Big button__white w96p">
                            초기화
                        </el-button>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 메인 우측 APT 드라이브, 배너, APTi 게시현황 영역 -->
        <section class="page-BoardList">
            <div class="page-board">
                <span class="caption">게시판 영역</span>
                <el-table class="profile w100"
                    :empty-text="'검색 결과가 없습니다.'">
                    <el-table-column width="64" type="index"  header-align="center" align="center"
                        label="NO" class-name="f_c_666" />
                    <el-table-column width="136" prop="docCode" class-name="fs14 f_c_666" header-align="center"
                        align="center" label="문서번호" />
                    <el-table-column width="*" prop="docSubject" header-align="center" align="left" label="제목"
                        class-name="fs15 link_tit">
                    </el-table-column>
                    <el-table-column width="112" prop="approvalAt" header-align="center" align="center" label="기안 일자" />
                    <!-- <el-table-column width="112" prop="status" header-align="center" align="center" label="결재 상태">
                        <template #default="scope">
                            <div class="sign-step">
                                <span class="sign-step__ico">
                                    <span class="caption">{{ 'a' }}</span>
                                </span>
                                {{ 'a' }}
                                <b v-if="scope.row.approvalStatus !== 204" class="sign-step__num">{{
                                    scope.row.approvalStatusText }}</b>
                            </div>
                        </template>
                    </el-table-column> -->
                </el-table>
                <!-- <div class="page-area">
                    <div class="page-Num_box">
                        <el-pagination :page-size="searchOption.size" :current-page="searchOption.page"
                            layout="prev, pager, next" @current-change="pageChange" />
                    </div>
                </div> -->
            </div>
        </section>
    </section>
</template>