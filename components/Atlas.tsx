import Image from 'next/image';
import { atlasCities } from '@/lib/atlas';

/** L'Atlas — panneaux de villes plein écran, empilés au scroll (sticky). */
export default function Atlas() {
  return (
    <div className="atlas">
      {atlasCities.map((c, i) => (
        <div className="city" key={c.name}>
          <div className="bg">
            <Image src={c.img} alt={c.alt} fill sizes="100vw" priority={i === 0 ? false : undefined} />
          </div>
          <div className="veil" />
          <div className="topline">
            <div className="wrap">
              <span className="meta">Atlas — {String(i + 1).padStart(2, '0')}</span>
              <span className="meta">{c.institute}</span>
            </div>
          </div>
          <div className="content">
            <div className="wrap">
              <div className="row">
                <div>
                  <h3>{c.name}</h3>
                  <p className="amb">{c.ambiance}</p>
                </div>
                <div className="specs">
                  <span className="meta">{c.coords}</span>
                  <span className="meta">{c.specs}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
