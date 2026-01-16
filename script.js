const elements = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));

    // Simulação de envio
    document.getElementById("cadastroForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Cadastro enviado com sucesso! 🚀");
        this.reset();
    });