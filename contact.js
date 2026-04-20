export async function onRequestPost(context) {
    const data = await context.request.json();
  
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }
  
    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  }