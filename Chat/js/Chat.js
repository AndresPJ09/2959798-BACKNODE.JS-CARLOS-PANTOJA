function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function comenzarChat() {
    try {
        await iniciarChat();
    } catch (error) {
        console.error("Error en el chat:", error.message);
    }
}

async function iniciarChat() {
    return new Promise(async (resolve, reject) => {
        let nombreInstructor = "Ana";
        let nombreAprendiz = prompt("¡Hola! ¿Cuál es tu nombre?");

        if (!nombreAprendiz) {
            reject(new Error("El chat ha sido cancelado porque no se proporcionó un nombre."));
            return;
        }

        alert(`¡Encantada, ${nombreAprendiz}! Soy ${nombreInstructor}, tu guía de aprendizaje interactivo.`);
        await esperar(6000);
        alert("Hoy exploraremos algunos conceptos interesantes. ¿Estás listo para aprender de una manera divertida y dinámica?");

        while (true) {
            await esperar(6000);
            let preguntaAprendiz = prompt("¿Qué tema te interesa explorar hoy? Escribe tu pregunta o 'cerrar chat' para finalizar.");
            
            if (preguntaAprendiz.toLowerCase() === "cerrar chat") {
                alert("Ha sido un placer charlar contigo. ¡Hasta la próxima!");
                resolve("Chat finalizado correctamente.");
                break;
            }

            if (!preguntaAprendiz.trim()) {
                reject(new Error("Parece que olvidaste escribir tu pregunta. Vamos, intenta de nuevo."));
                break;
            }

            await esperar(5000);
            alert(`Interesante pregunta sobre '${preguntaAprendiz}'. Déjame pensar...`);

            await esperar(5000);
            alert(`${nombreAprendiz}, en pocas palabras: 'Este tema es amplio y lleno de matices. Aprendamos juntos paso a paso.'`);
        }
    });
}
