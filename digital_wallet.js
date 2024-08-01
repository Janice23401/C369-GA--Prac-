document.addEventListener("DOMContentLoaded", () => {
    let balance = 0.00;
    let history = [];

    function updateBalance() {
        document.getElementById("balance").innerText = balance.toFixed(2);
    }

    function updateHistory() {
        const historyList = document.getElementById("history");
        historyList.innerHTML = "";
        history.forEach(transaction => {
            const li = document.createElement("li");
            li.textContent = `${transaction.type}: $${transaction.amount.toFixed(2)} on ${transaction.date}`;
            historyList.appendChild(li);
        });
    }

    function showTopUpForm() {
        document.getElementById("top-up-form").style.display = "block";
    }

    function processTopUp(event) {
        event.preventDefault();

        const cardNumber = document.getElementById("card-number").value;
        const cvv = document.getElementById("cvv").value;
        const expiryDate = document.getElementById("expiry-date").value;

        if (!cardNumber || !cvv || !expiryDate) {
            alert("Please fill in all fields.");
            return;
        }

        const amount = parseFloat(prompt("Enter top-up amount:"));
        if (isNaN(amount) || amount <= 0) {
            alert("Invalid amount. Please try again.");
            return;
        }

        balance += amount;
        history.push({ type: "Top Up", amount, date: new Date().toLocaleString() });
        updateBalance();
        updateHistory();
        document.getElementById("top-up-form").style.display = "none";
    }

    function makePayment(event) {
        event.preventDefault();
        const amount = parseFloat(document.getElementById("amount").value);
        const planPrice = parseFloat(document.getElementById("plan-price").textContent.replace('The cost of this plan is $', ''));

        if (isNaN(amount) || amount <= 0) {
            alert("Invalid amount. Please try again.");
            return;
        }
        if (amount > balance) {
            alert("Insufficient balance. Please top up.");
            return;
        }
        if (amount !== planPrice) {
            alert(`The payment amount must be exactly $${planPrice.toFixed(2)}.`);
            return;
        }

        balance -= amount;
        history.push({ type: "Payment", amount, date: new Date().toLocaleString() });
        updateBalance();
        updateHistory();
        document.getElementById("status").innerText = `Paid $${amount.toFixed(2)} successfully.`;
    }

    // Plan cost data
    const planCosts = {
        life: {
            basic: 50,
            standard: 100,
            premium: 200,
        },
        health: {
            basic: 100,
            standard: 200,
            premium: 400,
        },
        car: {
            basic: 50,
            standard: 80,
            premium: 150,
        }
    };

    // Plan text data
    const planText = {
        life: {
            basic: 'You have chosen the Basic Life Plan.',
            standard: 'You have chosen the Standard Life Plan.',
            premium: 'You have chosen the Premium Life Plan.',
        },
        health: {
            basic: 'You have chosen the Basic Health Plan.',
            standard: 'You have chosen the Standard Health Plan.',
            premium: 'You have chosen the Premium Health Plan.',
        },
        car: {
            basic: 'You have chosen the Basic Car Plan.',
            standard: 'You have chosen the Standard Car Plan.',
            premium: 'You have chosen the Premium Car Plan.',
        }
    };

    // Retrieve URL parameters and display plan details
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const plan = urlParams.get('plan');

    if (type && plan && planCosts[type] && planCosts[type][plan]) {
        const cost = planCosts[type][plan];
        document.getElementById('plan-description').textContent = planText[type][plan] || 'No plan selected.';
        document.getElementById('plan-price').textContent = `The cost of this plan is $${cost.toFixed(2)}.`;
    } else {
        document.getElementById('plan-description').textContent = 'No plan selected.';
        document.getElementById('plan-price').textContent = 'The cost of this plan is $0.00.';
    }

    // Initialize balance and history
    updateBalance();
    updateHistory();

    // Expose functions to global scope
    window.showTopUpForm = showTopUpForm;
    window.processTopUp = processTopUp;
    window.makePayment = makePayment;
});
