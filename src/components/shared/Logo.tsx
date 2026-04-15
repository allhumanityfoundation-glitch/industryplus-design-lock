interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  light?: boolean;
}

export function Logo({ size = 'md', light = false }: LogoProps) {
  const sizes = {
    sm: { text: 'text-lg', plus: 'text-[14px]', offset: '-top-[6px] -right-[10px]' },
    md: { text: 'text-2xl', plus: 'text-[18px]', offset: '-top-[8px] -right-[14px]' },
    lg: { text: 'text-4xl', plus: 'text-[26px]', offset: '-top-[10px] -right-[18px]' },
  };

  const s = sizes[size];

  return (
    <div className="relative inline-flex items-center select-none">
      <span
        className={`${s.text} font-bold tracking-tight ${light ? 'text-white' : 'text-black'}`}
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        Industry
      </span>
      <span
        className={`absolute ${s.offset} ${s.plus} font-extrabold leading-none`}
        style={{
          background: 'linear-gradient(135deg, #FACC15 0%, #F97316 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        +
      </span>
    </div>
  );
}
