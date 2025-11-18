'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Abstract gradient blobs - full width, moving organically */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-4 blur-3xl animate-blob-1"
        style={{ 
          background: 'radial-gradient(circle, var(--ag-primary-end), transparent 70%)',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-3 blur-3xl animate-blob-2"
        style={{ 
          background: 'radial-gradient(circle, var(--ag-primary-start), transparent 70%)',
        }}
      />
      <div 
        className="absolute w-[700px] h-[700px] rounded-full opacity-5 blur-3xl animate-blob-3"
        style={{ 
          background: 'radial-gradient(circle, var(--ag-primary-end), transparent 70%)',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-3 blur-3xl animate-blob-4"
        style={{ 
          background: 'radial-gradient(circle, var(--ag-primary-start), transparent 70%)',
        }}
      />
      <div 
        className="absolute w-[900px] h-[900px] rounded-full opacity-2 blur-3xl animate-blob-5"
        style={{ 
          background: 'radial-gradient(circle, var(--ag-primary-end), transparent 70%)',
        }}
      />
    </div>
  );
}

