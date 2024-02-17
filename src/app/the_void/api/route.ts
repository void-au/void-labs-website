import MailerLite from '@mailerlite/mailerlite-nodejs';

const ml = new MailerLite({
    api_key: process.env.MAILERLITE_KEY || ""
});

export async function GET(
    request: Request,
    { params }: { params: { email: string } }
) {
    // Extarct the query params from the url
    const url = new URL(request.url);
    const search_params = url.searchParams;
    const email = search_params.get("email");


    // If no email found
    if (!email) {
        return new Response("Email not found", { status: 400 });
    }

    // Send the form
    const email_params = {
        email: email,
        groups: ["113396610056062646"],
    };


    try {
        const res = await ml.subscribers.createOrUpdate(email_params);
        return new Response(JSON.stringify({ status: "success" }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ status: "error" }), { status: 500 });
    }
}