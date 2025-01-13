import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url as string);
  const hasTitle = searchParams.has('title');
  const title = hasTitle && searchParams.get('title')?.slice(0, 100);
  const hasDate = searchParams.has('date');
  const date = hasDate && searchParams.get('date')?.slice(0, 50);
  const url = process.env.PROD_URL;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#fffffe',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '200px',
            fontSize: '24px',
            color: 'rgb(150 150 150)',
            textAlign: 'center',
          }}
        >
          <img
            src={url + '/alum.png'}
            style={{
              position: 'absolute',
              top: -60,
              right: -40,
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              boxShadow: '0 0 4px -1px var(--color-shadow)',
              transform: 'rotate(-40deg) scaleX(-1)',
            }}
          />
          {title}
          <div
            style={{
              position: 'absolute',
              right: '40px',
              bottom: '20px',
              display: 'flex',
              fontSize: '24px',
            }}
          >
            {date}
          </div>
        </div>
      </div>
    )
  );
}
