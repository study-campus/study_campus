document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const overlay = document.getElementById('overlay');

    // 상태에 따른 스크롤 잠금 및 오버레이 활성화 (이중 탭 방지)
    const toggleMenu = (show) => {
        if (!mobileSidebar || !overlay) return;
        
        mobileSidebar.classList.toggle('active', show);
        overlay.classList.toggle('active', show);
        document.body.style.overflow = show ? 'hidden' : '';
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', () => toggleMenu(false));
    if (overlay) overlay.addEventListener('click', () => toggleMenu(false)); // 배경 클릭 시 닫힘

    // 이벤트 위임(Event Delegation)을 통한 버튼 클릭 충돌 방지
    document.body.addEventListener('click', (e) => {
        const clickedItem = e.target.closest('.quick-item');
        if (!clickedItem) return;

        const action = clickedItem.getAttribute('data-action');
        switch (action) {
            case 'classroom': alert('내 강의실로 이동합니다.'); break;
            case 'exams': alert('기출문제 페이지 오픈 예정입니다.'); break;
            case 'planner': alert('학습플래너 준비 중입니다.'); break;
            case 'qna': alert('질문게시판으로 이동합니다.'); break;
        }
    });
});