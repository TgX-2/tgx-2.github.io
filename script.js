function changeSubPage(subPageId) {
    var subPages = document.querySelectorAll('.page-content');
    var currentSubPage = document.querySelector('.page-content.active');
    var selectedSubPage = document.getElementById(subPageId);

    if (currentSubPage === selectedSubPage) return;

    currentSubPage.classList.remove('active');
    selectedSubPage.classList.add('active');
}


function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    var currentPage = document.querySelector('.page.active');
    var selectedPage = document.getElementById(pageId);

    if (currentPage === selectedPage) return;

    var currentPageIndex = Array.from(pages).indexOf(currentPage);
    var selectedPageIndex = Array.from(pages).indexOf(selectedPage);

    var direction = selectedPageIndex > currentPageIndex ? 'left' : 'right';

    // Thêm transition cho mượt
    currentPage.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    selectedPage.style.transition = 'transform 0.5s ease, opacity 0.5s ease';

    if (direction === 'left') {
        currentPage.style.transform = 'translateX(-10%)';
    } else {
        currentPage.style.transform = 'translateX(10%)';
    }
    currentPage.style.opacity = '0';

    setTimeout(() => {
        currentPage.classList.remove('active');

        if (direction === 'left') {
            selectedPage.style.transform = 'translateX(10%)';
        } else {
            selectedPage.style.transform = 'translateX(-10%)';
        }
        selectedPage.style.opacity = '0';
        selectedPage.classList.add('active');

        setTimeout(() => {
            selectedPage.style.transform = 'translateX(0)';
            selectedPage.style.opacity = '1';
        }, 50);
    }, 500);
}


function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
  alert("Trang này chỉ dành cho máy tính! Hãy quay lại khi đã xem bằng máy tính.");
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".information").style.opacity = "1";
    }, 3000);
});
