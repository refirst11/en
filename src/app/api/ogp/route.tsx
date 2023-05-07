import { NextRequest, ImageResponse } from 'next/server';

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
          background: '#fffffe',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            color: 'rgb(150 150 150)',
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
            src="https://www.su-pull.net/alum.png"
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              right: '-40',
              top: '-60',
              transform: 'rotate(-40deg) scaleX(-1)',
              boxShadow: '0 0 4px -1px var(--color-shadow)',
            }}
          />
          {title}
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
    )
  );
}
