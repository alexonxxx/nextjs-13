import { NextResponse } from 'next/server';
export async function GET(request, { params }) {
  console.log(request);
  return new Response(JSON.stringify([{ id: params.id, name: 'Alex Balló', occupation: "Software engineer" }]),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
}
export async function PUT(request) {
  try {
    const res = await request.json();
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: "Bad format" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

}
