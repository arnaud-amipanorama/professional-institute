import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Professional Institute — Écosystème mondial de formation professionnelle';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FBFAF7',
          padding: 72,
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, letterSpacing: 6, color: '#A98E5C', textTransform: 'uppercase' }}>
              Réseau mondial
            </div>
            <div style={{ fontSize: 34, fontWeight: 600, color: '#101418', marginTop: 8 }}>Professional Institute</div>
          </div>
          <div style={{ fontSize: 15, letterSpacing: 4, color: '#7A8290', textTransform: 'uppercase' }}>FR / EN</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 58, fontWeight: 500, color: '#0A1F3C', lineHeight: 1.1, maxWidth: 940 }}>
            Le monde professionnel est devenu la plus vaste salle de classe au monde.
          </div>
          <div style={{ display: 'flex', marginTop: 42, alignItems: 'center' }}>
            <div style={{ width: 44, height: 3, background: '#A98E5C', marginRight: 18 }} />
            <div style={{ fontSize: 17, letterSpacing: 4, color: '#7A8290', textTransform: 'uppercase' }}>
              Montréal · New York · Miami · Séville · Londres · Berlin · Rome · Malte · Marrakech · Séoul
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
