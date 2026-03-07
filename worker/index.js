export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/ledger") {
            const id = url.searchParams.get("id");

            if (["1", "2", "3", "4"].includes(id)) {
                return env.ASSETS.fetch(`https://assets.local/ledger/${id}.html`);
            }

            const notFound = await env.ASSETS.fetch("https://assets.local/ledger/notfound.html");
            return new Response(notFound.body, {
                status: 404,
                headers: notFound.headers,
            });
        }

        if (url.pathname === "/ops" || url.pathname === "/ops/") {
            return env.ASSETS.fetch("https://assets.local/ops/index.html");
        }

        return env.ASSETS.fetch(request);
    },
};