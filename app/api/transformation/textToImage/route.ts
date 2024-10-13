import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Ensure the request method is POST

  if (req.method !== "POST") {
    return new Response("Only POST requests are allowed", {
      status: 405,
    });
  }

  const url =
    "https://8000-01j9vxs65b4343b00trw0c19zh.cloudspaces.litng.ai/predict";

  // Assuming the image is being sent from the frontend in the request body
  const data = await req.json();

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${process.env.TEXT_TO_IMAGE__API_TOKEN}`, // Add the bearer token here
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);

    if (response.status == 200) {
      const result = await response.arrayBuffer();
      // Convert ArrayBuffer to Buffer
      const buffer = Buffer.from(result);

      const base64Image = buffer.toString("base64");

      // Create data URL
      const imgSrc = `data:image/png;base64,${base64Image}`;

      return NextResponse.json({ result: imgSrc }, { status: 200 });
    } else if (response.status == 400) {
      return NextResponse.json(
        {
          title: "Bad Request",
          result:
            "The prompt provided does not meet the required quality standards. Please refine and try again.",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { title: "status", result: response.statusText },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { title: "Error", result: "Failed to process the request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const url =
    "https://8000-01j9vxs65b4343b00trw0c19zh.cloudspaces.litng.ai/health";

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TEXT_TO_IMAGE__API_TOKEN}`, // Add the bearer token here
    },
  };

  const response = await fetch(url, options);

  if (response.status == 200) {
    return NextResponse.json(
      { title: "Status", result: response.statusText },
      { status: 200 }
    );
  } else if (response.status == 400) {
    return NextResponse.json(
      {
        title: "Bad Request",
        result: "Use a different image as the image is not proper format.",
      },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      { title: response.statusText, result: "Server Error..." },
      { status: response.status }
    );
  }
}
