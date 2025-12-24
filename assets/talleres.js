(function () {
  const esc = (s) => (s || "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));

  function requireFields(outEl, fields) {
    const empty = fields.some(v => !v || !v.trim());
    if (empty) {
      outEl.innerHTML = "⚠️ <strong>Completa todos los campos</strong> para generar el resultado.";
      return false;
    }
    return true;
  }

  // Taller 1
  const t1_btn = document.getElementById("t1_btn");
  const t1_out = document.getElementById("t1_out");
  t1_btn?.addEventListener("click", () => {
    const sector = document.getElementById("t1_sector").value;
    const problema = document.getElementById("t1_problema").value;
    if (!requireFields(t1_out, [sector, problema])) return;

    const ideas = [
      `Servicio ${esc(sector)} “rápido”: solución enfocada en ${esc(problema)} con entregas y suscripción.`,
      `Asistente por WhatsApp para ${esc(sector)}: guía para resolver ${esc(problema)} con mensajes automatizados.`,
      `Producto “listo para usar” en ${esc(sector)}: versión simple y económica para atacar ${esc(problema)}.`,
      `Marketplace local de ${esc(sector)}: conecta oferta y demanda para reducir ${esc(problema)}.`,
      `Membresía ${esc(sector)}: beneficios mensuales + soporte continuo para quienes enfrentan ${esc(problema)}.`
    ].sort(()=>Math.random()-0.5).slice(0,4);

    t1_out.innerHTML = `
      ✅ <strong>Ideas generadas (simulación IA):</strong>
      <ol style="margin-top:10px;">
        ${ideas.map((x,i)=>`<li><strong>Idea ${i+1}:</strong> ${x}</li>`).join("")}
      </ol>
      <div style="margin-top:10px;"><strong>Tarea:</strong> elige 1 idea y justifica su viabilidad.</div>
    `;
  });

  // Taller 2
  const t2_btn = document.getElementById("t2_btn");
  const t2_out = document.getElementById("t2_out");
  t2_btn?.addEventListener("click", () => {
    const producto = document.getElementById("t2_producto").value;
    const publico = document.getElementById("t2_publico").value;
    if (!requireFields(t2_out, [producto, publico])) return;

    const necesidades = ["Ahorro de tiempo","Calidad y confianza","Precio justo","Facilidad de compra"]
      .sort(()=>Math.random()-0.5).slice(0,3);
    const motiv = ["Comodidad","Bienestar","Resolver un problema específico"]
      .sort(()=>Math.random()-0.5).slice(0,2);
    const canales = ["WhatsApp","Instagram","Google Maps","Facebook"]
      .sort(()=>Math.random()-0.5).slice(0,3);

    t2_out.innerHTML = `
      ✅ <strong>Perfil sugerido (simulación IA):</strong>
      <ul style="margin-top:10px;">
        <li><strong>Producto/Servicio:</strong> ${esc(producto)}</li>
        <li><strong>Público objetivo:</strong> ${esc(publico)}</li>
        <li><strong>Necesidades:</strong> ${necesidades.join(", ")}</li>
        <li><strong>Motivaciones:</strong> ${motiv.join(", ")}</li>
        <li><strong>Canales recomendados:</strong> ${canales.join(", ")}</li>
        <li><strong>Mensaje clave:</strong> “${esc(producto)} pensado para ${esc(publico)}: práctico, confiable y accesible.”</li>
      </ul>
      <div style="margin-top:10px;"><strong>Tarea:</strong> ajusta 2 puntos según tu ciudad/barrio.</div>
    `;
  });

  // Taller 3
  const t3_btn = document.getElementById("t3_btn");
  const t3_out = document.getElementById("t3_out");
  t3_btn?.addEventListener("click", () => {
    const negocio = document.getElementById("t3_negocio").value;
    const canal = document.getElementById("t3_canal").value;
    const objetivo = document.getElementById("t3_objetivo").value;
    if (!requireFields(t3_out, [negocio, canal, objetivo])) return;

    const hooks = {
      "promoción": ["¡Hoy es un buen día para probar algo nuevo!","Dale un gusto a tu día con…","Tu mejor opción cerca de ti:"],
      "lanzamiento": ["¡Llegó lo nuevo!","Presentamos oficialmente…","Atención, comunidad:"],
      "descuento": ["¡Aprovecha antes que termine!","Descuento por tiempo limitado:","Oferta especial para ti:"]
    };
    const ctas = {
      "Instagram": ["Escríbenos por DM","Guarda este post","Comparte con alguien"],
      "Facebook": ["Déjanos un mensaje","Comenta y pregunta","Visítanos y comparte"],
      "WhatsApp": ["Responde a este mensaje","Escríbenos “INFO”","Agenda tu pedido ahora"]
    };

    const hook = hooks[objetivo].sort(()=>Math.random()-0.5)[0];
    const cta = ctas[canal].sort(()=>Math.random()-0.5)[0];

    t3_out.innerHTML = `
      ✅ <strong>Contenido generado (simulación IA) — ${esc(canal)}:</strong>
      <div style="margin-top:10px; padding:12px; border:1px dashed #cbd5e1; border-radius:10px;">
        <strong>${esc(negocio)}</strong><br>
        ${esc(hook)} <strong>${esc(negocio)}</strong> es ideal para ti.
        <br><br>
        ✅ <strong>${esc(cta)}</strong>
      </div>
      <div style="margin-top:10px;"><strong>Tarea:</strong> agrega ubicación y horario real.</div>
    `;
  });

  // Taller 4
  const t4_btn = document.getElementById("t4_btn");
  const t4_out = document.getElementById("t4_out");
  t4_btn?.addEventListener("click", () => {
    const pregunta = document.getElementById("t4_pregunta").value;
    if (!requireFields(t4_out, [pregunta])) return;

    const p = pregunta.toLowerCase();
    let r = "Gracias por tu consulta. ¿Podrías darme un poco más de detalle para ayudarte mejor?";

    if (p.includes("horario") || p.includes("hora")) {
      r = "Nuestro horario es de lunes a sábado de 09h00 a 18h00. Si deseas, confirmo disponibilidad para hoy.";
    } else if (p.includes("env") || p.includes("entrega") || p.includes("domicilio")) {
      r = "Sí, realizamos envíos. Envíame tu sector/barrio y te confirmo el costo y el tiempo estimado.";
    } else if (p.includes("precio") || p.includes("cuesta") || p.includes("valor")) {
      r = "Los precios varían según el producto/servicio. Indícame cuál te interesa y te envío la lista actualizada.";
    } else if (p.includes("pago") || p.includes("transfer") || p.includes("tarjeta")) {
      r = "Aceptamos efectivo y transferencias; en algunos casos tarjeta. Dime tu preferencia y te confirmo.";
    }

    t4_out.innerHTML = `
      ✅ <strong>Respuesta sugerida (simulación IA):</strong>
      <div style="margin-top:10px; padding:12px; border:1px dashed #cbd5e1; border-radius:10px;">
        ${esc(r)}
      </div>
      <div style="margin-top:10px;"><strong>Tarea:</strong> adapta con datos reales del negocio.</div>
    `;
  });

  // Taller 5
  const t5_btn = document.getElementById("t5_btn");
  const t5_out = document.getElementById("t5_out");
  t5_btn?.addEventListener("click", () => {
    const decision = document.getElementById("t5_decision").value;
    const restr = document.getElementById("t5_restriccion").value;
    if (!requireFields(t5_out, [decision, restr])) return;

    const beneficios = [
      "Posible aumento de ventas si el mensaje llega al público correcto",
      "Mejor posicionamiento frente a competidores",
      "Mayor claridad de oferta y propuesta de valor",
      "Aumento de clientes recurrentes si mejora la experiencia"
    ].sort(()=>Math.random()-0.5).slice(0,3);

    const riesgos = [
      "Gasto sin retorno si no se define bien el público",
      "Sobrecarga operativa si aumenta la demanda",
      "Percepción negativa si la comunicación es confusa",
      "Pérdida de margen si suben los costos"
    ].sort(()=>Math.random()-0.5).slice(0,3);

    t5_out.innerHTML = `
      ✅ <strong>Análisis de escenarios (simulación IA):</strong>
      <ul style="margin-top:10px;">
        <li><strong>Decisión:</strong> ${esc(decision)}</li>
        <li><strong>Restricción:</strong> ${esc(restr)}</li>
      </ul>
      <strong>Beneficios potenciales:</strong>
      <ul>${beneficios.map(x=>`<li>${x}</li>`).join("")}</ul>
      <strong>Riesgos potenciales:</strong>
      <ul>${riesgos.map(x=>`<li>${x}</li>`).join("")}</ul>
      <div style="margin-top:10px;"><strong>Tarea:</strong> define 2 indicadores para medir resultados.</div>
    `;
  });

})();
