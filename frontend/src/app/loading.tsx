import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 relative mx-auto mb-4 animate-pulse">
          <Image
            src="/Website_logo-removebg-preview.png"
            alt="FunVault Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">Loading FunVault...</h2>
        <p className="text-slate-600">Getting your gaming content ready</p>
        <div className="mt-4 flex justify-center">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce mx-1"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce mx-1" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce mx-1" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
