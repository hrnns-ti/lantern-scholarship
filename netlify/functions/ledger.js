exports.handler = async (event) => {
    const id = Number(event.queryStringParameters?.id);

    const entries = {
        1: { title: "Ledger Entry #1", recipient: "Nadia", status: "PENDING" },
        2: { title: "Ledger Entry #2", recipient: "Raka", status: "PENDING" },
        3: { title: "Ledger Entry #3", recipient: "Sinta", status: "PENDING" },
        4: { title: "Recipient Ledger (ADMIN ONLY)", recipient: "SYSTEM", status: "LOCKED" },
    };

    if (!Number.isInteger(id) || !(id in entries)) {
        return {
            statusCode: 404,
            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
            body: "<h1>404</h1><p>Ledger entry not found.</p>",
        };
    }

    const e = entries[id];
    const flag = id === 4 ? (process.env.FLAG ?? "GDGOC{missing_env_flag}") : null;

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
        body: `
      <main style="font-family:system-ui;max-width:720px;margin:40px auto;line-height:1.5">
        <h1>${e.title}</h1>
        <p><b>recipient:</b> ${e.recipient}</p>
        <p><b>status:</b> ${e.status}</p>
        ${id === 1 ? "<hr><p><i>AUDIT LOG #2:</i> ids requested in ascending order.</p>" : ""}
        ${flag ? `<hr><h2>Vault Key</h2><pre>${flag}</pre>` : ""}
      </main>
    `,
    };
};