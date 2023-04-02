import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url as string);
  const hasTitle = searchParams.has('title');
  const title = hasTitle && searchParams.get('title')?.slice(0, 100);
  const hasDate = searchParams.has('date');
  const date = hasDate && searchParams.get('date')?.slice(0, 50);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '40px',
        }}
      >
        <div
          style={{
            color: 'purple',
            fontWeight: 'bold',
            fontSize: '24px',
            width: '100%',
            height: '100%',
            padding: '200px',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://su-pull.net/pull.jpg"
            alt="miya-ta"
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              left: '0px',
              bottom: '0px',
            }}
          />
          #{title}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              fontSize: '24px',
              bottom: '20px',
              right: '40px',
            }}
          >
            {date}
          </div>
        </div>
      </div>
    ),
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache',
      },
      width: 1200,
      height: 600,
    }
  );
}
