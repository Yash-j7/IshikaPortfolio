// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Resume Button Click Event
    const resumeButton = document.getElementById("downloadResume");
    resumeButton.addEventListener("click", function () {
        window.open("./Ishika_s_resume.pdf", "_blank");
    });
});
