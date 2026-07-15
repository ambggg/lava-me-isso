type LogoProps = {
  variant: "light" | "dark";
  className?: string;
};

export function Logo({ variant, className }: LogoProps) {
  return (
    <p className={`logo logo--${variant}${className ? ` ${className}` : ""}`}>
      lava-me<span className="logo__accent">isso.</span>
    </p>
  );
}
