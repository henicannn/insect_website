var newPage = new TimelineLite({ onComplete: newPage });
newPage.to("#loading_bar", 2.2, { width: "600px", ease: Power0.easeOut });

function newPage() {
    window.location.replace("http://127.0.0.1:5500/bug.html");
}