document.addEventListener("DOMContentLoaded", () => {
    const status = document.querySelector(".nav-status");

    if (status) {
        status.setAttribute("title", "Deployment pipeline is active");
    }

    console.log("DevOps CI/CD website loaded successfully.");
});
