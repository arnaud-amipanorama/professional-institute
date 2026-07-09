/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' }
      // Images propriétaires : ajouter ici le domaine du CDN le moment venu,
      // ou déposer les fichiers dans /public/images et retirer ce bloc.
    ]
  }
};
export default nextConfig;
