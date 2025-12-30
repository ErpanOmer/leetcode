// functions/_middleware.js

export async function onRequest(context) {
    return await context.next();
}