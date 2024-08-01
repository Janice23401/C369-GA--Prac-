document.addEventListener('DOMContentLoaded', () => {
    const planButtons = document.querySelectorAll(".choose-plan");
    planButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            const plan = button.dataset.plan;
            choosePlan(category, plan);
        });
    });

    function choosePlan(type, plan) {
        window.location.href = `digital_wallet.html?type=${type}&plan=${plan}`;
    }

});
